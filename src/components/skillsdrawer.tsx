"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
    Code,
    Code2,
    Database,
    Palette,
    LockKeyhole,
    X,
    ServerIcon,
    Cloud,
    Briefcase,
    Brain,
    Handshake,
    Variable,
} from "lucide-react";

export default function SkillsDrawer() {
    const [open, setOpen] = useState(false);

    const skills = {
        frontend: [
        "TypeScript",
        "Next.js",
        "React.js",
        "Redux",
        "React Server Components",
        "Server Side Rendering (SSR)",
        "Tailwind CSS",
        "Radix",
        "shadcn/UI",
        "Search Engine Optimization",
        ],
        server: [
        "Next.js",
        "Node.js",
        "Express.js",
        "RESTful API",
        "API Design",
        "Serverless Architecture"
        ],
        databases: [
        "PostgreSQL",
        "Prisma",
        "DynamoDB",
        "MongoDB",
        "MySQL"
        ],
        cloud: ["AWS", "Azure", "Vercel", "Supabase", "Neon"],
        ai: [
        "AI Chatbots",
        "AI API Integration",
        "ChatGPT",
        "GitHub Copilot",
        "Microsoft Copilot",
        "v0"
        ],
        programming: [
        "TypeScript",
        "JavaScript",
        "Python",
        "Java",
        "Ruby",
        "C",
        "C#",
        ],
        testing: [
        "Jest",
        "Mocha",
        "CI/CD Pipelines",
        "BitBucket",
        "Jenkins",
        "Git",
        ],
        security: [
            "OAuth",
            "JWT (JSON Web Token)",
            "CSRF Protection",
            "NextAuth.js",
            "Auth.js",
        ]
    };

    return (
        <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
            <Button variant="outline" className="gap-2">
            <Code2 className="h-4 w-4" />
            View Skills
            </Button>
        </DrawerTrigger>
        <DrawerContent>
            <div className="mx-auto w-full px-17">
            <DrawerHeader>
                <div className="flex items-center justify-between">
                <DrawerTitle className="text-2xl font-bold">
                    Professional Skills
                </DrawerTitle>
                <DrawerClose asChild>
                    <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                    </Button>
                </DrawerClose>
                </div>
            </DrawerHeader>

            <ScrollArea className="h-100 rounded-md border">
                <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Frontend Skills */}
                    <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">Frontend</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {skills.frontend.map((skill) => (
                        <Badge
                            key={skill}
                            variant="secondary"
                            className="text-sm"
                        >
                            {skill}
                        </Badge>
                        ))}
                    </div>
                    </div>

                    {/* Server/API Skills */}
                    <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <Code2 className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">Backend/API</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {skills.server.map((skill) => (
                        <Badge
                            key={skill}
                            variant="secondary"
                            className="text-sm"
                        >
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
                        <Badge
                            key={skill}
                            variant="secondary"
                            className="text-sm"
                        >
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
                        <Badge
                            key={skill}
                            variant="secondary"
                            className="text-sm"
                        >
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
                        <Badge
                            key={skill}
                            variant="secondary"
                            className="text-sm"
                        >
                            {skill}
                        </Badge>
                        ))}
                    </div>
                    </div>
                    
                    {/* Security Skills */}
                    <div className="space-y-3">     
                        <div className="flex items-center gap-2">
                            <LockKeyhole className="h-5 w-5 text-primary" />
                            <h3 className="text-lg font-semibold">Security</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.security.map((skill) => (
                            <Badge
                                key={skill}
                                variant="secondary"
                                className="text-sm"
                            >
                                {skill}
                            </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Programming Languages */}
                    <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <Variable className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">Programming</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {skills.programming.map((skill) => (
                        <Badge
                            key={skill}
                            variant="secondary"
                            className="text-sm"
                        >
                            {skill}
                        </Badge>
                        ))}
                    </div>
                    </div>

                    {/* Testing & Deployment */}
                    <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-semibold">Testing & CI/CD</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {skills.testing.map((skill) => (
                        <Badge
                            key={skill}
                            variant="secondary"
                            className="text-sm"
                        >
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
    );
}