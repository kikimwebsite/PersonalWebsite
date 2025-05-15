"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { z } from "zod";

const MessageSchema = z.object({
    author: z.string()
        .min(3, "Name is too short")
        .max(50, "Name is too long")
        .trim()
        .nonempty("Name is required"),
    title: z.string()
        .min(3, "Title is too short")
        .max(100, "Title must be less than 100 characters")
        .trim()
        .nonempty("Title is required"),
    content: z.string()
        .min(3, "Message is too short")
        .max(1000, "Message must be less than 1000 characters")
        .trim()
        .nonempty("Message content is required"),
    email: z.string()
        .email("Invalid email")
        .nonempty("Email is required"),
});

interface MessageData {
    author: string
    title: string
    content: string
    email: string
}

export async function createMessage(data: MessageData) {
    // Validate input using Zod
    const parsed = MessageSchema.safeParse(data);
    if (!parsed.success) {
        // Return the first error message
        throw new Error(parsed.error.errors[0].message);
    }
    const { author, title, content, email } = parsed.data;

    try {
        await prisma.message.create({
            data: {
                title,
                content,
                author,
                userEmail: email
            }
        });

        revalidatePath("/dashboard");
    } catch (error) {
        console.error("Failed to create message:", error);
        throw new Error("Failed to create message");
    }
}

export async function deleteMessage(messageId: string) {

    const session = await auth();

    if (!session?.user) {
        throw new Error("You must be logged in to delete a message");
    }

    if (!messageId) {
        throw new Error("Message ID is required");
    }

    try {
        // First check if the message belongs to the user
        const message = await prisma.message.findUnique({
            where: { id: messageId }
        })

        if (!message) {
            throw new Error("Message not found");
        }

        if (message.userEmail !== session?.user?.email) {
            throw new Error("You don't have permission to delete this message");
        }

        // Delete the message
        await prisma.message.delete({
            where: { id: messageId }
        });

        revalidatePath("/dashboard");
        
        //return { success: true }
    } catch (error) {
        console.error("Failed to delete message:", error)
        throw new Error("Failed to delete message. Please try again.")
    }
}
