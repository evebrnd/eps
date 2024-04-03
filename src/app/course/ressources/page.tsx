"use client"

import Card from "@/app/components/Card"
import Link from "next/link"
import Image from "../../../../public/aiComputer.jpg"

export default function Page() {

    return (
        <div className="flex flex-col items-center justify-center py-2 mx-2">
            <p className="text-center text-4xl font-bold pt-8">Making Your Smart Home More Privacy-Secure</p>
            <p className="text-pretty w-5/6 py-6">Hi everyone! I'm Bob, and like many of you, I love the convenience of smart home devices. But after learning more about privacy and transparency concerns, I decided to take control and make my smart home more secure. Here's what I found:</p>
            <Card
                title="Custom Title"
                caption="Lorem ispum dolor sit amet, consectetur adipiscing elit."
                href="#"
                image={Image}
            />
        </div>
    )
}