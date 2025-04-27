"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Palette, X } from "lucide-react"

export default function SkillsDrawer() {
  const [open, setOpen] = useState(false)

  const skills = {
    programming: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Redux",
      "CSS",
      "Less.js",
      "Sass.js",
      "Bootstrap",
      "HTML",
      "Jest/Mocha",
      "Java",
      "Ruby",
      "R",
    ],
    databases: [
      "RESTful API",
      "API Design",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "SQL",
      "AJAX",
      "JSON Web Token",
    ],
    design: [
      "Git",
      "Responsive Design",
      "Visual Design",
      "Figma",
      "BitBucket",
      "UI Architecture",
      "Agile Development",
      "SaaS",
      "Project Management",
      "Team Management",
      "Business Management",
      "Marketing Management",
    ],
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
        <div className="mx-auto w-full max-w-4xl">
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
            <DrawerDescription>A comprehensive overview of technical and professional competencies</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

              {/* Database/Server Skills */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Databases/Server</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Design/Work Skills */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Design/Work Paradigms</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.design.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
