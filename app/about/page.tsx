import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { siteConfig } from '@/config/site'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: " About Me",
    description: "Information about the site owner",
}

const About = async () => {
    return (
        <div className='container max-w-6xl py-6 lg:py-10'>
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-x-4">
                    <h1 className='inline-block font-black text-4xl lg:text-5xl'>About Me.</h1>
                </div>
            </div>
            <hr className='my-8' />

            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="min-w-48 max-w-48 flex flex-col gap-2 ">
                    <Avatar className="h-48 w-48 ">
                        <AvatarImage src='/avatarr.jpeg' className='object-top object-cover' alt={siteConfig.author} />
                        <AvatarFallback>
                            IZ
                        </AvatarFallback>
                    </Avatar>
                    <h2 className='text-2xl font-bold text-center break-words'>
                        {siteConfig.author}
                    </h2>
                    <p className="text-muted-foreground text-center break-words">
                        software dev
                    </p>
                </div>
                <p className="text-muted-foreground text-lg py-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat perspiciatis dolores provident eligendi in aliquid, neque placeat ea quibusdam magnam consectetur nobis, earum totam amet? Eaque sapiente deserunt suscipit doloremque illum nulla quidem facere?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis earum nulla et alias, delectus mollitia dignissimos a error atque quae reiciendis labore doloribus doloremque sapiente veritatis quos magnam possimus pariatur ipsa expedita, vel, quod necessitatibus nesciunt sunt! Cumque, iure error?
                </p>
            </div>
        </div>
    )
}

export default About