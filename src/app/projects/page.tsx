import ProjectCard from "@/components/project-card";

export default function Projects() {
    return (
        <div className="mx-auto py-3">
            <h1 className="text-2xl font-bold mb-10">Projects</h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <ProjectCard
                    title="My Personal Portfolio"
                    description="."
                    image=""
                    link="https://github.com/kikimwebsite/PersonalWebsite"
                    tags={[]}
                />
                <ProjectCard
                    title="Message Board"
                    description="."
                    image=""
                    link="https://github.com/kikimwebsite/PersonalWebsite/tree/main/src/app/messages"
                    tags={[]}
                />
                <ProjectCard
                    title="WIP"
                    description="Fixing some hosting issues... will be back up soon!"
                    image="/?height=400&width=600"
                    link="https://github.com"
                    tags={[]}
                />
            </div>
        </div>
    )
}
