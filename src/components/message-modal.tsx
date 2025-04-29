"use client"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Message } from "@/lib/types";

interface MessageModalProps {
    message: Message
    isOpen: boolean
    onClose: () => void
}

export default function MessageModal({ message, isOpen, onClose }: MessageModalProps) {
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
            <DialogFooter>
            <Button onClick={onClose}>Close</Button>
            </DialogFooter>
        </DialogContent>
        </Dialog>
    );
}
