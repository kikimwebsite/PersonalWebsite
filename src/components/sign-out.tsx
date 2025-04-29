'use client'

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export default function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
    return (
        <Button
            variant="ghost"
            className="w-full p-0"
            onClick={() => signOut()} 
            {...props}
            >
            Sign Out
        </Button>
    )
}
