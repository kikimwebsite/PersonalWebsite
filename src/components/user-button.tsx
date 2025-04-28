import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SignIn, SignOut } from "@/components/auth-components";

export default async function UserButton() {
  const session = await auth()
  if (!session?.user) return <SignIn />
  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='secondary' className="relative p-3 py-5 border-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={
                  session.user.image ??
                  '/person-standing.svg'
                }
                alt={session.user.name ?? ""}
              />
            </Avatar>
            <span className="hidden text-sm sm:inline-flex">
                {session.user.email}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                    {session.user.name}
                </p>
                <p className="text-muted-foreground text-xs leading-none">
                    {session.user.email}
                </p>
                </div>
            </DropdownMenuLabel>
          <DropdownMenuItem>
            <SignOut />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
