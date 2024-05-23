'use client'

import { mdiRobotConfused } from "@mdi/js";
import Icon from "@mdi/react";
import Sidebar from "@/components/SideBar";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import PreviousAndNextButton from "@/components/PreviousAndNextButton";
import { components_chapters } from "@/utils/constants";

import AI_Neural_DeepPNG from "../../../../public/ArtificialIntelligence/AI_Neural_Deep.png";

import Quiz from "@/components/Quiz";
import questionsChapterFive from "../../utils/questionsChapterFive.json";

export default function Page() {

  const chapters = [
    { title: 'Introduction', id: 'Introduction' },
    { title: 'What is Artificial Intelligence?', id: 'Chapter_1.0' },
    { title: 'Is AI used in smart home devices?', id: 'Chapter_2.0' },
  ];

  return (
    <div className="flex flex-wrap">
      {/* The sidebar of the page */}
      <Sidebar chapters={chapters} />

      {/* The main content of the page */}
      <div className="flex flex-col justify-center py-2 mx-auto w-5/6 md:w-3/6">
        <Icon path={mdiRobotConfused} size="4em" className="mx-auto mt-7" />
        <h1 id="Introduction" className="flex justify-center text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Artificial Intelligence in Smart Home Devices
        </h1>
        <p className="leading-7 mt-6 text-pretty">
          Artificial Intelligence (AI) is a technology that has been around for quite some time now. It's used in various fields, from healthcare to finance, and even in our homes. In this chapter, we'll discuss what AI is and how it's used in smart home devices. We'll also discuss some of the privacy concerns that come with using AI in smart home devices.
        </p>

        {/* What is Artificial Intelligence? */}
        <div className="flex flex-col text-pretty py-3 border-t-2 border-primary/20 mt-10">
          <h2 id="Chapter_1.0" className="flex justify-normal mt-2 border-b pb-2 text-3xl font-semibold tracking-tight">
            1.0<a className="mx-2 border-x-2 border-primary text-3xl"></a>What is Artificial Intelligence?
          </h2>
          <p className="leading-7 mt-3 md:mt-6">
            When discussing Artificial Intelligence, or AI for short, we're referring to a unique kind of computer program - one that's capable of learning and making autonomous decisions.
            <br />
            It's similar to a digital assistant, capable of recognizing images and speech, making decisions, and translating text or audio. To create such an 'AI model', it's necessary to 'train' it with a large data set.
          </p>
          <p className="leading-7 mt-6">
            The part of AI that allows it to learn from patterns in a large set of data is called 'machine learning'.
            <br />
            The more data the AI model is fed, the more accurate its predictions tend to be. But remember, if we feed it poor quality data, it's going to give us poor results – this principle is known as ‘garbage in, garbage out’.
          </p>
        </div>

        <div className="flex flex-col self-center items-center max-w-full bg-background border border-background/80 rounded-lg overflow-hidden shadow hover:shadow-lg active:shadow-lg">
          <Image
            src={AI_Neural_DeepPNG}
            alt="Image of differences between AI, Neural Networks, and Deep Learning"
            className="rounded-t-lg"
          />
          <a href="https://picovoice.ai/blog/ai-vs-machine-learning-vs-deep-learning/"
            className="text-xs text-muted-foreground hover:text-foreground">
            picovoice.ai
          </a>
        </div>

        {/* Is AI used in smart home devices? */}
        <div className="flex flex-col text-pretty py-3 border-t-2 border-primary/20 mt-6">
          <h2 id="Chapter_2.0" className="flex justify-normal mt-2 border-b pb-2 text-3xl font-semibold tracking-tight">
            2.0<a className="mx-2 border-x-2 border-primary text-3xl"></a>Is AI used in smart home devices?
          </h2>
          <p className="leading-7 mt-3 md:mt-6">
            Not all smart home devices use AI, but there are certainly smart home devices that do use it. When done right, it can significantly enhance the user experience, enabling people to automate or enhance various things in their homes. However, it's not all smooth sailing. AI brings along its own set of privacy concerns. For example, are companies using our data to train their AI models and if so, are they transparent about it, and can we opt out of it? AI is the center of a lot of very active research and the origin & ethics of the training data cannot be underestimated.
          </p>
          <p className="leading-7 mt-6">
            Furthermore, AI models are sometimes hosted in a datacenter (a building with a lot of computers), meaning the data collected by the smart home device must be transmitted to a datacenter first, potentially exposing it to greater risk.
          </p>
          <p className="leading-7 mt-6">
            Several smart home devices use AI to provide unique functionalities and seamless user experience.
          </p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Smart Speakers</AccordionTrigger>
              <AccordionContent>
                <p className="">
                  Devices like Amazon Echo and Google Home use AI to recognize our voice and understand our language. They can answer our questions, play our favorite music, and even control other smart home devices based on our voice commands.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Smart Thermostats</AccordionTrigger>
              <AccordionContent>
                <p className="">
                  Devices like Nest Learning Thermostat use AI to learn your schedule and the temperatures you prefer, then programs itself to create an optimal heating and cooling schedule for your home.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Security Cameras</AccordionTrigger>
              <AccordionContent>
                <p className="">
                  AI is used in security cameras for facial recognition, motion detection, and anomaly detection. It helps in identifying usual and unusual activities and alerting users accordingly.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Smart Vacuum Cleaners</AccordionTrigger>
              <AccordionContent>
                <p className="">
                  Devices like iRobot's Roomba use AI for navigating around your home, avoiding obstacles, and learning the layout of your home for efficient cleaning.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* The quiz text */}
        <h3 className="text-center text-pretty mt-3 mb-3 text-2xl font-semibold hover:underline hover:decoration-wavy hover:decoration-primary pt-10 border-t-2 border-primary/20"><span className="text-primary">Test your knowledge</span> on this chapter!</h3>
        
        {/* The quiz */}
        <div className="flex text-center">
          <Quiz
            questions={questionsChapterFive}
          />
        </div>
        
        {/* The previous and next buttons */}
        <div className="flex flex-col">
          <PreviousAndNextButton
            previousUrl={components_chapters[3].href}
            nextUrl={components_chapters[5].href}
          />
        </div>
      </div>
    </div>
  );
}
