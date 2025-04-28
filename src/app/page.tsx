import SkillsDrawer from "@/components/skillsdrawer";
import LinkCard from "@/components/link-card";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <>
            <section className="w-full max-w-md mx-auto text-center space-y-6 tracking-normal">
                <h1 className="text-5xl font-bold tracking-wide">Ki Kim</h1>
                <p className="text-muted-foreground">Full Stack Software Engineer /</p>
                <p className="text-muted-foreground">AI Developer /</p>
                <p className="text-muted-foreground">Composer /</p>
                <SkillsDrawer />
            </section>

            <section className="mx-auto my-25 lg:w-1/2 w-3/4 grid gap-10 md:grid-cols-2 grid-cols-1">
                <LinkCard
                    title="My LinkedIn"
                    description="Take a look at my professional experiences and skillsets"
                >
                    <Linkedin className="h-10 w-10 text-muted-foreground m-2" />
                    <Button variant="outline" className="ml-1">
                        <a target="_blank" href="https://www.linkedin.com/in/ki-kim-work/">
                            <h3 className="font-medium">LinkedIn</h3>
                        </a>
                    </Button>
                </LinkCard>
                <LinkCard
                    title="My GitHub Portfolio"
                    description="Source codes for my personal projects"
                    >
                    <Github className="h-10 w-10 text-muted-foreground m-2" />
                    <Button variant="outline" className="ml-1">
                        <a target="_blank" href="https://github.com/kikimwebsite">
                            <h3 className="font-medium">GitHub</h3>
                        </a>
                    </Button>
                </LinkCard>
            </section>
        </>

    );
}