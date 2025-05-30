import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
        <form
        action={async () => {
            "use server"
            await signIn(provider)
        }}
        >
        <Button {...props}>Sign In</Button>
        </form>
  )
}