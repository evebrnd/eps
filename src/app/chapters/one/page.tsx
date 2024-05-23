"use client"

import Link from "next/link";
import Image from "next/image"
import Icon from '@mdi/react';
import { mdiChatQuestionOutline } from '@mdi/js';
import Sidebar from "@/components/SideBar";
import Quiz from "@/components/Quiz";
import PreviousAndNextButton from "@/components/PreviousAndNextButton";
import { components_chapters } from "@/utils/constants";
import SmartHomeIntroduction from "/public/smartHomeIntroduction.webp";
import QuestionsIntroduction from "../../utils/questionsIntroduction.json";

export default function Page() {
  const chapters = [
    { title: 'Introduction', id: 'Introduction' },
    { title: 'The definition of a smart home device', id: 'Chapter_1.0' },
    { title: 'An example of a smart home device', id: 'Chapter_2.0' },
    { title: 'Quiz', id: 'quiz'}
  ];

  return (
    <div className="flex flex-wrap">
      {/* The sidebar of the page */}
      <Sidebar chapters={chapters} />

      {/* The main content of the page */}

      <div className="flex flex-col justify-center py-2 mx-auto w-5/6 md:w-3/6">
        <Icon path={mdiChatQuestionOutline} size="4em" className="mx-auto mt-7" />
        <h1 id="Introduction" className="flex justify-center text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
          What is a smart home device?
        </h1>

        <div className="flex flex-col text-pretty py-3 border-y-2 border-primary/20 mt-10">
          <h3 id="Chapter_1.0" className="mt-8 text-3xl font-semibold tracking-tight">
            1.0. The definition of smart home device
          </h3>
          <p className="leading-7 mt-3 md:mt-6">
            When people hear the word smart home, they usually first connect it to some device they already know or have at their home. <br />
          </p>
            <blockquote className="my-6 border-l-2 pl-2 italic font-semibold text-xl">
              “A smart home is a setup where applications or devices can be controlled from anywhere and are connected to the internet and/or other devices wirelessly.”
            </blockquote>
          <p className="leading-7">
            A device can perform functions independently, or it can be used manually - even remotely, for when the person who owns it is not home. Smart homes can provide homeowners security, comfort, convenience and energy efficiency by allowing them to control smart home devices using an application on their smart phone or other device. These devices collect information constantly, so they have potential risks related to privacy and security. (Chawda et al. 2020.) <br />
            Smart home environments can have many benefits, for example:
          </p>
          <ul className="text-left my-4 ml-6 list-disc [&>li]:mt-2">
            <li>Allow users to control their home environment using simple commands</li>
            <li>They can make users more aware of possible problems inside their home</li>
            <li>Voice assistants, virtual agents and social robots can provide users with some level of companionship and enjoyment when controlling users’ home</li>
            <li>They can be effective in improving the quality of the user’s life</li>
            <li>Increase independent living</li>
            <li>Have an excellent impact to improve mental and physical health</li>
            <li>Are flexible to add to different environments</li>
            <li>Can be modified based on every user’s needs</li>
            <li>Can help younger people to stay connected with their elder relatives</li>
            <li>Warn them about situations that may cause a threat to their relative’s health and well-being (Ellard et al. 2023.)</li>
          </ul>
          <p className="leading-7">
            All these devices are intended to be used for different cases. These different use cases also need less or more sensors to let the device function properly.
          </p>


          <h3 id="Chapter_2.0" className="mt-8 text-3xl font-semibold tracking-tight">
            2.0. An example of smart home device
          </h3>
          <figure className="max-w-lg mx-auto my-6">
            <Image className="h-auto max-w-full rounded-lg" src={SmartHomeIntroduction} alt="A smart home" />
            <figcaption className="mt-2 text-sm text-center text-gray-500">https://medium.com/iotforall/who-is-buying-into-iot-8f65c701b1ef</figcaption>
          </figure>
          <p className="leading-7">There are many devices that can be classified as smart home devices, and there might be some normal devices that can be considered 'smart' (internet-connected) without people realizing that they are.</p>
          <p className="leading-7">An example of these devices:</p>
          <ul className="text-left my-4 ml-6 list-disc [&>li]:mt-2">
            <li>Smart lights</li>
            <li>A car</li>
            <li>Fridge</li>
            <li>Smart speaker</li>
            <li>Alarm systems</li>
            <li>Doorbells</li>
            <li>Smoke sensor</li>
            <li>IR camera</li>
            <li>Smart window</li>
            <li>TV sets and stereos</li>
          </ul>
          <p className="leading-7">There are also some devices that can be integrated with a smart home assistant, for example:</p>
          <ul className="text-left my-4 ml-6 list-disc [&>li]:mt-2">
            <li>Amazon Echo (Alexa)</li>
            <li>Apple HomePod Mini (Siri)</li>
            <li>Google Nest Mini (Google Assistant)</li>
            <li>Samsung Smart Things Hub</li>
            <li>LG Smart TV</li>
            <li>Ecobee4</li>
          </ul>

          <p className="leading-7 mt-3">
            As an example to illustrate the operation of a smart home device, the fictional characters <strong>Alice</strong> and <strong>Bob</strong> can be used. To make it easier to understand these devices, we can think of a situation where <strong>Alice uses Google Home Assistant</strong>, which follow voice commands and perform tasks such as play music and control other smart devices. <strong>Bob is visiting</strong> Alice, who also owns a <strong>Ring Doorbell</strong> - responsible for monitoring the door and send an alert when someone visits or rings the doorbell.
            <br />
            When Bob visits and presses the Ring Doorbell, it sends signal to Google Home Assistant. Alice receives a notification that there is a guest at the front door. Now, she can see who is visiting using the app on her smartphone. In a nutshell, the device communicate with each other: the system can detect when someone is at the door and notify homeowners about guests even if they are on the other side of the house or when they are not home.
          </p>

          <h3 className="mt-8 text-2xl font-semibold tracking-tight">Sources</h3>
          <Link href="https://www.sciencedirect.com/science/article/pii/S2451958823000337" className="mt-4 italic text-gray-500" rel="noopener noreferrer" target="_blank">https://www.sciencedirect.com/science/article/pii/S2451958823000337</Link>
          <Link href="https://www.researchgate.net/publication/346211896_A_RESEARCH_PAPER_ON_SMART_HOME" className="mt-4 italic text-gray-500" rel="noopener noreferrer" target="_blank">https://www.researchgate.net/publication/346211896_A_RESEARCH_PAPER_ON_SMART_HOME</Link>


          <h3 id="quiz" className="mt-8 text-2xl font-semibold tracking-tight">Quiz</h3>
          <Quiz questions={QuestionsIntroduction} />
        </div>

        <PreviousAndNextButton
          previousUrl={components_chapters[0].href}
          nextUrl={components_chapters[2].href}
        />

      </div>
    </div>
  );
}
