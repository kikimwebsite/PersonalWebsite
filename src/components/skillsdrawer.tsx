"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    //DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Palette, X, ServerIcon, Cloud, Briefcase, Brain, Handshake } from "lucide-react";

export default function SkillsDrawer() {
    const [open, setOpen] = useState(false)

    const skills = {
        programming: [
            "TypeScript",
            "Next.js",
            "React.js",
            "React Server Components",
            "Server Side Rendering",
            "Redux",
            "React Router",
            "Jest/Mocha",
            "Python",
        ],
        design: ["Tailwind CSS", "Radix", "Shadcn/ui", "Less.js", "Sass.js", "cn", "clsx", "CSS3", "Figma"],
        server: [
            "RESTful API",
            "API Design",
            "Next.js API",
            "Serverless Architecture",
            "Node.js",
            "Express.js",
            "JSON Web Token",
            "CSRF Protection",
            "Auth.js",
            "NextAuth.js",
        ],
        databases: ["PostgreSQL", "Prisma", "Supabase", "DynamoDB", "MongoDB", "MySQL"],
        cloud: ["Vercel", "AWS", "Azure"],
        workParadigms: [
            "Git",
            "BitBucket",
            "Search Engine Optimization",
            "UI Design",
            "ARIA",
            "Agile Development",
            "SaaS"
        ],
        ai: ["AI Chat Services", "AI APIs", "Machine Learning"],
        businessPlan: [
            "Product Marketing",
            "Business Planning",
            "Monetization Strategies",
            "Amazon Ecommerce",
            "YouTube Marketing",
        ]
    }
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline" className="gap-2">
                    <Code2 className="h-4 w-4" />
                    View Skills
                </Button>
            </DrawerTrigger>
        <DrawerContent>
            <div className="mx-auto w-full max-w-4xl h-1/2vh">
                <DrawerHeader>
                    <div className="flex items-center justify-between">
                    <DrawerTitle className="text-2xl font-bold">Professional Skills</DrawerTitle>
                    <DrawerClose asChild>
                        <Button variant="ghost" size="icon">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </Button>
                    </DrawerClose>
                    </div>
                
                </DrawerHeader>
                <ScrollArea className="rounded-md border mb-3">
                    <div className="p-5 pb-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Programming Skills */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                            <Code2 className="h-5 w-5 text-primary" />
                            <h3 className="text-lg font-semibold">Programming</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                            {skills.programming.map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-sm">
                                {skill}
                                </Badge>
                            ))}
                            </div>
                        </div>

                        {/* Design Skills */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                            <Palette className="h-5 w-5 text-primary" />
                            <h3 className="text-lg font-semibold">Design Strategies</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                            {skills.design.map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-sm">
                                {skill}
                                </Badge>
                            ))}
                            </div>
                        </div>

                        {/* Server/API Skills */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <ServerIcon className="h-5 w-5 text-primary" />
                                <h3 className="text-lg font-semibold">Server/API</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.server.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="text-sm">
                                    {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Database Skills */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Database className="h-5 w-5 text-primary" />
                                <h3 className="text-lg font-semibold">Databases</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skills.databases.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="text-sm">
                                    {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Cloud Platforms */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <Cloud className="h-5 w-5 text-primary" />
                                <h3 className="text-lg font-semibold">Cloud Platforms</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                            {skills.cloud.map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-sm">
                                {skill}
                                </Badge>
                            ))}
                            </div>
                        </div>

                        {/* Work Paradigms */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-primary" />
                            <h3 className="text-lg font-semibold">Work Paradigms</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                            {skills.workParadigms.map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-sm">
                                {skill}
                                </Badge>
                            ))}
                            </div>
                        </div>

                        {/* AI Technologies */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                            <Brain className="h-5 w-5 text-primary" />
                            <h3 className="text-lg font-semibold">AI Technologies</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                            {skills.ai.map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-sm">
                                {skill}
                                </Badge>
                            ))}
                            </div>
                        </div>
                        
                        {/* Business */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                            <Handshake className="h-5 w-5 text-primary" />
                            <h3 className="text-lg font-semibold">Business/Marketing</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                            {skills.businessPlan.map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-sm">
                                {skill}
                                </Badge>
                            ))}
                            </div>
                        </div>
                        </div>
                    </div>
                </ScrollArea>
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </div>
        </DrawerContent>
        </Drawer>
    )
}
