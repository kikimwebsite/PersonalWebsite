"use client"

import { useState } from "react";
import type { Session } from "next-auth";
//import { useRouter } from "next/navigation";

//import { Button } from "@/components/ui/button";
import MessageModal from "@/components/message-modal";
//import { CreateMessageModal } from "@/components/create-message-modal"
//import { DeleteMessageDialog } from "@/components/delete-message-dialog"
//import { Plus } from "lucide-react";
import MessageCard from "@/components/message-card";
import { Message } from "@/lib/types";

interface DashboardProps {
    session: Session | null
    messages: Message[]
}

export function MessageBoard({ session, messages }: DashboardProps) {
    //const router = useRouter();
    //const [selectedMessages, setSelectedMessages] = useState([...messages]);
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
/*
    const handleCreateMessage = (newMessage: MessageWithUser) => {
        setMessages([newMessage, ...messages])
        setIsCreateModalOpen(false)
        router.refresh()
    }
        
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">All Messages</h2>
            <Button onClick={() => setIsCreateModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Create New Message
            </Button>
        </div>

        <CreateMessageModal
            userId={session.user?.id || ""}
            isOpen={isCreateModalOpen}
            onClose={() => setIsCreateModalOpen(false)}
            onCreateMessage={handleCreateMessage}
        />
    
    */
    const handleMessageClick = (message: Message) => {
        setSelectedMessage(message);
        setIsViewModalOpen(true);
    }

    return (
        <>

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

        {selectedMessage && (
            <MessageModal message={selectedMessage} isOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)} />
        )}

        </>
    );
}
