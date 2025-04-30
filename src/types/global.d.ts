declare global {
    interface Window {
        AgentInitializer: {
        init: (config: {
            agentRenderURL: string;
            rootId: string;
            formID: string;
            queryParams: string[];
            domain: string;
            isDraggable: boolean;
            background: string;
            buttonBackgroundColor: string;
            buttonIconColor: string;
            variant: boolean;
            customizations: {
            greeting: string;
            greetingMessage: string;
            openByDefault: string;
            pulse: string;
            position: string;
            autoOpenChatIn: string;
            };
            isVoice: boolean;
        }) => void;
        };
    }
}

export {};