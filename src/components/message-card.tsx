"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Message } from "@/lib/types";

interface MessageCardProps {
    message: Message
    onClick: () => void
}

export default function MessageCard({ message, onClick }: MessageCardProps) {
    return (
        <Card className="cursor-pointer hover:shadow-md transition-shadow gap-3 py-3 max-w-[250px]" onClick={onClick}>
        <CardHeader className="pb-0">
            <CardTitle className="text-lg truncate">{message.title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-1">
            <p className="text-sm text-muted-foreground truncate">Click to view full message</p>
        </CardContent>
        <CardFooter>
            <p className="text-xs text-muted-foreground">From: {message.author}</p>
        </CardFooter>
        </Card>
    )
}
