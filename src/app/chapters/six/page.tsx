"use client"

import Icon from '@mdi/react';
import { mdiCogOffOutline } from '@mdi/js';
import PreviousAndNextButton from "@/components/PreviousAndNextButton"
import { components_chapters } from '@/utils/constants';

export default function Page() {
    return (
        <div className="flex flex-col justify-center py-2 mx-4 md:mx-12">
            <Icon path={mdiCogOffOutline} size="4em" className="mx-auto mt-7" />
            <h1 className="flex justify-center text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
                The Usabilities and Dangers of Smart Home Devices
            </h1>

            <div className="flex flex-col text-justify  mx-auto w-5/6 md:w-3/6 py-3 border-y-2 border-primary/20 mt-10">
                <p className="text-pretty mx-auto py-6">
                    This is Melle his part.
                </p>


                <PreviousAndNextButton
                    previousUrl={components_chapters[3].href}
                    nextUrl="/about"
                />

            </div>

        </div>
    )
}
