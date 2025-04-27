"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-row flex-shrink-0 mr-15">
            <Link href="/" className="text-2xl font-bold mr-15">
              Ki Kim
            </Link>

            <Link
            href="/"
            className={cn(
                "inline-flex items-center px-1 pt-1 text-md font-medium border-b-2 mr-6",
                pathname === "/"
                ? "border-primary text-gray-900"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
            )}
            >
            Main
            </Link>
            <Link
            href="/projects"
            className={cn(
                "inline-flex items-center px-1 pt-1 text-md font-medium border-b-2 mr-6",
                pathname === "/projects"
                ? "border-primary text-gray-900"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
            )}
            >
            Projects
            </Link>
            <Link
            href="/messages"
            className={cn(
                "inline-flex items-center px-1 pt-1 text-md font-medium border-b-2 mr-6",
                pathname === "/messages"
                ? "border-primary text-gray-900"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
            )}
            >
            Messages
            </Link>
            <Link
            href="/contact"
            className={cn(
                "inline-flex items-center px-1 pt-1 text-md font-medium border-b-2",
                pathname === "/contact"
                ? "border-primary text-gray-900"
                : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
            )}
            >
            Contact
            </Link>
          </div>
          <div >
            test
          </div>
        </div>
      </div>
    </nav>
  )
}
