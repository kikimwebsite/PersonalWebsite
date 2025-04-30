'use client'
 
import { useEffect } from 'react';
export default function Error({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Supabase has recently been having trouble retrieving the messages from PostgreSQL database lately somehow...</h2>
      <h2>Meanwhile try refreshing the page few times, and it will fix the issue!</h2>
    </div>
  )
}