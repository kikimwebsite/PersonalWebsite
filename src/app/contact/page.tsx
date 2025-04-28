import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <div className="max-w-2xl mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

        <Card>
            <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>Any questions? Feel free to contact me through my email, LinkedIn, or Github!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
            <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                <h3 className="font-medium">kikimworkmail@gmail.com</h3>
                </div>
            </div>

            <div className="flex items-start space-x-4">
                <Linkedin className="h-5 w-5 text-muted-foreground mt-1.5" />
                <Button variant="outline" className="gap-2">
                    <a target="_blank" href="https://www.linkedin.com/in/ki-kim-work/">
                        <h3 className="font-medium">LinkedIn</h3>
                    </a>
                </Button>
            </div>

            <div className="flex items-start space-x-4">
                <Github className="h-5 w-5 text-muted-foreground mt-1.5" />
                <Button variant="outline" className="gap-2">
                    <a target="_blank" href="https://github.com/kikimwebsite">
                        <h3 className="font-medium">GitHub</h3>
                    </a>
                </Button>
            </div>
            </CardContent>
        </Card>
        </div>
    )
    }
