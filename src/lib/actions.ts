"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "@/lib/prisma";

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
        const message = await prisma.message.create({
            data: {
                title: title,
                content: content,
                author: author,
                userEmail: email
            }
        });

        revalidatePath("/dashboard");
        return message;

    } catch (error) {
        console.error("Failed to create message:", error);
        throw new Error("Failed to create message");
    }
}

/*
export async function updateMessage(messageId: string, data: { title: string; content: string }, author: string) {
  // Validate inputs
  if (!messageId) {
    throw new Error("Message ID is required")
  }

  if (!data.title.trim()) {
    throw new Error("Title is required")
  }

  if (!data.content.trim()) {
    throw new Error("Message content is required")
  }

  try {
    // First check if the message belongs to the user
    const message = await prisma.message.findUnique({
      where: { id: messageId },
      select: { author: true },
    })

    if (!message) {
      throw new Error("Message not found")
    }

    if (message.author !== author) {
      throw new Error("You don't have permission to edit this message")
    }

    // Update the message
    const updatedMessage = await prisma.message.update({
      where: { id: messageId },
      data: {
        title: data.title,
        content: data.content,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            image: true,
          },
        },
      },
    })

    revalidatePath("/dashboard")
    return updatedMessage
  } catch (error) {
    console.error("Failed to update message:", error)
    throw new Error("Failed to update message. Please try again.")
  }
}

export async function deleteMessage(messageId: string, author: string) {
  // Validate inputs
  if (!messageId) {
    throw new Error("Message ID is required")
  }

  try {
    // First check if the message belongs to the user
    const message = await prisma.message.findUnique({
      where: { id: messageId },
      select: { author: true },
    })

    if (!message) {
      throw new Error("Message not found")
    }

    if (message.author !== author) {
      throw new Error("You don't have permission to delete this message")
    }

    // Delete the message
    await prisma.message.delete({
      where: { id: messageId },
    })

    revalidatePath("/dashboard")
    return { success: true }
  } catch (error) {
    console.error("Failed to delete message:", error)
    throw new Error("Failed to delete message. Please try again.")
  }
}*/
