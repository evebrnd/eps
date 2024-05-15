"use client"

import Icon from '@mdi/react';
import Image from "next/image"
import { mdiHandBackLeftOffOutline } from '@mdi/js';
import PreviousAndNextButton from "@/components/PreviousAndNextButton";
import Sidebar from '@/components/SideBar';
import Quiz from '@/components/Quiz';
import TransparencyImage from "/public/transparency/connectedHome.png"
import { components_chapters } from '@/app/utils/constants';
import QuestionsTransparency from "../../utils/questionsTransparency.json";

export default function Page() {
    const chapters = [
        { title: 'Introduction', id: 'Introduction' },
        { title: "The black box", id: "Chapter_1.0" },
        { title: "What data is being processed?", id: "Chapter_2.0" },
        { title: "Why this matters", id: "Chapter_3.0" },
        { title: "Quiz", id: "quiz"}
    ];

    return (
        <div className="flex flex-wrap">
            {/* The sidebar of the page */}
            <Sidebar chapters={chapters} />

            {/* The main content of the page */}

            <div className="flex flex-col justify-center py-2 mx-auto w-5/6 md:w-3/6">
                <Icon path={mdiHandBackLeftOffOutline} size="4em" className="mx-auto mt-7" />
                <h1 id='Introduction' className="flex justify-center text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Transparency of Smart Home Devices
                </h1>

                <div className="flex flex-col text-pretty py-3 border-y-2 border-primary/20 mt-10">
                    <h3 id="Chapter_1.0" className="mt-8 text-3xl font-semibold tracking-tight">
                        1.0. The black box
                    </h3>
                    <p className="leading-7 mt-3 md:mt-6">
                        In our interactions with smart home devices, the term <strong>'transparency'</strong>  often refers to the degree to which a company or device maker is open about their data collection practices. This includes the data they collect from us, why and how they collect it, and their intended use for this data. Unfortunately, these devices often act like 'black boxes', with their operations remaining a mystery and manufacturers providing little information.
                        <br /><br />
                        This lack of transparency is a significant concern, particularly in a time where data privacy and security are so important. Users frequently find themselves in the dark about the nature of the information being collected, leaving them unaware of potential risks and vulnerabilities.
                        <br /><br />
                        Furthermore, if users are not aware of data collection, it opens up possibilities for misuse. The collected data could be sold, used for targeted advertising, or even for impersonation.
                    </p>

                    <h3 id="Chapter_2.0" className="mt-8 text-3xl font-semibold tracking-tight">
                        2.0. What data is being processed?
                    </h3>
                    <p className="leading-7 mt-3">
                        Picture this: your smart home devices are like little detectives, constantly collecting clues about your daily life. Whether it's your Amazon Echo eavesdropping on your music preferences, your Nest thermostat taking note of your cozy temperature sweet spot, or your smart TV keeping tabs on your binge-watching habits, these devices are always gathering information. Even your humble smart light bulb is in on the action, quietly observing when and how often you flick the switch. Put all these pieces together, and voila! You have a detailed portrait of your behaviors, preferences, and routines.
                    </p>
                    <blockquote className="my-6 border-l-2 pl-2 italic font-semibold text-xl">
                        “Even simple devices like smart light bulbs can collect data about when and how often certain lights are turned on and off”
                    </blockquote>
                    <p className="leading-7">
                        Now, if you're living in the EU/EAA, here's the good news. The companies behind these devices can't just hoard your data like some digital dragon sitting on a mountain of gold. Thanks to the General Data Protection Regulation (GDPR), they have to tell you exactly what kind of data they're collecting, why they're doing it, how long they're keeping it, and who else gets a peek at it. Think of it as a digital Miranda rights of sorts.
                        <br /><br />
                        But wait, there's more! GDPR also gives you the power to demand a copy of your own data dossier. Not only that, you also have the 'right to erasure'. That's right, you can ask the company to delete all the data they've gathered about you. The only exception is if they're legally bound to keep it for compliance purposes. So, in the world of data privacy, you're not just a spectator, but a player.
                    </p>

                    <h3 id="Chapter_3.0" className="mt-8 text-3xl font-semibold tracking-tight">
                        3.0. Why this matters.
                    </h3>
                    <p className="leading-7 mt-3">
                        Here's why all of this is a big deal. With most of our smart gizmos, we're left in the dark about when they're recording our actions, and the whereabouts, methods, and duration of how our data is stored. The gravity of these unknowns is immense, given the personal and sensitive nature of the data harvested.
                        <br /><br />
                        Imagine this: companies like Amazon, Google, Apple, and all their buddies having access to your private information, and even potentially trading it. It's like giving them a VIP pass to your life's concert, with all the backstage access! In a nightmarish scenario, this data could slip into the wrong hands, paving the way for identity theft. Suddenly, there's a doppelgänger of you out there, knowing everything about you, from your bedtime routine to your favorite pizza topping.
                        <br /><br />
                        This is precisely why companies need to pull back the curtain and be upfront about the data they collect and the safety measures they adopt to guard this sensitive information. Transparency isn't just a nice-to-have, it's a must-have in the world of data privacy.
                    </p>
                    <Image src={TransparencyImage} alt="Connected Home" className="mx-auto" width="500" />

                    <h3 className="text-pretty mt-3 mb-3 text-2xl font-semibold hover:underline hover:decoration-wavy hover:decoration-primary pt-10 border-t-2 border-primary/20"><span className="text-primary">Test your knowledge</span> on this chapter!</h3>
                    <div className="flex text-center">
                        <Quiz questions={QuestionsTransparency} />
                    </div>
                </div>

                <PreviousAndNextButton
                    previousUrl={components_chapters[2].href}
                    nextUrl={components_chapters[4].href}
                />
            </div>
        </div>
    );
}