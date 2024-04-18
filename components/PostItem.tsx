import { Calendar } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn, formatDate } from "@/lib/utils";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


interface PostItemProps {
    slug: string;
    title: string;
    description: string | undefined;
    date: string
}

export function PostItem({ title, slug, description, date }: PostItemProps) {
    return (
        <Card className="flex flex-col gap-2 border-border border-b py-3 my-5 hover:shadow-lg shadow-md ">
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="">

                </div>
                <div className="max-w-none text-muted-foreground">{description}</div>
            </CardContent>
            <CardFooter className="justify-between">
                <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                </dl>
                <Link href={slug} className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}>Read More</Link>
            </CardFooter>
        </Card>
    )
}