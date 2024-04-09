"use client"

import Link from "next/link"
import Image from "next/image"
import Card from "@/components/Card"
import PreviousAndNextButton from "@/components/PreviousAndNextButton"
import PrivacyNotIncluded from "../../../../public/resources/privacyNotIncluded.png"
import InfographDeviceSettings from "../../../../public/resources/infographDeviceSettings.webp"

export default function Page() {
    return (
        <div className="flex flex-col items-start py-2 mx-auto w-5/6">
            <p className="text-center mx-auto text-4xl font-bold pt-8">Making Your Smart Home More Privacy-Secure</p>
            <p className="text-pretty mx-auto py-6">Hi everyone! I'm Bob, and like many of you, I love the convenience of smart home devices. But after learning more about privacy and transparency concerns, I decided to take control and make my smart home more secure. Here's what I found:</p>

            <h3 className="text-pretty mt-6 mb-5 text-2xl font-semibold hover:underline hover:decoration-wavy hover:decoration-primary">First, a few <span className="text-primary">HELPFUL</span> links</h3>
            <Card
                title="Privacy Not Included"
                caption="Reviews of most IT devices (smart home, cars, toys, etc) and how they respect the users' privacy."
                href="https://foundation.mozilla.org/en/privacynotincluded/"
                image={PrivacyNotIncluded}
            />

            <h3 className="text-pretty mt-6 mb-5 text-2xl font-semibold hover:underline hover:decoration-wavy hover:decoration-primary">Now let's take a look at your <span className="text-primary">settings</span></h3>

            <ol className="relative border-s border-gray-900">
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-gray-800"></div>
                    <h3 className="text-lg font-semibold">Data Collection</h3>
                    <p className="mb-4 text-base font-normal">See if you can turn off features that collect unnecessary data, like location tracking or microphone access.</p>
                    <Link href="https://www.nytimes.com/2022/07/27/technology/personaltech/default-settings-turn-off.html" className="inline-flex items-center px-4 py-2 text-sm font-medium  bg-white border border-gray-900 hover:border-primary rounded-lg hover:text-primary focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-primary ">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg></Link>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-gray-800 "></div>
                    <h3 className="text-lg font-semibold ">Data Sharing</h3>
                    <p className="text-base font-normal ">Check if you can control who your device shares data with. Can you opt-out of third-party data sharing?</p>
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-gray-800"></div>
                    <h3 className="text-lg font-semibold ">Device Activity</h3>
                    <p className="text-base font-normal "> See if you can review and delete past voice commands or activity logs.</p>
                </li>
            </ol>

            <figure className="max-w-lg mx-auto my-6">
                <Image className="h-auto max-w-full rounded-lg" src={InfographDeviceSettings} alt="image description" />
                    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">https://vpnoverview.com/privacy/devices/privacy-risks-smartphone/</figcaption>
            </figure>

            <PreviousAndNextButton
                previousUrl="https://evebrnd.github.io/eps/chapters/three"
                nextUrl="https://evebrnd.github.io/eps/about/us"
            />
        </div>
    )
}
