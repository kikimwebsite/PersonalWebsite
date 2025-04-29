'use client'
 
import { useEffect } from 'react';
export default function Error({
  error
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>There might be some trouble with Supabase... Please try refreshing the page!</h2>
    </div>
  );
}