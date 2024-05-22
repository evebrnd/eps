"use client"

import Image from "next/image";
import Icon from '@mdi/react';
import { mdiInformationSlabBoxOutline } from '@mdi/js';
import Sidebar from "@/components/SideBar";
import BodAndAlice from "/public/bobAndAlice.jpg";
import PreviousAndNextButton from "@/components/PreviousAndNextButton";
import { components_chapters } from "@/app/utils/constants";

export default function Page() {
    const chapters = [
        { title: 'Introduction', id: 'Introduction' },
        { title: 'Bob and Alice', id: 'Chapter_1.0' },
        { title: 'The 10 commandments of this site', id: 'Chapter_2.0' }
    ];

    return (
        <div className="flex flex-wrap">
            {/* The sidebar of the page */}
            <Sidebar chapters={chapters} />

            {/* The main content of the page */}

            <div className="flex flex-col justify-center py-2 mx-auto w-5/6 md:w-3/6">
                <Icon path={mdiInformationSlabBoxOutline} size="4em" className="mx-auto mt-7" />
                <h1 id="Introduction" className="flex justify-center text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Make the most out of this course
                </h1>

                <div className="flex flex-col text-pretty py-3 border-t-2 border-primary/20 mt-10">
                    <h2 id="Chapter_1.0" className="flex justify-normal mt-2 border-b pb-2 text-3xl font-semibold tracking-tight">
                        1.0<a className="mx-2 border-x-2 border-primary text-3xl"></a>Bob & Alice
                    </h2>
                    <p className="leading-7 mt-3 md:mt-6">
                        Bob and Alice are two fictional characters commonly used as placeholders in discussions regarding cybersecurity, cyptography and so on. They are used to illustrate different scenarios and to make the content more relatable <br />
                        That is why we have decided throughout this lesson to take the example of Bob and Alice, two partners that live together in a connected home and has many smart home devices. <br />
                    </p>
                    <Image src={BodAndAlice} alt="Bob and Alice" width={500} className="mx-auto mt-7" />
                </div>

                <div className="flex flex-col text-pretty py-3 border-t-2 border-primary/20 mt-6">
                    <h2 id="Chapter_2.0" className="flex justify-normal mt-2 border-b pb-2 text-3xl font-semibold tracking-tight">
                        2.0<a className="mx-2 border-x-2 border-primary text-3xl"></a>The 10 commandments of this site !
                    </h2>
                    <ul className="text-left my-4 ml-6 list-disc [&>li]:mt-2">
                        <li>Read the articles at your pace you should</li>
                        <li>Read without skipping (too much) you will</li>
                        <li>Click on the different links and resources we offer you should</li>
                        <li>Take every quiz you shall</li>
                        <li>Take every quiz and get at least 3/4 right you shall</li>
                        <li>Give us feedback if you see something you don't like</li>
                        <li>Give us feedback if you think some parts are unclear you could</li>
                        <li>Check out the course material for more information you could</li>
                        <li>Enjoy our nice image and GIFs you should</li>
                        <li>And most importantly, enjoy what Bob and Alice have to tell you !</li>
                    </ul>
                </div>

                <PreviousAndNextButton
                    previousUrl="/"
                    nextUrl={components_chapters[1].href}
                />

            </div>
        </div>
    );
}
