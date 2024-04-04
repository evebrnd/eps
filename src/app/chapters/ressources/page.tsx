"use client"

import Card from "@/components/Card"
import Footer from "@/components/Footer"
import Image from "../../../../public/aiComputer.jpg"
import PreviousAndNextButton from "@/components/PreviousAndNextButton"

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
            <PreviousAndNextButton
                previousUrl="https://evebrnd.github.io/eps/chapters/three"
                nextUrl="https://evebrnd.github.io/eps/about/relink"
            />
            <Footer />
        </div>
    )
}