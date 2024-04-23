'use client'

import { mdiChip } from "@mdi/js";
import Icon from "@mdi/react";

export default function Page() {
  return (
    <div className="flex flex-col justify-center py-2 mx-4 md:mx-12">
      <Icon path={mdiChip} size="4em" className="mx-auto mt-7" />
      <h1 className="flex justify-center text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Working of Smart Home Devices
      </h1>
      <p className="leading-7 mt-6 text-justify">
        Now that the general idea of a <a className="text-2xl font-semibold tracking-tight">Smart Home Device</a> is uncovered,
        there needs to be more clarity about the physical workings of these devices.
        <br /> What do they save? What do they process and where do they process this?
        But maybe the best question to begin with is; <br /> What sensors do smart home devices actually have?
      </p>

      <div className="flex flex-col text-justify py-3 border-y-2 border-primary/20 mt-10">
        {/* 2.0 */}
        <h2 className="flex justify-center mt-2 border-b pb-2 text-3xl font-semibold tracking-tight">
          2.0.<a className="mx-2 border-x-2 border-primary text-2xl"></a>Sensors
        </h2>
        <p className="leading-7 mt-3 md:mt-6">
          Smart home devices are built on various different standards, by standards we mean the way they are intended to use.
        </p>
        <ul className="text-left my-4 ml-6 list-disc [&>li]:mt-2">
          <li>A smart lightbulb?  Just on/off.</li>
          <li>A Google Home or smart speaker? Sound. </li>
          <li>A smart vacuum? Environment scanning sensors.</li>
          <li>A Ring doorbell? Sound and Visuals.</li>
        </ul>
        <p className="leading-7">
          All these devices are intended to be used for different cases. These different use cases also need less or more sensors to let the device function properly.
        </p>

        {/* 2.1 */}
        <h3 className="mt-8 text-2xl font-semibold tracking-tight">
          2.1. Google Nest Mini
        </h3>
        <p className="leading-7 mt-3">
          Let’s take the Google Home Mini or now called Nest Mini. As the manufacturer puts it:
        </p>
        <blockquote className="my-6 border-l-2 pl-2 italic font-semibold text-xl">
          “The little speaker that’s a huge help around the house.”
        </blockquote>
        <p className="leading-7">
          A little speaker for sure, but what does it do on the inside to be the <a className="font-semibold italic">"huge help"</a>?
          <br />
          This speaker has capacitive touch sensors (as buttons) and three far-field microphones and of course a speaker.
          <br />
          This is needed to create the <a className="font-semibold italic">"huge help"</a> in the system. But does it have other things? This particular device has only some processors and processing units. Not too interesting.
        </p>

        {/* 2.2 */}
        <h3 className="mt-8 text-2xl font-semibold tracking-tight">
          2.2. Ring Doorbell
        </h3>
        <p className="leading-7 mt-3">
          The other device we are going to check is the Ring Doorbell. This is:
        </p>
        <blockquote className="my-6 border-l-2 pl-2 italic font-semibold text-xl">
          “Ring Video Doorbells allow you to see, hear and speak to visitors, from anywhere.”
        </blockquote>
        <p className="leading-7">
          Well, isn’t that great, always being able to see who is in front of your door.
          <br />
          Ring doesn’t really tell what is in the device specifically like Google did. Ring tells us that it has video capabilities, motion detection and two-way audio.
          <br />
          What does this mean? Exactly, it’s not clear on the home page.
        </p>
        <p className="leading-7 mt-6">
          After some more digging we found that the Ring Doorbell has a HD camera, a button, a speaker, microphone, infrared LEDS for the night vision of the camera and “motion detection sensors”.
          <br />
          Well this is way more data that can be processed compared to the Google Nest Mini.
        </p>
      </div>

      <div className="flex flex-col text-justify py-3 mt-4">
        {/* 3.0 */}
        <h2 className="flex justify-center border-b pb-2 text-3xl font-semibold tracking-tight ">
          3.0<a className="mx-2 border-x-2 border-primary text-2xl center-x"></a>Data Processing
        </h2>
        <p className="leading-7 mt-6">
          Alright now that we know the insides of a small smart speaker and a baby monitor. The question comes up, what is controlling the sensors and what does the device do with it?
        </p>

        {/* 3.1 */}
        <h3 className="mt-8 text-2xl font-semibold tracking-tight">
          3.1. Google Nest Mini
        </h3>
        <p className="leading-7 mt-3">
          The Google Nest Mini has multiple microphones that listen to the magic word;
        </p>
        <p className="flex justify-center text-2xl font-semibold tracking-tight mt-6 mb-2">
          “Ok Google.”
        </p>
        <p className="flex justify-center text-2xl font-semibold tracking-tight mb-6 whitespace-pre">
          <a className="">Only</a> <a className="italic text-3xl">"Ok Google"</a>  <a className="">right?</a>
        </p>
        <p className="leading-7">
          This is not 100% clear, according to Google itself they say, quote:
        </p>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          “Google Assistant is designed to wait in standby mode until it detects an activation, like when it hears "Hey Google."”
        </blockquote>
        <p className="leading-7 mt-6">
          They say in standby mode the device records small snippets of audio every few seconds to detect the magic word. After that the device is activated (showed by an indicator light) and will record the request from the user. This request will be send to the servers of Google, more about this later.
        </p>

        {/* 3.2 */}
        <h3 className="mt-8 text-2xl font-semibold tracking-tight">
          3.2. Ring Doorbell
        </h3>
        <p className="leading-7 mt-3">
          The Ring Doorbell boasts a motion detection feature that's always on the lookout for movement.
          <br />
          But how does it do this?
        </p>
        <p className="leading-7 mt-6">
          Let’s start with the main component, the camera. <br />The camera supposedly only starts recording when one of the motion sensors sees well, motion. The doorbell also is included in this as a sensor.
        </p>
        <p className="leading-7 mt-6">
          The Ring Doorbell also has a microphone so not only video is stored but also sound.
          These two things make the Ring Doorbell a great security camera.
          Depending on if you have a subscription or not these videos will be stored online. 
          <br />
          <a className="font-bold">Save</a> against anyone else. But is it really? And is it only a security camera for you?
        </p>
        <p className="leading-7 mt-6">
          You can say what you want about Google, but they are way more clearer about what they do with the data. Ring is after all an Amazon company.
        </p>
      </div>
    </div>
  );
}
