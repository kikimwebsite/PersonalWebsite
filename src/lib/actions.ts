"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";

interface MessageData {
    author: string
    title: string
    content: string
    email: string
}

export async function createMessage(data: MessageData) {
    const { author, title, content, email } = data;

    if (!email) {
        throw new Error("Email is required");     
    }

    if (!author.trim()) {
        throw new Error("Name is required");
    }

    if (author.length < 3) {    
        throw new Error("Name is is too short");
    }
    if (author.length > 50) {               
        throw new Error("Name is is too long");
    }

    if (!title.trim()) {
        throw new Error("Title is required");
    }
    if (title.length > 100) {
        throw new Error("Title must be less than 100 characters");
    }
    if (title.length < 3) {
        throw new Error("Title is is too short");
    }

    if (!content.trim()) {
        throw new Error("Message content is required");
    }
    if (content.length > 1000) {
        throw new Error("Message must be less than 1000 characters");
    }
    if (content.length < 3) {
        throw new Error("Message is is too short");
    }

    try {
        await prisma.message.create({
            data: {
                title: title,
                content: content,
                author: author,
                userEmail: email
            }
        });

        revalidatePath("/dashboard");
        
        //return message;
    } catch (error) {
        console.error("Failed to create message:", error);
        throw new Error("Failed to create message");
    }
}

export async function deleteMessage(messageId: string) {

    const session = await auth();
console.log(messageId, session)
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
