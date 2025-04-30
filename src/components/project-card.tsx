import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
//import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string
    description: string
    image: string
    link: string
    source: string
    tags: string[]
}

export default function ProjectCard({ title, description, image, link, source, tags }: ProjectCardProps) {
    return (
        <Card className="overflow-hidden max-w-[500px] gap-1 py-2">
            <div className="relative aspect-video m-4 border rounded-lg">
                <Image
                src={image || "/file-warning.svg"}
                alt={title}
                fill
                className="object-cover transition-transform hover:scale-105"
                />
            </div>
            <CardContent className="p-4 h-30 mb-10">
                <h3 className="font-semibold text-xl mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
                    >
                    {tag}
                    </span>
                ))}
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 grid grid-cols-1 gap-1">
                <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
                    <ExternalLink className="h-4 w-4" />
                    Link to Deployed App
                </Link>
                <Link href={source} target="_blank" className="inline-flex items-center gap-2 text-sm hover:underline">
                    <Github className="h-4 w-4" />
                    View on GitHub
                </Link>
            </CardFooter>
        </Card>
    )
}
