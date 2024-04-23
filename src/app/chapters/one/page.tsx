"use client"

import Link from "next/link";
import Icon from '@mdi/react';
import { mdiChatQuestionOutline } from '@mdi/js';

export default function Page() {
  return (
    <div className="flex flex-col justify-center py-2 mx-4 md:mx-12">
      <Icon path={mdiChatQuestionOutline} size="4em" className="mx-auto mt-7" />
      <h1 className="flex justify-center text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
      What is a smart home device? 
      </h1>

      <div className="flex flex-col text-justify  mx-auto w-5/6 md:w-3/6 py-3 border-y-2 border-primary/20 mt-10">
        <h3 className="mt-8 text-3xl font-semibold tracking-tight">
          2.1. The definition of smart home device
        </h3>
        <p className="leading-7 mt-3 md:mt-6">
          When people hear the word smart home, they usually first connect it to some device they already know or have at their home. <br />
          A smart home is a set up where applications or devices can be controlled from anywhere and are connected to the internet and other devices wirelessly.  <br />
          A device can perform functions independently as well as can be used even remotely when a person who owns it, is not home. Smart homes can provide homeowners security, comfort, convenience and energy efficiency by allowing them to control smart home devices by application on their smart phone or other device. These devices collect information constantly, so they have potential risks related to privacy and security. (Chawda et al. 2020.) <br />
          Smart home environments can have many benefits, for example:
        </p>
        <ul className="text-left my-4 ml-6 list-disc [&>li]:mt-2">
          <li>Allow users to control their home environment using simple commands</li>
          <li>Can make users more aware of possible problems inside their home</li>
          <li>Voice assistants, virtual agents and social robots can provide users with some level of companionship and enjoyment when controlling users’ home</li>
          <li>Can be effective in improving quality of user’s life</li>
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


        <h3 className="mt-8 text-3xl font-semibold tracking-tight">2.2. An example of smart home device </h3>
        <p className="leading-7">There are many devices which can be classified as smart home devices, and it may be that there are some devices that people cannot even think of being a smart home device.  </p>
        <p className="leading-7">An example of these devices:</p>
        <ul className="text-left my-4 ml-6 list-disc [&>li]:mt-2">
          <li>A car</li>
          <li>Smart lights</li>
          <li>Fridge</li>
          <li>Smart speaker</li>
          <li>Alarm systems</li>
          <li>Doorbells</li>
          <li>Smoke sensor</li>
          <li>IR camera</li>
          <li>Smart window</li>
          <li>TV sets and stereos</li>
        </ul>
        <p className="leading-7">There are also some smart home assistant devices, for example:</p>
        <ul className="text-left my-4 ml-6 list-disc [&>li]:mt-2">
          <li>Amazon Alexa</li>
          <li>Amazon Echo</li>
          <li>Samsung Smart Things Hub</li>
          <li>Google Assistant</li>
          <li>LG Smart TV</li>
          <li>Ecobee4</li>
        </ul>

        <p className="leading-7 mt-3">
          As an example, to illustrate the operation of a smart home device, <strong>Alice</strong> and <strong>Bob</strong> can be used, which are used for convenience and ease of understanding. To make it easier to understand these devices, we can think of a situation where <strong>Alice is Google Home</strong> who follow voice commands and perform tasks such as play music and control other smart devices, and <strong>Bob is Ring Doorbell</strong> who is responsible for monitoring the door and alert when someone comes or rings the doorbell, and they are both a part of a smart home.
          <br />
          When a guest is coming over to your house and presses the Ring Doorbell, Bob as a doorbell sends signal to Alice. Alice as a Google Home receives Bob’s signal and inform that a guest is in front of your door. Now, you are aware that someone is at your door, and you can check who it is and open the door. In a nutshell, Alice and Bob communicate with each other and are aware when someone is at the door and notify homeowners about guests even if they are on the other side of the house.
        </p>

        <h3 className="mt-8 text-2xl font-semibold tracking-tight">Sources</h3>
        <Link href="https://www.sciencedirect.com/science/article/pii/S2451958823000337" className="mt-4 italic text-gray-500" rel="noopener noreferrer" target="_blank">https://www.sciencedirect.com/science/article/pii/S2451958823000337</Link>
        <Link href="https://www.researchgate.net/publication/346211896_A_RESEARCH_PAPER_ON_SMART_HOME" className="mt-4 italic text-gray-500" rel="noopener noreferrer" target="_blank">https://www.researchgate.net/publication/346211896_A_RESEARCH_PAPER_ON_SMART_HOME</Link>

      </div>
    </div>
  );
}