"use client"

import { useState } from "react";
import { useSession } from "next-auth/react";
//import type { Session } from "next-auth";
//import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import MessageModal from "@/components/message-modal";
import { CreateMessageModal } from "@/components/create-message-modal";
//import { DeleteMessageDialog } from "@/components/delete-message-dialog"
import { Plus } from "lucide-react";
import MessageCard from "@/components/message-card";
import { Message } from "@/lib/types";

interface DashboardProps {
    //session: Session | null
    messages: Message[]
}

export function MessageBoard({ messages }: DashboardProps) {
    //const router = useRouter();
    //const [selectedViewMessages, setSelectedViewMessages] = useState([...messages]);
    const [selectedViewMessage, setSelectedViewMessage] = useState<Message | null>(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    
    const { data: session } = useSession();

    const handleCreateMessage = () => {
        //setMessages([newMessage, ...messages])
        setIsCreateModalOpen(false)
        //router.refresh()
    }
    
    const handleMessageClick = (message: Message) => {
        setSelectedViewMessage(message);
        setIsViewModalOpen(true);
    }

    return (
        <>
        {session ? 
            <div>
                <h2 className="text-xl font-semibold"></h2>
                <Button onClick={() => setIsCreateModalOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                    Create New Message
                </Button>
            </div>
            : <div>Please sign in to create, edit, or delete messages</div>

        }

        {messages.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-slate-500">No messages</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {messages.map((message) => (
                <MessageCard
                key={message.id}
                message={message}
                onClick={() => handleMessageClick(message)}
                />
            ))}
            </div>
        )}

        {selectedViewMessage && (
            <MessageModal message={selectedViewMessage} isOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)} />
        )}


        {session && (
        <CreateMessageModal
            session={session}
            isOpen={isCreateModalOpen}
            onClose={() => setIsCreateModalOpen(false)}
            onCreateMessage={handleCreateMessage}
        />
        )}

        </>
    );
}
