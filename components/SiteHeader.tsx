import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { Icons } from "./icons"
import MainNav from "./MainNav"
import MobileNav from "./MobileNav"
import ModeToggle from "./ModeToggle"

const SiteHeader = () => {
    return (
        <header className="sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-20">
            <div className="md:container flex h-14 md:max-w-screen-2xl max-w-screen items-center">
                <MainNav />
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <nav className="flex items-center ">
                        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                            <div className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0 hidden sm:flex ")}>
                                <Icons.github className="h-full w-full" />
                                <span className="sr-only">Github</span>
                            </div>
                        </Link>
                        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
                            <div className={cn(buttonVariants({ variant: "ghost" }), "w-10 px-0 hidden sm:flex")}>
                                <Icons.twitter className="h-full w-full" />
                                <span className="sr-only">Github</span>
                            </div>
                        </Link>

                        <ModeToggle />
                        {/* MOBILE NAV */}
                        <MobileNav />
                    </nav>

                </div>
            </div>
        </header>
    )
}

export default SiteHeader