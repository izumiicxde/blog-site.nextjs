"use client"

import Link from "next/link"
import { Icons } from "./icons"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"


const MainNav = () => {
    const pathname = usePathname()
    return (
        <nav className="flex items-center pr-0  space-x-4 lg:space-x-6">
            <Link href={"/"} className="mr-6 flex justify-center items-center space-x-2">
                <Icons.logo className="h-6 w-6 scale-125" />
                <span className="font-bold">{siteConfig.name}</span>
            </Link>
            <Link href={'/blog'} className={cn("text-sm font-medium  border-black transition-colors hover:text-primary hidden sm:inline-block", pathname === "/blog" ? "text-foreground underline" : "text-foreground/60 ")}>
                Blog
            </Link>
            <Link href={'/about'} className={cn("text-sm font-medium  border-black transition-colors hover:text-primary hidden sm:inline-block", pathname === "/about" ? "text-foreground underline" : "text-foreground/60 ")}>
                About
            </Link>
        </nav >
    )
}

export default MainNav