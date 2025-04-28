import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link
 from "next/link";

interface LinkCardProps {
  title: string
  description: string
  children: React.ReactNode;
}

export default function LinkCard({ title, description, children}: LinkCardProps) {
    return (
        <Card className="overflow-hidden mx-auto w-3xs h-1xs gap-0">
            <CardHeader className="py-0">
                <CardTitle className="text-md truncate">{title}</CardTitle>
            </CardHeader>
            <CardContent className="py-0">
                <p className="text-sm text-muted-foreground mb-4">{description}</p>
            </CardContent>
            <CardFooter className="py-0">
                {children}
            </CardFooter>
        </Card>
    )
}
