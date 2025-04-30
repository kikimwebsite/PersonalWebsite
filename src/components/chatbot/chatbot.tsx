"use client"

import { useEffect } from "react";

export default function Chatbot() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            window.AgentInitializer.init({
                agentRenderURL: "https://agent.jotform.com/01950593583b74b4879390b93b253fc14c11",
                rootId: "JotformAgent-01950593583b74b4879390b93b253fc14c11",
                formID: "01950593583b74b4879390b93b253fc14c11",
                queryParams: ["skipWelcome=1", "maximizable=1"],
                domain: "https://www.jotform.com",
                isDraggable: false,
                background: "linear-gradient(180deg, #C8CEED 0%, #C8CEED 100%)",
                buttonBackgroundColor: "#0a1551",
                buttonIconColor: "#fff",
                variant: false,
                customizations: {
                greeting: "Yes",
                greetingMessage: "Hi! How can I assist you?",
                openByDefault: "No",
                pulse: "Yes",
                position: "right",
                autoOpenChatIn: "1",
                },
                isVoice: false,
            });
        };

        // Clean up script on component unmount
        return () => {
        document.body.removeChild(script);
        };
    }, []);

    return <div id="JotformAgent-01950593583b74b4879390b93b253fc14c11"></div>;
}