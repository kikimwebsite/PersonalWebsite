/*
"use client"

import type React from "react";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Loader2 } from "lucide-react";
import { createMessage } from "@/lib/actions";

interface CreateMessageModalProps {
  userId: string
  isOpen: boolean
  onClose: () => void
  onCreateMessage: (message: any) => void
}

interface FormErrors {
  title?: string
  body?: string
  form?: string
}

export function CreateMessageModal({ userId, isOpen, onClose, onCreateMessage }: CreateMessageModalProps) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = () => {
    const newErrors: FormErrors = {}
    let isValid = true

    if (!title.trim()) {
      newErrors.title = "Title is required"
      isValid = false
    } else if (title.length > 100) {
      newErrors.title = "Title must be less than 100 characters"
      isValid = false
    }

    if (!body.trim()) {
      newErrors.body = "Message content is required"
      isValid = false
    } else if (body.length > 1000) {
      newErrors.body = "Message must be less than 1000 characters"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setErrors({})

    try {
      const newMessage = await createMessage({
        title,
        content,
        userId,
      })

      onCreateMessage(newMessage)
      setTitle("")
      setBody("")
      onClose()
    } catch (error) {
      console.error("Failed to create message:", error)
      setErrors({
        form: "Failed to create message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting) {
      setTitle("")
      setBody("")
      setErrors({})
      onClose()
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
            <Label htmlFor="body" className="flex justify-between">
              <span>Message</span>
              {errors.body && <span className="text-xs text-destructive">{errors.body}</span>}
            </Label>
            <Textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your message here..."
              rows={5}
              className={errors.body ? "border-destructive" : ""}
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
*/