import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { MessageBoard } from "@/components/message-board";

export default async  function Messages() {

    const session = await auth();

    try {
        const messages = await prisma.message.findMany({
            select: {
                id: true,
                author: true,
                title: true,
                content: true,
                userEmail: true
            },
        });
        
        return (
            <div className="mx-auto py-3">
                <h1 className="text-2xl font-bold mb-3">Message Board</h1>
                <p className="text-muted-foreground mb-5">Feel free to leave any messages; impressions, feedbacks, and jokes!</p>
                <MessageBoard session={session} messages={messages} />
            
            </div>
        );
      } catch (error) {
        console.error("Failed to fetch messages:", error);
        throw new Error("Failed to load messages");
      }

}