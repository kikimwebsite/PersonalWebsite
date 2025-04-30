"use client"

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import MessageModal from "@/components/message-modal";
import { CreateMessageModal } from "@/components/create-message-modal";
import { Plus } from "lucide-react";
import MessageCard from "@/components/message-card";
import { Message } from "@/lib/types";

interface DashboardProps {
    messages: Message[]
}

export function MessageBoard({ messages }: DashboardProps) {
    const [selectedViewMessage, setSelectedViewMessage] = useState<Message | null>(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    
    const { data: session, status } = useSession();

    const handleMessageClick = (message: Message) => {
        setSelectedViewMessage(message);
        setIsViewModalOpen(true);
    }

    return (
        <div className="max-w-[900px]">
            <div className="mb-4">
                {status === "authenticated" ? 
                    <>
                        <Button onClick={() => setIsCreateModalOpen(true)}>
                        <Plus className="h-4 w-4 mr-2" />
                            Create a New Message
                        </Button>

                    </>
                    : <>Please sign in to create, edit, or delete messages</>
                }
            </div>

            {messages.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow">
                <p className="text-slate-500">No messages</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
                <MessageModal 
                    message={selectedViewMessage} 
                    isOpen={isViewModalOpen} 
                    onClose={() => {
                        setIsViewModalOpen(false);
                        setSelectedViewMessage(null);
                    }} 
                    email={session?.user?.email}
                />
            )}


            {status === "authenticated" && (
                <CreateMessageModal
                    session={session}
                    isOpen={isCreateModalOpen}
                    onClose={() => setIsCreateModalOpen(false)}
                />
            )}

        </div>
    );
}
