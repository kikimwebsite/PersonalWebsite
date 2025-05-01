import { prisma } from "@/lib/prisma";
import { MessageBoard } from "@/components/message-board";

export default async  function Messages() {

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
                <p className="text-muted-foreground">Feel free to leave any messages; impressions, feedbacks, and jokes!</p>
                <p className="text-muted-foreground mb-3">You can view all messages but can only delete your own messages</p>
                {/*<p className="text-destructive mb-3">If you get any error, please try clicking buttons again to refresh, as Superbase server might be having some issues right now</p>*/}
                <MessageBoard messages={messages} />
            </div>
        );
      } catch (error) {
        console.error("Failed to fetch messages:", error);
        throw new Error("Failed to load messages");
      }

}