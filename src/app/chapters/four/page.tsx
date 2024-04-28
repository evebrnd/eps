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
import PreviousAndNextButton from "@/components/PreviousAndNextButton";
import { components_chapters } from "@/utils/constants";

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
    description: "Smart speakers like Google Home or Amazon Echo use on-device machine learning to detect their wake words (Hey Google or Alexa). The device is constantly listening for these specific words on the device itself.",
    image: WakeWordDetectionGIF,
    alt: "GIF of a smart speaker detecting a wake word",
    quickSource: "Giphy.com",
    source: "https://giphy.com/gifs/google-macaulay-culkin-hey-google-55vzISvU8zUFvd6U3W"
  },
  {
    title: "Facial Recognition",
    description: "Many smartphones use on-device machine learning for facial recognition features. When you unlock your phone with your face, the device uses a machine learning algorithm to compare the current image with the stored image of your face.",
    image: FacialRecognitionGIF,
    alt: "GIF of a smartphone using facial recognition",
    quickSource: "Tenor.com",
    source: "https://tenor.com/view/face-gif-21129360"
  },
  {
    title: "Text Prediction",
    description: "Text prediction on your smartphone keyboard is a form of on-device machine learning. As you type, the device predicts what word you'll type next based on your typing history.",
    image: TextPredictionGIF,
    alt: "GIF of a smartphone keyboard predicting text",
    quickSource: "Stackoverflow.com",
    source: "https://stackoverflow.com/a/29449504"
  },
  {
    title: "Activity Recognition",
    description: "Many fitness trackers and smartwatches use on-device machine learning to recognize different types of physical activity (like walking, running, or cycling). These devices use machine learning algorithms to analyze sensor data and categorize the user's current activity.",
    image: ActivityDetectionGIF,
    alt: "GIF of a fitness tracker recognizing physical activity",
    quickSource: "Pinterest.com",
    source: "https://pin.it/2c1h3oxEC"
  }
]

const chap3_2_Examples = [
  {
    title: "Image Recognition and Analysis",
    description: "Social media platforms like Facebook use cloud-based machine learning for their image recognition features. When you upload a photo, it's sent to Facebook's cloud servers, which use machine learning algorithms to identify and tag faces, recognize objects, and even interpret the content of the image. This requires significant computational power and large datasets for training, which are available in the cloud.",
    image: ImageRecognitionGIF,
    alt: "GIF of a social media platform using image recognition",
    quickSource: "Gifer.com",
    source: "https://i.gifer.com/NRY9.gif"

  },
  {
    title: "Chatbots and Conversational AI",
    description: "Cloud-based machine learning powers advanced chatbots and conversational AI systems like OpenAI's GPT-4. When you interact with a chatbot, your input is sent to the cloud. Here, machine learning algorithms process the text, comprehend the context, and generate a relevant response.",
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
          Now that the general idea of a <a className="text-2xl font-semibold tracking-tight">Smart Home Device</a> is uncovered, there needs to be more clarity about the physical workings of these devices.
          <br />
          What do they save? What do they process and where do they process this? But maybe the best question to begin with is;
          <br />
          What sensors do smart home devices have?
        </p>

        <div className="flex flex-col text-justify py-3 border-y-2 border-primary/20 mt-10">
          {/* 1.0 */}
          <h2 id="Chapter_1.0" className="flex justify-normal mt-2 border-b pb-2 text-3xl font-semibold tracking-tight">
            1.0<a className="mx-2 border-x-2 border-primary text-3xl"></a>Sensors
          </h2>
          <p className="leading-7 mt-3 md:mt-6">
            Smart home devices are designed for different intended use cases.
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
            Each of these devices is designed for specific use cases. Depending on the intended function, these use cases may require multiple sensors to ensure the device is functioning properly.
          </p>

          {/* 1.1 */}
          <h3 id="Chapter_1.1" className="mt-8 text-2xl font-semibold tracking-tight">
            1.1. Google Nest Mini
          </h3>
          <p className="leading-7 mt-3">
            Let’s take the Google Home Mini or now called Nest Mini. This device is as the manufacturer puts it:
          </p>
          <blockquote className="my-6 border-l-2 pl-2 italic font-semibold text-xl">
            “The little speaker that’s a huge help around the house.”
          </blockquote>
          <p className="leading-7">
            A little speaker for sure, but what does it do on the inside to be the: <a className="font-semibold italic">"huge help"</a>?
            <br />
            This speaker is equipped with capacitive touch sensors (as buttons) and three far-field microphones and of course a speaker.
          </p>
          <p className="leading-7 mt-6">
            These sensors are needed to create the “huge help”. That begs the question; what more does it pack on the inside?
            <br />
            This particular device has only some processors and processing units.
            Not too interesting.
          </p>

          {/* 1.2 */}
          <h3 id="Chapter_1.2" className="mt-8 text-2xl font-semibold tracking-tight">
            1.2. Ring Doorbell
          </h3>
          <p className="leading-7 mt-3">
            The other device we are going to check is the Ring Doorbell. As Ring puts it:
          </p>
          <blockquote className="my-6 border-l-2 pl-2 italic font-semibold text-xl">
            “Ring Video Doorbells allow you to see, hear and speak to visitors, from anywhere.”
          </blockquote>
          <p className="leading-7">
            Well, isn’t that great, always being able to check who is in front of your door.
          </p>
          <p className="leading-7 mt-6">
            As far as sensors go Ring doesn’t really tell what is in the device specifically like Google did.
            <br />
            Ring tells us that it has video capabilities, motion detection and two-way audio. What does it really have inside? Exactly, that’s not clear from looking at the product page.
          </p>
          <p className="leading-7 mt-6">
            After some more digging we found that the Ring Doorbell has a HD camera, a button, a speaker, microphone, “motion detection sensors” and infrared LEDS for the night vision of the camera.
            <br />
            Well, this is a lot more data that can be processed compared to the Google Nest Mini.
          </p>
        </div>

        <div className="flex flex-col text-justify py-3 mt-4">
          {/* 2.0 */}
          <h2 id="Chapter_2.0" className="flex justify-normal border-b pb-2 text-3xl font-semibold tracking-tight ">
            2.0<a className="mx-2 border-x-2 border-primary text-2xl center-x"></a>Data Processing
          </h2>
          <p className="leading-7 mt-3 md:mt-6">
            Alright now that we know the insides of a small smart speaker and a camera doorbell. The question comes up, what is controlling the sensors and what does the device do with it?
          </p>

          {/* 2.1 */}
          <h3 id="Chapter_2.1" className="mt-8 text-2xl font-semibold tracking-tight">
            2.1. Google Nest Mini
          </h3>
          <p className="leading-7 mt-3">
            The Google Nest Mini has multiple microphones that listen to the magic word;
          </p>
          <p className="flex justify-center text-2xl font-semibold tracking-tight mt-6 mb-2">
            “Ok Google.” Right?
          </p>
          <p className="leading-7">
            This is not 100% clear, according to Google itself they say, quote:
          </p>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            “Google Assistant is designed to wait in standby mode until it detects an activation, like when it hears "Hey Google."”
          </blockquote>
          <p className="leading-7 mt-6">
            They say in standby mode, the device records small parts of audio every few seconds to check for the magic word. After that the device is activated (showed by an indicator light) and will record the request from the user. This request will at last be send to the servers of Google. More about the servers later.
          </p>

          {/* 2.2 */}
          <h3 id="Chapter_2.2" className="mt-8 text-2xl font-semibold tracking-tight">
            2.2. Ring Doorbell
          </h3>
          <p className="leading-7 mt-3">
            The Ring Doorbell boasts a motion detection feature that's always on the lookout for movement.
          </p>
          <p className="flex text-2xl italic font-semibold tracking-tight mt-6">
            But how does it do this?
          </p>
          <p className="leading-7 mt-6">
            Let’s start with the main component, the camera. The camera supposedly only starts recording when one of the motion sensors sees well, motion. The camera also start recording when the doorbell is pressed physically.
            <br />
            The Ring Doorbell also has a microphone so this will be recorded together with the camera footage.
            Depending on if you have a subscription or not these videos will be stored online.
          </p>
          <p className="leading-7 mt-6">
            They say it’s safely stored against anyone else. But is it really? Is it just a security camera for you? You will get the answer later in this course.
          </p>
          <p className="leading-7 mt-6">
            You can say what you want about Google, but they are way clearer about what they do with your data.
          </p>
        </div>

        <div className="flex flex-col text-justify py-3 mt-4">
          {/* 3.0 */}
          <h2 id="Chapter_3.0" className="flex justify-normal border-b pb-2 text-3xl font-semibold tracking-tight ">
            3.0<a className="mx-2 border-x-2 border-primary text-2xl center-x"></a>Where is the data being processed?
          </h2>
          <p className="leading-7 mt-3">
            Having explored the sensors within two smart devices and the data they process, let's turn our attention to the processing itself and where it takes place.
          </p>
          <p className="leading-7 mt-6">
            First, it's crucial for us to distinguish between on-device and cloud processing. This is a subtle difference that can often be overlooked, especially in our fast-paced, tech-savvy era.
          </p>

          {/* 3.1 */}
          <h3 id="Chapter_3.1" className="mt-8 text-2xl font-semibold tracking-tight">
            3.1. On-Device
          </h3>
          <p className="leading-7 mt-3">
            With <strong>On-Device</strong> processing it means that the data <strong>DOES NOT</strong> leave the device. It is processed On-Device. Nowadays this is possible by things called ’Machine Learning Engines’. More on that later.
          </p>
          <p className="leading-7 mt-6">
            Machine Learning Engines can be thought of as processors or computers programmed with specific “tasks” to search for. Take the Google Nest Mini as an example. It's programmed to respond to the command "Hey Google". Google has trained a program to listen specifically for these two words. Just these two.
          </p>
          <p className="leading-7 mt-6">
            So, the Nest Mini is always listening for voice snippets, and the internal computer swiftly checks if these snippets contain the activation phrase. Detecting this isn't a challenging task, and it's something that can be performed locally on the device itself. That's why it's called on-device.
          </p>
          <p className="leading-7 mt-6">
            Some other things that can be done On-Device are:
          </p>

          {/* Carousell item, showing the different on On-Device Processes*/}
          <div className="flex flex-col w-full py-3 px-12 md:px-24">
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
            With <strong>Cloud</strong> processing it means that the data <strong>DOES</strong> leave the device. It is processed in the cloud. This happens in massive data centers scattered across the globe.
          </p>
          <p className="leading-7 mt-6">
            Like on-device processing, these data centers also utilize "Machine Learning Engines" to analyze data. However, it's essential to understand that these data-center computers are way <strong>WAY</strong> bigger and more powerful than the modest computer in a device like the Google Nest Mini.
          </p>
          <p className="leading-7 mt-6">
            Because of their superior processing power, these computers in the data centers can run much more advanced "Machine Learning" programs.
          </p>
          <p className="leading-7 mt-6">
            Consider a voice-activated speaker like the Google Nest Mini. When you pose a question to the device, your voice is recorded and transmitted over the internet to Google's cloud servers. These servers deploy machine learning algorithms to interpret your speech, determine the best response, and then send that response back to your device.
          </p>
          <p className="leading-7 mt-6">
            This process demands the computational power and storage capacity of the cloud, as it involves complex tasks like natural language processing and accessing large databases of information. This is just not accessible or ideal for on-device processing.
          </p>
          <p className="leading-7 mt-6">
            Other examples of Cloud processing are:
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
                  Cloud-based machine learning powers advanced chatbots and conversational AI systems like OpenAI's GPT-4.
                </p>
                <p className="mt-3">
                  When you interact with a chatbot, your input is sent to the cloud. Here, machine learning algorithms process the text, comprehend the context, and generate a relevant response.
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
                        strings={["Example: Customer Service Chatbot<br/><br/>A customer service chatbot, widely used in online retail, is an excellent instance of conversational AI. It can handle various customer queries promptly. For example, if a customer asks about delivery times, the chatbot can understand the question through natural language processing and provide an accurate response. This instant reply mechanism greatly reduces waiting times and enhances the customer experience. <br/><br/> In addition to handling queries, the chatbot can also track orders, suggest products based on customer preferences, and assist with the checkout process. These tasks are executed in a conversational manner, making the customer feel like they are interacting with a human, not a machine. Thus, the use of conversational AI in chatbots not only automates repetitive tasks but also significantly improves the overall customer satisfaction."]}
                        typeSpeed={5}
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
            Now that we've established the difference between on-device and cloud processing, let's examine what happens with the data from our Google Nest Mini.
          </p>
          <p className="leading-7 mt-6">
            First, the device will listen <strong className="text-xl">On-Device</strong> to a wake-word; “Hey Google”. It does this every few seconds. If it does detect the word it will record the sentences after “Hey Google” and send all of this to the <strong className="text-xl">Cloud</strong>. All of this information is then processed on one of the computers in a datacenter. Once it understands your question, it attempts to find the best response. When it does, it sends the answer back to your device. It's a repeating process.
          </p>
          <p className="leading-7 mt-6">
            But does this mean that Google Nest Mini doesn't listen to other words or things we say? We can't say for sure. This is where we have to place our trust in large companies like Google, Amazon, and Apple.
          </p>
          <p className="leading-7 mt-6">
            The thing we do know is that your voice snippets will be send to one of the big companies to check if the wake word has been said. Human reviewers transcribe and annotate voice clips to enhance speech recognition systems.
          </p>
          <p className="leading-7 mt-6">
            This means that your conversations could potentially be reviewed by employees.
          </p>
          {/* Accordion */}
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Google Policy</AccordionTrigger>
              <AccordionContent>
                <p className="">
                  Google operates a human review program for Assistant audio recordings. This process involves human reviewers analyzing snippets of audio, which assists in enhancing Google's speech recognition technology and broadening language support.
                </p>
                <p className="mt-3">
                  The audio snippets under review aren't linked to user accounts and are anonymized to prevent associating them with specific individuals. Google also notes that the audio is distorted to protect the user's voice.
                </p>
                <p className="my-3">
                  Google only uses your Assistant recordings if you opt into the program. Normally it’s opted out.
                </p>
                <a href="https://www.theverge.com/2019/7/11/20690197/google-assistant-voice-recordings-human-review-listening-vrt-nws" className="underline">Google Assistant recordings being reviewed by humans (theverge.com)</a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Apple Policy</AccordionTrigger>
              <AccordionContent>
                <p className="">
                  Apple’s security policy ensures that voice recordings collected by Siri protect user privacy. Human reviewers assigned to assess these recordings don't receive any personally identifiable information or the random ID linked to the recordings, thus maintaining user privacy throughout the review process.
                </p>
                <p className="my-3">
                  Siri's voice interactions are linked with a randomized identifier, not personal information. This identifier is reset each time Siri is deactivated. Any voice recordings kept beyond six months are stored without the random ID number.
                </p>
                <p className="my-3">
                  In 2019, Apple announced that it would no longer listen to Siri recordings without your permission. If you opt in, Apple can receive your audio data
                </p>
                <a href="https://www.theverge.com/2019/8/28/20837001/apple-siri-voice-recordings-human-review-privacy-policy" className="underline">Apple Siri voice recordings being reviewed by humans (theverge.com)</a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Amazon Policy</AccordionTrigger>
              <AccordionContent>
                <p className="">
                  Amazon's policy specifies that voice recordings are associated with an account number, the customer's first name, and the serial number of the Echo device used.
                </p>
                <p className="my-3">
                  Amazon states that it places a high priority on security and privacy, and only annotates an "extremely small sample" of Alexa voice recordings. This is done to train their speech recognition and natural language understanding systems. The company maintains strict technical and operational safeguards and adheres to a zero-tolerance policy for system abuse.
                </p>
                <p className="my-3">
                  Amazon only stops listening to your microphone if you opt-out. This is different than Google and Apple. They store more data together with your voice snippets and have an opt-out policy.
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
            Now, let's delve into a product that uses more data - the Ring Doorbell.
          </p>
          <p className="leading-7 mt-6">
            The information about what is processed <strong className="text-xl">On-Device</strong> and what is processed in the <strong className="text-xl">Cloud</strong> for this device is rather limited. As such, we must make some educated guesses about where certain processes occur.
          </p>
          <p className="leading-7 mt-6">
            It's likely that the motion sensors process everything on-device. This is because motion detection isn't a complex task and needs to be done quickly, which is best achieved on-device.
          </p>
          <p className="leading-7 mt-6">
            Once motion is detected, the camera and microphone kick into action, recording videos. Here's where things get murky. We're not certain if features like "package detection" or "person detection" are processed on-device.  This is <strong className="text-2xl">exactly</strong> why this needs to be more transparent.
          </p>
          <p className="leading-7 mt-6">
            When a subscription is bought from Ring every time motion is detected the video will be stored in your online cloud storage. However, if you don’t have this it’s possible to check the feed on your mobile device.
          </p>
          <p className="leading-7 mt-6">
            So, what's happening in the cloud? Perhaps the package or person detection is processed there. Or maybe even some sophisticated facial recognition?
            <br />
            According to Ring, that's not the case:
            <blockquote className="my-6 border-l-2 pl-6 italic">
              "Ring does not have facial recognition technology in any of its devices or services."
            </blockquote>
            Yet, it's been reported that Amazon has used public videos to train a facial recognition system.
          </p>
          <p className="leading-7 mt-6">
            As for the access of the footage by others, that's another question that needs answering. According to Ring:
          </p>
          <blockquote className="my-6 border-l-2 pl-2 italic font-semibold text-l">
            “A small number of video recordings are viewed by our research and development team to improve Ring’s products, services and technology. These video recordings are either from customers who have made them publicly available (by posting them on the Neighbors App* or otherwise on the Internet), or from customers, team members and their friends and family who have given us explicit permission to use them for this purpose (which they may revoke at any time).”
          </blockquote>
          <p className="leading-7">
            From this, we can conclude that they can access your videos only <strong>after</strong> obtaining explicit permission. Yet, this does suggest that they have the <strong>potential</strong> to view your recordings. But how can you be sure they aren't doing this without your consent?
          </p>
          <p className="leading-7 mt-6">
            The reality is you can't be certain. There have been numerous cases where data was provided to law enforcement without the user's consent, raising serious concerns about privacy and data security.
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
              For the smart speakers discussed earlier, there's no concrete evidence to suggest that the devices are constantly recording audio. This implies that the On-Device wake word detection is likely in operation, and only after the wake word is detected is the data sent to the cloud.
            </p>
            <p className="leading-7 mt-6">
              The only thing we can hope is that the audio that is reviewed is solely used for system improvement and processing responses to requests, and not for any other purposes.
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
                <AccordionTrigger>Advertisement (Amazon Alexa)</AccordionTrigger>
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
                <AccordionTrigger>Spying on customers (Ring Doorbell)</AccordionTrigger>
                <AccordionContent>
                  <p className="">
                    The security of internet-connected devices, such as Ring's home security products, has raised significant privacy concerns. Ring faced backlash when inadequate security allowed employees to spy on customers, leading to distressing privacy invasions. This highlighted the risks associated with smart home devices and raised questions about their safety.
                  </p>
                  <p className="my-3">
                    In response, Ring settled with the Federal Trade Commission (FTC), establishing a comprehensive privacy program, deleting unauthorized videos, and paying $5.8 million to affected customers. Reactions varied, with some consumers appreciating the FTC's actions, while others felt the settlement was insufficient given the violations' severity.
                  </p>
                  <p className="my-3">
                    Personal experiences shared by consumers underscored the emotional impact of such privacy violations. The Ring case serves as a stark reminder of the risks of internet-connected devices and the need for robust security measures. As consumers, it's crucial to stay informed and vigilant to protect our privacy.
                  </p>
                  <a href="https://www.consumer.ftc.gov/blog/2021/11/rings-privacy-failures-led-spying-and-harassment-through-home-security-cameras" className="underline">Ring’s privacy failures led to spying and harassment through home security cameras | Consumer Advice (ftc.gov)</a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="flex flex-col">
          {/* The previous and next buttons */}
          <PreviousAndNextButton
            previousUrl={components_chapters[3].href}
            nextUrl={components_chapters[5].href}
          />
        </div>
      </div>
    </div>
  );
}


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