"use client"

import Icon from '@mdi/react';
import { mdiHandBackLeftOffOutline } from '@mdi/js';
import PreviousAndNextButton from "@/components/PreviousAndNextButton";

export default function Page() {
    return (
        <div className="flex flex-col justify-center py-2 mx-4 md:mx-12">
            <Icon path={mdiHandBackLeftOffOutline} size="4em" className="mx-auto mt-7" />
            <h1 className="flex justify-center text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Transparency of Smart Home Devices
            </h1>

            <div className="flex flex-col text-justify  mx-auto w-5/6 md:w-3/6 py-3 border-y-2 border-primary/20 mt-10">
                <h3 className="mt-8 text-3xl font-semibold tracking-tight">
                    4.1. The black box
                </h3>
                <p className="leading-7 mt-3 md:mt-6">
                    In this context, the word <strong>transparency</strong> refers to how and if the company / maker of the device communicates about what data they collect, how & why they collect it and what they will use it for. A lot of the times, smart home devices are 'black boxes', meaning that we do not know what is going on in there and the manufacturer does not tell us anything either.
                </p>
                <p className="leading-7">
                    TO DO CONCRETE EXAMPLE
                </p>
                <p className="leading-7 mt-3 md:mt-6">
                    This lack of transparency is a significant concern, particularly in an era where data privacy and security are paramount. Users are too often left in the dark about the information collected about them and about what risks and vulnerabilities they may be exposed to.
                </p>
                <p className="leading-7 mt-3 md:mt-6">
                    Moreover, if users don't know that data collection is happening, it leaves the door open for for potential misuse. The data could be sold, it could be used for targeted advertising, or even to impersonate people.
                </p>
                <p className="leading-7">
                    TODO examples of companies abusing this data / data leaks?                
                </p>


                <h3 className="mt-8 text-3xl font-semibold tracking-tight">
                    4.2. What data is being processed?
                </h3>
                <p className="leading-7 mt-3">
                    Smart home devices collect a myriad of data every day, the extent and type of which varies depending on the device and its capabilities. For instance, smart speakers like Amazon's Echo or Google Home record voice commands, while smart thermostats like Nest track household temperature preferences and occupancy patterns. Smart cameras and doorbells capture video and audio feeds. Meanwhile, smart TVs and streaming devices may track viewing habits. Even simple devices like smart light bulbs can collect data about when and how often certain lights are turned on and off. This data, when collated and analyzed, can provide a detailed insight into your behavior, preferences, and daily routines.
                </p>
                <blockquote className="my-6 border-l-2 pl-2 italic font-semibold text-xl">
                    “Even simple devices like smart light bulbs can collect data about when and how often certain lights are turned on and off”
                </blockquote>
                <p className="leading-7">
                    If you are a citizen of the EU / EAA, companies are legally required to have a privacy policy in which they detail exactly what data they collect about you, why they collect it (their legal basis), for how long they keep it and with whom they share it. This is the result of the GDPR(general data protection regulation). It also gives users the right to request a copy of the data a company holds about them and the right to erasure – meaning that you can request a company to delete all data they hold about you (unless the company must keep the data to comply with other regulations).
                </p>

                <h3 className="mt-8 text-3xl font-semibold tracking-tight">
                    4.3. Why this matters.
                </h3>
                <p className="leading-7 mt-3">
                    With most smart devices, users do not have a way of knowing exactly when it is recording something and where, how & for how long the collected data is stored. The importance of these questions cannot be overstated, since the data they collect is often personal and sensitive - not something you want companies like Amazon, Google, Apple & all of their partners to know and potentially sell. In the worst case scenario, this data falling into the wrong hands can lead to identity theft, where someone can impersonate you because they know so much about you and your habits. This is why companies should be transparent about what data they collect and what measures they put in place to protect sensitive data.
                </p>
            </div>

            <PreviousAndNextButton
                previousUrl="https://evebrnd.github.io/eps/chapters/three"
                nextUrl="https://evebrnd.github.io/eps/about/us"
            />
        </div>
    );
}