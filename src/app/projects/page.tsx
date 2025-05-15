import ProjectCard from "@/components/project-card";

export default function Projects() {
    return (
        <div className="py-3 max-w-[900px]">
            <h1 className="text-2xl font-bold mb-10">Projects</h1>

            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                    title="My Personal Portfolio"
                    description="Personal Portfolio in Next.js, TypeScript, and Tailwind. Showcases an automated AI chatbot programmed and trained to introduce myself and my projects."
                    image="/projects/Main.png"
                    link="https://kikim.dev/"
                    source="https://github.com/kikimwebsite/PersonalWebsite"
                    tags={[]}
                />
                <ProjectCard
                    title="Message Board"
                    description="Message board where users can sign in with OAuth using Auth.js to post and delete messages. Messages are saved in PostgreSQL Supabase database."
                    image="/projects/Message.png"
                    link="https://kikim.dev/messages"
                    source="https://github.com/kikimwebsite/PersonalWebsite/tree/main/src/app"
                    tags={[]}
                />
                <ProjectCard
                    title="E-Commerce Shop"
                    description="(WIP) Demo E-Commerce shop with Next.js, Material UI, Context API, and Node.js, and deployed to Azure. View and shop various toy products."
                    image="/projects/Ecommerce.png"
                    link="https://aketoy-gzg9gfc6g0bch5dz.centralus-01.azurewebsites.net/"
                    source="https://github.com/kikimwebsite/Ecommerce-client"
                    tags={[]}
                />

            </div>
        </div>
    )
}
