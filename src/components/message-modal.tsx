"use client"

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import DeleteMessageDialog from "@/components/delete-dialog";
import { Message } from "@/lib/types";

interface MessageModalProps {
    message: Message
    isOpen: boolean
    onClose: () => void
    email?: string | null
}

export default function MessageModal({ message, isOpen, onClose, email }: MessageModalProps) {

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
            <DialogTitle>{message.title}</DialogTitle>
            <DialogDescription>From: {message.author}</DialogDescription>
            </DialogHeader>
            <div className="py-4">
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{message.content}</p>
            </div>
            <DialogFooter className="flex sm:justify-between">
                {email && message.userEmail === email && 
                    <>
                    <DeleteMessageDialog
                        messageId={message.id}
                        isOpen={isDeleteModalOpen}
                        onCloseModalOnly={() => setIsDeleteModalOpen(false)}
                        onClose={() => {
                            setIsDeleteModalOpen(false);
                            onClose();
                        }}
                    />
                    <Button variant={"destructive"} onClick={() => setIsDeleteModalOpen(true)}>DELETE</Button>
                    </>
                }
                <Button className="ml-auto" onClick={onClose}>Close</Button>
            </DialogFooter>
        </DialogContent>
        </Dialog>
    );
}
