'use client'
 
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Supabase has recently been having trouble retrieving the messages from PostgreSQL database lately somehow... Meanwhile try refreshing the page few times, and it will fix the issue!</h2>
      <Button
        onClick={
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}