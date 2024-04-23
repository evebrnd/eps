'use client'

import { mdiChip } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import { ReactTyped } from 'react-typed';

import Sidebar from "@/components/SideBar";

import SmartDoorbellPNG from "../../../../public/WorkingOfDevices/SmartDoorbell.png"
import SmartLightbulbPNG from "../../../../public/WorkingOfDevices/SmartLightbulb.png"
import SmartSpeakerPNG from "../../../../public/WorkingOfDevices/SmartSpeakers.png"
import SmartVacuumPNG from "../../../../public/WorkingOfDevices/SmartVacuum.png"
import FacialRecognitionGIF from "../../../../public/WorkingOfDevices/FacialRecognitionGIF.gif"
import ActivityDetectionGIF from "../../../../public/WorkingOfDevices/ActivityDetectionGIF.gif"
import TextPredictionGIF from "../../../../public/WorkingOfDevices/TextPredictionGIF.gif"
import WakeWordDetectionGIF from "../../../../public/WorkingOfDevices/WakeWordDetectionGIF.gif"
import ImageRecognitionGIF from "../../../../public/WorkingOfDevices/ImageRecognitionGIF.gif"
import ChatGPTGIF from "../../../../public/WorkingOfDevices/ChatGPTGIF.gif"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const chap1_Examples = [
  {
    title: "Smart Lightbulb",
    description: "Just on/off.",
    image: SmartLightbulbPNG,
    alt: "Picture of a Smart Lightbulb",
    quickSource: "zoofy.nl",
    source: "https://zoofy.nl/smart-home/philips-hue-starterkit/"
  },
  {
    title: "Google Home",
    description: "Sound.",
    image: SmartSpeakerPNG,
    alt: "Picture of a Google Home",
    quickSource: "youversion.com",
    source: "https://www.youversion.com/the-bible-app/bible-for-voice/"
  },
  {
    title: "Smart Vacuum",
    description: "Environment scanning sensors.",
    image: SmartVacuumPNG,
    alt: "Picture of a Smart Vacuum",
    quickSource: "irobot.com",
    source: "https://www.irobot.com/en_US/roomba-combo-j5-robot-vacuum-and-mop/J517020.html"
  },
  {
    title: "Ring Doorbell",
    description: "Sound and Visuals.",
    image: SmartDoorbellPNG,
    alt: "Picture of a Ring Doorbell",
    quickSource: "ring.com",
    source: "https://se-en.ring.com/products/video-doorbell-gen-2?variant=32521738813545"
  }
]

const chap3_1_Examples = [
  {
    title: "Wake Word Detection",
    description: "Smart speakers like Google Home or Amazon Echo use on-device machine learning to detect their wake words.",
    image: WakeWordDetectionGIF,
    alt: "GIF of a smart speaker detecting a wake word",
    quickSource: "Giphy.com",
    source: "https://giphy.com/gifs/google-macaulay-culkin-hey-google-55vzISvU8zUFvd6U3W"
  },
  {
    title: "Facial Recognition",
    description: "Many smartphones use on-device machine learning for facial recognition features.",
    image: FacialRecognitionGIF,
    alt: "GIF of a smartphone using facial recognition",
    quickSource: "Tenor.com",
    source: "https://tenor.com/view/face-gif-21129360"
  },
  {
    title: "Text Prediction",
    description: "As mentioned earlier, text prediction on your smartphone keyboard is a form of on-device machine learning.",
    image: TextPredictionGIF,
    alt: "GIF of a smartphone keyboard predicting text",
    quickSource: "Stackoverflow.com",
    source: "https://stackoverflow.com/a/29449504"
  },
  {
    title: "Activity Recognition",
    description: "Many fitness trackers and smartwatches use on-device machine learning to recognize different types of physical activity.",
    image: ActivityDetectionGIF,
    alt: "GIF of a fitness tracker recognizing physical activity",
    quickSource: "Pinterest.com",
    source: "https://pin.it/2c1h3oxEC"
  }
]

const chap3_2_Examples = [
  {
    title: "Image Recognition and Analysis",
    description: "Social media platforms like Facebook use cloud-based machine learning for their image recognition features.",
    image: ImageRecognitionGIF,
    alt: "GIF of a social media platform using image recognition",
    quickSource: "Gifer.com",
    source: "https://i.gifer.com/NRY9.gif"

  },
  {
    title: "Chatbots and Conversational AI",
    description: "Cloud-based machine learning powers advanced chatbots and conversational AI systems like OpenAI's GPT-4.",
    image: ChatGPTGIF,
    alt: "GIF of a chatbot using conversational AI",
    quickSource: "Giphy.com",
    source: "https://giphy.com/gifs/pudgypenguins-internet-bard-chatgpt-0lGd2OXXHe4tFhb7Wh"
  },
]

export default function Page() {

  // This is for the internal navigation of the page.
  // const titleAmount = 7;
  // const { refs, isInViewport } = useViewPortObserver(titleAmount);

  const chapters = [
    { title: 'Introduction', id: 'Introduction' },
    {
      title: 'Sensors', id: 'Chapter_1.0', subChapters: [
        { title: 'Google Nest', id: 'Chapter_1.1' },
        { title: 'Ring', id: 'Chapter_1.2' },
      ]
    },
    {
      title: 'Data Processing', id: 'Chapter_2.0', subChapters: [
        { title: 'Google Nest', id: 'Chapter_2.1' },
        { title: 'Ring', id: 'Chapter_2.2' },
      ]
    },
    {
      title: 'Where is the data being processed?', id: 'Chapter_3.0', subChapters: [
        { title: 'On-Device', id: 'Chapter_3.1' },
        { title: 'Cloud', id: 'Chapter_3.2' },
        { title: 'Usage Google Nest', id: 'Chapter_3.3' },
        { title: 'Usage Ring Doorbell', id: 'Chapter_3.4' },
      ]
    },
    { title: 'Dangers', id: 'Chapter_4.0' }
  ];

  return (
    <div className="flex flex-wrap">
      {/* The sidebar of the page */}
      <Sidebar chapters={chapters} />

      {/* The main content of the page */}

      <div className="flex flex-col justify-center py-2 mx-auto w-5/6 md:w-3/6">
        <Icon path={mdiChip} size="4em" className="mx-auto mt-7" />
        <h1 id="Introduction" className="flex justify-center text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Working of Smart Home Devices
        </h1>
        <p className="leading-7 mt-6 text-justify">
          Now that the general idea of a <a className="text-2xl font-semibold tracking-tight">Smart Home Device</a> is uncovered,
          there needs to be more clarity about the physical workings of these devices.
          <br /> What do they save? What do they process and where do they process this?
          But maybe the best question to begin with is; <br /> What sensors do smart home devices actually have?
        </p>

        <div className="flex flex-col text-justify py-3 border-y-2 border-primary/20 mt-10">
          {/* 1.0 */}
          <h2 id="Chapter_1.0" className="flex justify-normal mt-2 border-b pb-2 text-3xl font-semibold tracking-tight">
            1.0<a className="mx-2 border-x-2 border-primary text-3xl"></a>Sensors
          </h2>
          <p className="leading-7 mt-3 md:mt-6">
            Smart home devices are built on various different standards, by standards we mean the way they are intended to use.
          </p>
          {/* Carousell item, showing the differen devices.*/}
          <div className="flex flex-col w-full px-12 py-6 md:px-24">
            <Carousel className="">
              <CarouselContent className="">
                {chap1_Examples.map((component, index) => (
                  <CarouselItem key={index} className="flex flex-row justify-center md:basis-1/2">
                    {/* Created a modified version of card component. */}
                    <div className="p-1 text-center content-center">
                      <div className="max-w-sm bg-background border border-background/80 rounded-lg overflow-hidden shadow hover:shadow-lg active:shadow-lg">
                        <Image
                          src={component.image}
                          alt={component.alt}
                          className="rounded-t-lg"
                        />
                        <a href={component.source} className="text-xs text-muted-foreground hover:text-foreground"> {component.quickSource} </a>
                        <div className="pb-5 px-5 pt-2">
                          <h5 className="text-2xl font-bold tracking-tight text-foreground">{component.title}</h5>
                          <p className="font-normal text-muted-foreground">{component.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <p className="leading-7">
            All these devices are intended to be used for different cases. These different use cases also need less or more sensors to let the device function properly.
          </p>

          {/* 1.1 */}
          <h3 id="Chapter_1.1" className="mt-8 text-2xl font-semibold tracking-tight">
            1.1. Google Nest Mini
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

          {/* 1.2 */}
          <h3 id="Chapter_1.2" className="mt-8 text-2xl font-semibold tracking-tight">
            1.2. Ring Doorbell
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
          {/* 2.0 */}
          <h2 id="Chapter_2.0" className="flex justify-normal border-b pb-2 text-3xl font-semibold tracking-tight ">
            2.0<a className="mx-2 border-x-2 border-primary text-2xl center-x"></a>Data Processing
          </h2>
          <p className="leading-7 mt-6">
            Alright now that we know the insides of a small smart speaker and a baby monitor. The question comes up, what is controlling the sensors and what does the device do with it?
          </p>

          {/* 2.1 */}
          <h3 id="Chapter_2.1" className="mt-8 text-2xl font-semibold tracking-tight">
            2.1. Google Nest Mini
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

          {/* 2.2 */}
          <h3 id="Chapter_2.2" className="mt-8 text-2xl font-semibold tracking-tight">
            2.2. Ring Doorbell
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

        <div className="flex flex-col text-justify py-3 mt-4">
          {/* 3.0 */}
          <h2 id="Chapter_3.0" className="flex justify-normal border-b pb-2 text-3xl font-semibold tracking-tight ">
            3.0<a className="mx-2 border-x-2 border-primary text-2xl center-x"></a>Where is the data being processed?
          </h2>

          {/* 3.1 */}
          <h3 id="Chapter_3.1" className="mt-8 text-2xl font-semibold tracking-tight">
            3.1. On-Device
          </h3>
          <p className="leading-7 mt-3">
            So now we know, the sensors inside two smart devices and the data that is being processed. Now let’s see what is happening during the processing and where that happens.
          </p>
          <p className="leading-7 mt-6">
            First, we need you to understand the difference between on-device and cloud processing. Because this is a thin line that can be crossed easily in this day and age.
          </p>
          <p className="leading-7 mt-6">
            With On-Device processing it means that the data DOES NOT leave the device. It is processed On-Device. Nowadays this is possible by things called ’Machine Learning Engines’.
          </p>
          <p className="leading-7 mt-6">
            Machine Learning Engines are processors/computers that have “code” programmed that it will search for. In the case of the Google Nest Mini this would be the word “Hey Google”. Google trained a program to listen to these two words. Just these two.
          </p>
          <p className="leading-7 mt-6">
            So, the Nest Mini will listen to the little voice snippets and the computer in the Nest Mini will check really fast if in the little snippet the magic words have been said. This is not a hard thing to detect and is doable to be checked locally.
          </p>
          <p className="leading-7 mt-6">
            Some other things that can be done On-Device are:
          </p>

          {/* Carousell item, showing the different on On-Device Processes*/}
          <div className="flex flex-col w-full px-12 py-6 md:px-24">
            <Carousel className="">
              <CarouselContent className="">
                {chap3_1_Examples.map((component, index) => (
                  <CarouselItem key={index} className="flex flex-row justify-center md:basis-1/2">
                    {/* Created a modified version of card component. */}
                    <div className="p-1 text-center content-center">
                      <div className="max-w-sm bg-background border border-background/80 rounded-lg overflow-hidden shadow hover:shadow-lg active:shadow-lg">
                        <Image
                          src={component.image}
                          alt={component.alt}
                          className="rounded-t-lg"
                        />
                        <a href={component.source} className="text-xs text-muted-foreground hover:text-foreground"> {component.quickSource} </a>
                        <div className="pb-5 px-5 pt-2">
                          <h5 className="text-2xl font-bold tracking-tight text-foreground">{component.title}</h5>
                          <p className="font-normal text-muted-foreground">{component.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* 3.2 */}
          <h3 id="Chapter_3.2" className="mt-8 text-2xl font-semibold tracking-tight">
            3.2. Cloud
          </h3>
          <p className="leading-7 mt-3">
            With Cloud processing it means that the data DOES leave the device. It is processed in the cloud. This is happening in really big datacenters all across the globe.
          </p>
          <p className="leading-7 mt-6">
            As with the On-Device processing these data-center computers are way WAY bigger and more powerful than the little computer on the Google Nest Mini for example.
          </p>
          <p className="leading-7 mt-6">
            Because these computers are so much more powerful the “Machine Learning” programs can be way more advanced.
          </p>
          <p className="leading-7 mt-6">
            Consider a voice-activated speaker like the Google Nest Mini. When you ask the device a question, your voice is recorded and sent over the internet to Google's cloud servers. These servers run machine learning algorithms to interpret your speech, determine the best response, and then send that response back to your device. This process requires the computational power and storage capacity of the cloud, as it involves complex tasks like natural language processing and accessing large databases of information. This is just not accessible or ideal for on-device processing.
          </p>

          {/* Carousell item, showing the different Cloud Processes */}
          <div className="flex flex-col w-full px-12 py-6 md:px-24">
            <Carousel className="">
              <CarouselContent className="">
                {chap3_2_Examples.map((component, index) => (
                  <CarouselItem key={index} className="flex flex-row justify-center md:basis-1/2 ">
                    {/* Created a modified version of card component. */}
                    <div className="p-1 text-center content-center">
                      <div className="max-w-sm bg-background border border-background/80 rounded-lg overflow-hidden shadow hover:shadow-lg active:shadow-lg">
                        <Image
                          src={component.image}
                          alt={component.alt}
                          className="rounded-t-lg"
                        />
                        <a href={component.source} className="text-xs text-muted-foreground hover:text-foreground"> {component.quickSource} </a>
                        <div className="pb-5 px-5 pt-2">
                          <h5 className="text-2xl font-bold tracking-tight text-foreground">{component.title}</h5>
                          <p className="font-normal text-muted-foreground">{component.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Image Recognition and Analysis</AccordionTrigger>
              <AccordionContent>
                <p className="">
                  Social media platforms like Facebook use cloud-based machine learning for their image recognition features.
                </p>
                <p className="mt-3">
                  When you upload a photo, it's sent to Facebook's cloud servers, which use machine learning algorithms to identify and tag faces, recognize objects, and even interpret the content of the image.
                </p>
                <p className="mt-3">
                  This requires significant computational power and large datasets for training, which are available in the cloud.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Chatbots and Conversational AI</AccordionTrigger>
              <AccordionContent>
                <p className="">
                  Cloud-based machine learning powers advanced chatbots and conversational AI systems like OpenAI's GPT-3.
                </p>
                <p className="mt-3">
                  When you interact with a chatbot, your input is sent to the cloud, where machine learning algorithms process the text, understand the context, and generate a relevant response.
                </p>

                {/* Create a typing effect */}
                <div className="flex flex-col w-full px-12 py-6 md:px-24 items-center">
                  <div className="max-w-sm bg-background border border-background/80 rounded-lg overflow-hidden shadow hover:shadow-lg active:shadow-lg">
                    <p className="leading-7 mt-6 px-6 font-bold text-l text-center">
                      "ChatGPT give me an example about chatbots and conversational AI."
                    </p>
                    <p className='scroll-m-20 tracking-tight justify-end p-6'>
                      <ReactTyped
                        startWhenVisible
                        strings={["An example can be: If you're using a customer service chatbot on a website, your questions are sent to the cloud. </br> There, AI models like GPT-3, trained on vast amounts of data, interpret your query and generate an appropriate response. </br> This process requires the computational power and large-scale data processing capabilities of the cloud."]}
                        typeSpeed={15}
                        showCursor={true}
                      />
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* 3.3 */}
          <h3 id="Chapter_3.3" className="mt-8 text-2xl font-semibold tracking-tight">
            3.3. Usage Google Nest
          </h3>
          <p className="leading-7 mt-3">
            So now that this is clear, let’s check what is happening with our Google Nest Mini data.
          </p>
          <p className="leading-7 mt-6">
            First, the device will listen <strong className="text-xl">On-Device</strong> to a wake-word; “Hey Google”. It does this every few seconds. If it does detect the word it will record the sentences after “Hey Google” and send all of this to the <strong className="text-xl">Cloud</strong>. All of this information is then processed on one of the computers in a datacenter. When it knows what you asked it will try to find the best response to your answer. When it did that, it will send the answer back to your device. It’s a circle.
          </p>
          <p className="leading-7 mt-6">
            Now does this really mean that the Google Nest Mini not listens to other words or things we say? We don’t know. This is something we have to trust the big companies like Google, Amazon and Apple on.
          </p>
          <p className="leading-7 mt-6">
            The only thing we know is that your voice snippets will be send to one of the big companies to check if the wake word has been said. Human reviewers transcribe and annotate voice clips to enhance speech recognition systems.
          </p>
          <p className="leading-7 mt-6">
            This does mean that your conversation will be able to be checked by employees.
          </p>
          {/* Accordion */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Google Nest Mini</AccordionTrigger>
              <AccordionContent>
                <p className="">
                  Google has a human review program for Assistant audio recordings. This program involves having human reviewers analyze audio snippets, which helps improve Google’s speech recognition technology and expand support for more languages.
                </p>
                <p className="mt-3">
                  The reviewed audio snippets are not associated with user accounts and are anonymized to prevent linking them to specific individuals. Google also says that the audio is distorted to disguise the customer’s voice.
                </p>
                <p className="my-3">
                  The company saves your Assistant recordings only if you choose to opt in.
                </p>
                <a href="https://www.theverge.com/2019/7/11/20690197/google-assistant-voice-recordings-human-review-listening-vrt-nws" className="underline">Google Assistant recordings being reviewed by humans (theverge.com)</a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Apple Siri</AccordionTrigger>
              <AccordionContent>
                <p className="">
                  Apple’s security policy ensures that voice recordings collected by Siri protect user privacy. Apple’s human reviewers do not receive any personally identifiable information or the random ID associated with the recordings, safeguarding user privacy during the review process.
                </p>
                <p className="my-3">
                  When Siri records voice interactions, it associates them with a randomized identifier, not personally identifiable information. This identifier is reset each time Siri is turned off. Any voice recordings retained beyond six months are stored without the random ID number.
                </p>
                <a href="https://www.theverge.com/2019/8/28/20837001/apple-siri-voice-recordings-human-review-privacy-policy" className="underline">Apple Siri voice recordings being reviewed by humans (theverge.com)</a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Amazon Alexa</AccordionTrigger>
              <AccordionContent>
                <p className="">
                  Amazon's voice recordings are associated with an account number, the customer's first name and the serial number of the Echo device used.
                </p>
                <p className="my-3">
                  Amazon says it takes security and privacy seriously and only annotates “An extremely small sample of Alexa voice recordings”. They say this is to help train their speech recognition and natural language understanding systems. They also say that they have strict technical and operational safeguards and have a zero tolerance policy for the abuse of our system.
                </p>
                <a href="https://www.bbc.com/news/technology-47974579" className="underline">Smart speaker recordings reviewed by humans (bbc.com)</a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* 3.4 */}
          <h3 id="Chapter_3.4" className="mt-8 text-2xl font-semibold tracking-tight">
            3.4. Usage Ring Doorbell
          </h3>
          <p className="leading-7 mt-3">
            Now let’s look at the more data using product, the Ring Doorbell.
          </p>
          <p className="leading-7 mt-6">
            This device has little to no real information about what is being done on-device or in the cloud. This is why the guess needs to be made about what is being done on-device or in the cloud.
          </p>
          <p className="leading-7 mt-6">
            The motion sensors supposedly are processing everything on-device. This is because this is not a hard thing to do and the motion sensors should react quickly. This can only be done on-device.
          </p>
          <p className="leading-7 mt-6">
            After this the camera and microphone will both start doing there thing. Recording videos.
          </p>
          <p className="leading-7 mt-6">
            Now here is the tricky part, because now we don’t know if the “package detection” or “person detection” is an on-device trick. This is <strong className="text-2xl">exactly</strong> why this needs to be more transparent.
          </p>
          <p className="leading-7 mt-6">
            When a subscription is bought from Ring every time motion is detected the video will be stored in your online cloud. However, if you don’t have this it is possible to check the feed on your mobile live.
          </p>
          <p className="leading-7 mt-6">
            So what happens in the cloud? Maybe the package or person detection, could be. Or some fancy facial recognition? Apparently not, according to Ring; “Ring does not have facial recognition technology in any of its devices or services.”. However the public videos have been used by Amazon to train a facial recognition system.
          </p>
          <p className="leading-7 mt-6">
            And what about the usage of the footage by others? Google was clear that they use it if you opt-in.
          </p>
          <p className="leading-7 mt-6 text-2xl font-extrabold">
            How about Ring aka Amazon?
          </p>
          <p className="leading-7 mt-3">
            Ring tells us the following:
          </p>
          <blockquote className="my-6 border-l-2 pl-2 italic font-semibold text-l">
            “A small number of video recordings are viewed by our research and development team to improve Ring’s products, services and technology. These video recordings are either from customers who have made them publicly available (by posting them on the Neighbors App* or otherwise on the Internet), or from customers, team members and their friends and family who have given us explicit permission to use them for this purpose (which they may revoke at any time).”
          </blockquote>
          <p className="leading-7">
            What do we get from this? They are only able to see your videos after explicit permission. But that does mean it is possible. And how would you be sure that they don’t just see it? You don’t. There have been numerous cases where the data has been handed to the police without consent.
          </p>

          <div className="flex flex-col text-justify py-3 mt-4">
            {/* 4.0 */}
            <h2 id="Chapter_4.0" className="flex justify-normal border-b pb-2 text-3xl font-semibold tracking-tight ">
              4.0<a className="mx-2 border-x-2 border-primary text-2xl center-x"></a>Dangers
            </h2>

            <p className="leading-7 mt-3">
              As these devices are used a lot, the security sector has looked at these devices extensively.
            </p>
            <p className="leading-7 mt-6">
              For the smart speakers that we talked about above there is not a real indication that the devices record audio constantly. This means that the On-Device wake word is probably happening and only after the wake word has been said the data is send to the cloud.
            </p>
            <p className="leading-7 mt-6">
              The only thing we can hope is that the audio that is reviewed is not used for other things next to improving the system and processing answers for the questions.
            </p>

            {/* Accordion */}
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Abusive clips (Google Nest)</AccordionTrigger>
                <AccordionContent>
                  <p className="">
                    In an article published reviewers from Amazon have said that the audio clips have been send internally as an amusing way. They also have described that there were clips with potential sexual assault or other extreme things. Amazon however has told them that it was not their job to intervene.
                  </p>
                  <p className="my-3">
                    We can only speculate if the reviewers could be able to help customers in these situations. The Alexa audio clips have their first name, account number and used device used attached to it, but Amazon quotes: “Employees do not have direct access to information that can identify the person or account as part of this workflow."
                  </p>
                  <a href="https://www.bbc.com/news/technology-47974579" className="underline">Smart speaker recordings reviewed by humans (bbc.com)</a>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Advertisement (Google Nest)</AccordionTrigger>
                <AccordionContent>
                  <p className="">
                    In April 2022, a report went live declaring that Amazon uses voice data from Alexa interactions to serve targeted ads.
                  </p>
                  <p className="mt-3">
                    The report, from researchers affiliated with the University of Washington, UC Davis, UC Irvine, and Northeastern University, states that Amazon (and third parties) collect data from Alexa interactions and share it with as many as 41 advertising partners.
                  </p>
                  <p className="mt-3">
                    It’s important to distinguish that they mean actual conversations you have had with Alexa – not your regular conversations that took place in the same room as an Alexa smart speaker; although the report does suggest the behavior is inconsistent with Amazon’s own privacy policies.
                  </p>
                  <p className="mt-3">
                    An Amazon spokesperson told The Verge:
                  </p>
                  <blockquote className="my-3 border-l-2 pl-2 italic font-semibold text-l">
                    “Similar to what you’d experience if you made a purchase on Amazon.com or requested a song through Amazon Music, if you ask Alexa to order paper towels or to play a song on Amazon Music, the record of that purchase or song play may inform relevant ads shown on Amazon or other sites where Amazon places ads.”
                  </blockquote>
                  <a href="https://arxiv.org/abs/2204.10920" className="underline">Tracking, Profiling, and Ad Targeting in the Alexa Echo Smart Speaker Ecosystem (arxiv.org)</a>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Dangers Ring Doorbell</AccordionTrigger>
                <AccordionContent>
                  <a href="https://foundation.mozilla.org/en/privacynotincluded/ring-video-doorbell/" className="underline">Amazon Ring Video Doorbell | Privacy & security guide | Mozilla Foundation</a>
                  <p className="my-2"></p>
                  <a href="https://www.consumer.ftc.gov/blog/2021/11/rings-privacy-failures-led-spying-and-harassment-through-home-security-cameras" className="underline">Ring’s privacy failures led to spying and harassment through home security cameras | Consumer Advice (ftc.gov)</a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}


// function useViewPortObserver(titleAmount: number) {
//   //   const refs = [];
//   //   const isInViewport = [];

//   //   for (let i = 0; i < titleAmount; i++) {
//   //     refs.push(useRef(null));
//   //     isInViewport.push(useIsInViewport(refs[i]));
//   //   }

//   //   return { refs, isInViewport };
//   const observers = Array.from({ length: titleAmount }, () => {
//     const refs = useRef(null);
//     const isInViewport = useIsInViewport(refs);
//     return { refs, isInViewport };
//   });

//   return observers;
// }


// function useIsInViewport(ref: any) {
//   const [isIntersecting, setIsIntersecting] = useState(false);

//   const observer = useMemo(
//     () => typeof IntersectionObserver !== 'undefined'
//       ? new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting))
//       : { observe: () => { }, disconnect: () => { } },
//     [],
//   );
//   useEffect(() => {
//     observer.observe(ref.current);

//     return () => {
//       observer.disconnect();
//     };
//   }, [ref, observer]);

//   return isIntersecting;
// }


// Quiz Questions
// 1. What does Ring's statement imply about their access to customer video recordings?
//    - a) They can access any video without permission
//    - b) They can only access videos with explicit permission or those made publicly available
//    - c) They can access videos without permission but only for research and development purposes
//    - d) They do not access any customer videos
//    - **Answer: b) They can only access videos with explicit permission or those made publicly available**

// 2. What is a concern raised about the use of smart devices?
//    - a) They are too expensive
//    - b) They may record and share data without consent
//    - c) They are not user-friendly
//    - d) They are not durable
//    - **Answer: b) They may record and share data without consent**

// 3. What is suggested about the operation of smart speakers?
//    - a) They record audio constantly
//    - b) They only record audio after a wake word is said
//    - c) They do not record any audio
//    - d) They record audio at random intervals
//    - **Answer: b) They only record audio after a wake word is said**

// 4. What incident is mentioned regarding Amazon's reviewers and audio clips?
//    - a) Reviewers used audio clips for amusement
//    - b) Reviewers intervened in potential criminal situations
//    - c) Reviewers had direct access to personal customer information
//    - d) None of the above
//    - **Answer: a) Reviewers used audio clips for amusement**

// 5. What information is associated with Amazon's voice recordings?
//   a) Account number, first name, and device serial number
//   b) Personally identifiable information
//   c) Randomized identifier
//   d) None of the above
//   Answer: a) Account number, first name, and device serial number