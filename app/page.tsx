import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import Link from "next/link";
import { posts } from "#site/content"
import { PostItem } from "@/components/PostItem";


export default function Home() {

  const latestPosts = sortPosts(posts).slice(0, 5)
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32 ">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black">
            Hello,I&apos;m Izumi
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            welcome to my personal blog, built using Next, Tailwind etc..
          </p>

          <div className="flex flex-col gap-4 justify-center sm:flex-row ">
            <Link href={'/blog'} className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}>View blog posts</Link>
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full sm:w-fit")}>
              Github
            </Link>
          </div>
        </div>
      </section>
      <section className="container mt-60 max-w-4xl py-6 lg:py-10 flex flex-col space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
          Latest Posts
        </h2>
        <ul className="flex flex-col">
          {latestPosts?.map((post) => (
            <li key={post.slug} className="first:border-t first:border-border">
              <PostItem slug={post.slug} title={post.title} description={post.description} date={post.date} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
