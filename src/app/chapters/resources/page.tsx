"use client"

import Icon from '@mdi/react';
import { mdiCogOffOutline } from '@mdi/js';
import Link from "next/link"
import Image from "next/image"
import Card from "@/components/Card"
import Quiz from "@/components/Quiz"
import questionsResources from "../../utils/questionsResources.json";
import PreviousAndNextButton from "@/components/PreviousAndNextButton"
import PrivacyNotIncluded from "../../../../public/resources/privacyNotIncluded.png"
import ElectronicFrontierFoundation from "../../../../public/resources/electronicFrontierFoundation.jpg"
import GdprEnforcementTracker from "../../../../public/resources/gdprEnforcementTracker.jpg"
import RelinkLogo from "../../../../public/relinkLogo.png"
import InfographDeviceSettings from "../../../../public/resources/infographDeviceSettings.webp"
import { components_chapters, components_teaching } from '@/app/utils/constants';

export default function Page() {
    return (
        <div className="flex flex-col justify-center py-2 mx-4 md:mx-12">
            <Icon path={mdiCogOffOutline} size="4em" className="mx-auto mt-7" />
            <h1 className="flex justify-center text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Making Your Smart Home More Privacy-Secure
            </h1>

            <div className="flex flex-col text-justify mx-auto w-5/6 md:w-3/6 py-3 border-y-2 border-primary/20 mt-10">
                <p className="text-pretty mx-auto py-6">Hi everyone! I'm Bob, and like many of you, I love the convenience of smart home devices. But after learning more about privacy and transparency concerns, I decided to take back control and make my smart home more secure. Here's what I found:</p>

                <h3 className="text-pretty mt-6 mb-5 text-2xl font-semibold hover:underline hover:decoration-wavy hover:decoration-primary">First, a few <span className="text-primary">HELPFUL</span> links</h3>
                <div className="flex flex-col md:flex-row gap-4 mx-auto">
                    <Card
                        title="Privacy Not Included"
                        caption="Reviews of most IT devices (smart home, cars, toys, etc) and how they respect the users' privacy."
                        href="https://foundation.mozilla.org/en/privacynotincluded/"
                        image={PrivacyNotIncluded}
                    />
                    <Card
                        title="Electronic Frontier Foundation"
                        caption="To go further on privacy and how you could improve your smart home resilience."
                        href="https://www.eff.org/fr/deeplinks/2022/06/keeping-your-smart-home-secure-private"
                        image={ElectronicFrontierFoundation}
                    />
                </div>

                <div className="flex flex-col md:flex-row gap-4 mx-auto mt-3">
                    <Card
                        title="Privacy & Security Brainiacs"
                        caption="A sum-up leaflet of the most important privacy and security tips for your smart home."
                        href="https://designrr.s3.amazonaws.com/noahherold_at_gmx.com_146874/cybersecurity-for-grandparents-volume-4-copy_617ed985.pdf"
                        image={RelinkLogo}
                    />
                    <Card
                        title="GDPR Enforcement Tracker"
                        caption="A database that tracks the latest fines ordered on non-compliant organizations and companies."
                        href="https://www.enforcementtracker.com/"
                        image={GdprEnforcementTracker}
                    />
                </div>

                <h3 className="text-pretty mb-5 text-2xl font-semibold hover:underline hover:decoration-wavy hover:decoration-primary pt-10 mt-10 border-t-2 border-primary/20">Now let's take a look at your <span className="text-primary">settings</span></h3>

                <p className="text-pretty py-6">Most platforms allow you to adjust settings regarding data collection and its usage. But more often than not, it is hidden in the tranches of the app in question... <br /> This section aims to give a list of a few easy settings to opt out of in order to limit the data being accessed!</p>

                <ol className="relative border-s border-gray-900">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-gray-800"></div>
                        <h3 className="text-lg font-semibold">Data Collection</h3>
                        <p className="mb-4 text-base font-normal">See if you can turn off features that collect unnecessary data, like location tracking or microphone access.</p>
                        <ul className="list-inside list-['-_'] ml-6">
                            <li>  Turn off "Allow Apps to Request to Track" in Tracking settings</li>
                            <li>  Consider sharing only approximate location data rather than precise data with apps</li>
                            <li>  Opt-out of microphone, camera, location and file access when possible</li>
                            <li>  Opt-out of voice recognition settings</li>
                        </ul>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-gray-800 "></div>
                        <h3 className="text-lg font-semibold ">Data Sharing</h3>
                        <p className="mb-4 text-base font-normal ">Check if you can control who your device shares data with. Can you opt-out of third-party data sharing?</p>
                        <ul className="list-inside list-['-_'] ml-6">
                            <li>  Disable "Personalized Ads" in Advertising settings</li>
                            <li>  Toggle off "Share Analytics" in Analytics & Improvements</li>
                            <li>  Restrict visibility of shared content to "Only Me" or "Friends" in privacy settings</li>
                            <li>  Limit the visibility of personal information like birthday and contact details. You could even delete / not share information non mandatory or give approximations for sensitive data e.g birthday, home address etc </li>
                        </ul>
                    </li>
                    <li className="ms-4">
                        <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-gray-800"></div>
                        <h3 className="text-lg font-semibold">Device Activity</h3>
                        <p className="mb-4 text-base font-normal"> See if you can review and delete past voice commands or activity logs</p>
                        <ul className="list-inside list-['-_'] ml-6">
                            <li>  Specific to Echo speakers and Ring cameras: turn off Amazon Sidewalk feature to prevent data sharing with other devices</li>
                            <li>  Set auto-delete for Web & App Activity and Location History to delete data older than three months</li>
                            <li>  In general, you should regularly visit your history to delete any voice or video recordings, research history and else. This could improve your overall privacy</li>
                        </ul>
                    </li>
                </ol>
                <Link href="https://www.nytimes.com/2022/07/27/technology/personaltech/default-settings-turn-off.html" className="mt-4 italic text-gray-500">https://www.nytimes.com/2022/07/27/technology/personaltech/default-settings-turn-off.html</Link>

                <h3 className="text-pretty mb-5 text-2xl font-semibold hover:underline hover:decoration-wavy hover:decoration-primary pt-10 mt-10 border-t-2 border-primary/20">Finally read carefully the <span className="text-primary">infograph</span> on smartphone data collection</h3>
                <p className="text-pretty py-6">At this point you might be wondering, but Bob why are now talking about smartphones? Well the answer is simple, every smart phone device is connected to a hub in some way. In a vast majority of cases, this hub is your own personal smartphone. That is why it is important to also review the privacy settings and setup of this device!</p>
                <figure className="max-w-lg mx-auto my-6">
                    <Image className="h-auto max-w-full rounded-lg" src={InfographDeviceSettings} alt="Smartphone & privacy" />
                    <figcaption className="mt-2 text-sm text-center text-gray-500">https://vpnoverview.com/privacy/devices/privacy-risks-smartphone/</figcaption>
                </figure>

                <h3 className="text-pretty mt-6 mb-5 text-2xl font-semibold hover:underline hover:decoration-wavy hover:decoration-primary pt-10 border-t-2 border-primary/20"><span className="text-primary">Test your knowledge</span> on this chapter!</h3>

                <Quiz
                    questions={questionsResources}
                />

            </div>

            <blockquote className="mx-auto my-8 text-center text-xl italic font-semibold">
                <p>Don't see the resource you're looking for? <br /> <Link href={"mailto:evber2263@oslomet.no"} className="hover:underline hover:decoration-wavy hover:decoration-primary text-primary">Let us know</Link> what information you wish to see</p>
            </blockquote>

            <PreviousAndNextButton
                previousUrl={components_chapters[6].href}
                nextUrl={components_teaching[0].href}
            />

        </div>
    )
}
