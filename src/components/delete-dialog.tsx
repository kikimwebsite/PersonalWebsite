"use client"

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";
import { deleteMessage } from "@/lib/actions";

interface DeleteMessageDialogProps {
    messageId: string,
    isOpen: boolean,
    onClose: () => void,
    onCloseModalOnly: () => void
}

export default function DeleteMessageDialog({ messageId, isOpen, onClose, onCloseModalOnly}: DeleteMessageDialogProps) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleDelete = async () => {
        setIsDeleting(true);
        setError(null);

        try {
            await deleteMessage(messageId);
            onClose();
        } catch (error) {
            console.error("Failed to delete message:", error);
            setError("Failed to delete message. Please try again.");
        } finally {
            setIsDeleting(false);
        }
    }

    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this message?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your message.
                {error && <div className="mt-2 text-destructive text-sm">{error}</div>}
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex sm:justify-between">
                <AlertDialogCancel 
                    onClick={(e) => {
                        e.preventDefault();
                        onCloseModalOnly();
                    }}
                    className="text-primary-foreground bg-primary hover:text-primary-foreground hover:bg-primary/90" disabled={isDeleting}>Cancel</AlertDialogCancel>
                <AlertDialogAction
                    onClick={(e) => {
                        e.preventDefault();
                        handleDelete();
                    }}
                    disabled={isDeleting}
                    className="bg-destructive hover:bg-destructive/90"
                >
                    {isDeleting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Deleting...
                    </>
                    ) : (
                        <>DELETE</>
                    )}
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    );
}
