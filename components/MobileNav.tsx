"use client"

import React, { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { Icons } from "./icons"
import { siteConfig } from "@/config/site"

const MobileNav: React.FC = () => {
    const [open, setOpen] = useState<boolean | undefined>(false)
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant={"outline"} className="w-10 px-0 sm:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side={"right"}>
                <MobileLink onOpenChange={setOpen} href={'/'} className='flex items-center'>
                    <Icons.logo className="mr-2  h-7 w-7" />
                    <span className="font-bold">{siteConfig.name}</span>
                </MobileLink>
                <div className="flex flex-col gap-3  mt-3">
                    <MobileLink onOpenChange={setOpen} href={'/blog'}  >Blog</MobileLink>
                    <MobileLink onOpenChange={setOpen} href={'/about'}  >About</MobileLink>
                    <div className="flex items-center gap-5 mt-3">
                        <Link href={siteConfig.links.github} target="_blank" rel="noreffer">
                            <Icons.twitter className="w-5 h-5" />
                        </Link>
                        <Link href={siteConfig.links.github} target="_blank" rel="noreffer">
                            <Icons.github className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

            </SheetContent>
        </Sheet>
    )
}

export default MobileNav


interface MobileLinksProps extends LinkProps {
    children: React.ReactNode;
    onOpenChange?: (open: boolean) => void;
    className?: string
}


function MobileLink({
    href, onOpenChange, children, className, ...props
}: MobileLinksProps) {
    const router = useRouter()

    return <Link href={href} onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
    }} {...props}
        className={className}
    >
        {children}
    </Link>
}