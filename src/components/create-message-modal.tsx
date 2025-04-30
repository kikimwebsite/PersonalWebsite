"use client"

import type React from "react";
import { useState } from "react";
import type { Session } from "next-auth";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Loader2 } from "lucide-react";
import { createMessage } from "@/lib/actions";

interface CreateMessageModalProps {
    session: Session
    isOpen: boolean
    onClose: () => void
}

interface FormErrors {
    title?: string
    content?: string
    author?: string
    form?: string
}

export function CreateMessageModal({ session, isOpen, onClose }: CreateMessageModalProps) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});

    const validateForm = () => {
        const newErrors: FormErrors = {};
        let isValid = true;

        if (!title.trim()) {
            newErrors.title = "Title is required";
            isValid = false;
        } else if (title.length > 100) {
            newErrors.title = "Title must be less than 100 characters";
            isValid = false;
        } else if (title.length < 3) {
            newErrors.title = "Title must be more than 3 characters";
            isValid = false;
        }

        if (!content.trim()) {
            newErrors.content = "Message content is required";
            isValid = false;
        } else if (content.length > 1000) {
            newErrors.content = "Message must be less than 1000 characters";
            isValid = false;
        } else if (content.length < 3) {
            newErrors.content = "Message must be more than 3 characters";
            isValid = false;
        }

        if (!author.trim()) {
            newErrors.author = "name is required";
            isValid = false;
        } else if (author.length > 100) {
            newErrors.title = "Name must be less than 100 characters";
            isValid = false;
        } else if (author.length < 3) {
            newErrors.title = "Name must be more than 3 characters";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setErrors({});

        try {
            await createMessage({
                title,
                content,
                author,
                email: session?.user?.email || "",
            })

            setTitle("");
            setContent("");
            setAuthor("");
            onClose();
        } catch (error) {
            console.error("Failed to create message:", error);
            setErrors({
                form: "Failed to create message. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    const handleClose = () => {
        if (!isSubmitting) {
            setTitle("");
            setContent("");
            setAuthor("");
            setErrors({});
            onClose();
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
            <DialogTitle>Create New Message</DialogTitle>
            </DialogHeader>

            {errors.form && (
            <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{errors.form}</AlertDescription>
            </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="title" className="flex justify-between">
                        <span>Title</span>
                        {errors.title && <span className="text-xs text-destructive">{errors.title}</span>}
                    </Label>
                    <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter message title"
                        className={errors.title ? "border-destructive" : ""}
                        disabled={isSubmitting}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="content" className="flex justify-between">
                        <span>Message</span>
                        {errors.content && <span className="text-xs text-destructive">{errors.content}</span>}
                    </Label>
                    <Textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your message here..."
                        rows={5}
                        className={errors.content ? "border-destructive" : ""}
                        disabled={isSubmitting}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="author" className="flex justify-between">
                        <span>From: </span>
                        {errors.author && <span className="text-xs text-destructive">{errors.author}</span>}
                    </Label>
                    <Input
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Enter your name"
                        className={errors.author ? "border-destructive" : ""}
                        disabled={isSubmitting}
                    />
                </div>
                <div className="flex justify-end gap-2">
                    <Button type="button" variant="outline" onClick={handleClose} disabled={isSubmitting}>
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Submitting...
                            </>
                        ) : (
                            "Submit Message"
                    )}
                    </Button>
                </div>
            </form>
        </DialogContent>
        </Dialog>
    )
}
