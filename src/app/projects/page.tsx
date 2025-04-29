import ProjectCard from "@/components/project-card";

export default function Projects() {
    return (
        <div className="py-3 max-w-[1000px]">
            <h1 className="text-2xl font-bold mb-10">Projects</h1>

            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                    title="My Personal Portfolio"
                    description="Personal Portfolio in Next.js, TypeScript, and Tailwind."
                    image="/Main.png"
                    link="https://github.com/kikimwebsite/PersonalWebsite"
                    tags={[]}
                />
                <ProjectCard
                    title="Message Board"
                    description="Message board where users can sign in with OAuth using Auth.js to post, update, and delete messages. Messages are saved in PostgreSQL Supabase database."
                    image="/Message.png"
                    link="https://github.com/kikimwebsite/PersonalWebsite/tree/main/src/app"
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
