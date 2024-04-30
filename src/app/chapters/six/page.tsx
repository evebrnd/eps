'use client'

import { mdiChip } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import { ReactTyped } from 'react-typed';

import Sidebar from "@/components/SideBar";

import SmartDoorbellPNG from "../../../../public/WorkingOfDevices/SmartDoorbell.png"
import SmartEcoBeePNG from "../../../../public/WorkingOfDevices/SmartEcoBee.png"
import SmartNestHubPNG from "../../../../public/WorkingOfDevices/NestHubSand.jpg"
import SmartEnergyMonitorPNG from "../../../../public/WorkingOfDevices/smappeeEnergyMonitor.jpeg"
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

const chap6_Examples = [
  {
    title: "Google Nest",
    description: "Just on/off.",
    image: SmartNestHubPNG,
    alt: "Picture of a Smart Lightbulb",
    quickSource: "store.google.com",
    source: "https://store.google.com/product/nest_hub_2nd_gen?hl=no"
  },
  {
    title: "Ecobee",
    description: "Sound.",
    image: SmartEcoBeePNG,
    alt: "Picture of a Google Home",
    quickSource: "youversion.com",
    source: "https://www.youversion.com/the-bible-app/bible-for-voice/"
  },
  {
    title: "Smappee energy monitor",
    description: "Environment scanning sensors.",
    image: SmartEnergyMonitorPNG,
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
          Benefits and Risks of Smart Home Devices
        </h1>
        <p className="leading-7 mt-6 text-justify">
          In this chapter, the benefits and risks of Smart Home Devices will be elaborated.
          becoming aware of these topics will provide more clarity on what an SHD can assist with in improving daily quality of life,
          but also highlights the risks of having such a device in your home.
          <br></br>
          <br /> A smart home device can have many benefits to convenience and efficiency. below are a few categories in which an 
          SHD excels in. 
          <br />
        </p>

          {/* 1.0 */}
        <div className="flex flex-col text-justify py-3 border-y-2 border-primary/20 mt-10">
          <h2 id="Chapter_1.0" className="flex justify-normal mt-2 border-b pb-2 text-3xl font-semibold tracking-tight">
            1.0<a className="mx-2 border-x-2 border-primary text-3xl"></a>Benefits of an SHD
          </h2>
          <p className="leading-7 mt-3 md:mt-6">
            The benefits of smart home devices will be divided in four categories. Environmental, financial, psychological and health related benefits.
          </p>

          {/* 1.1 */}
          <h3 id="Chapter_1.1" className="mt-8 text-2xl font-semibold tracking-tight">
            1.1. Environmental benefits
          </h3>
          <p className="leading-7 mt-3">
              One of the main drivers for purchasing a Smart Home Device short-term is the reduction in energy consumption. SHD's can 
              give live feedback on improving energy consumption, and can provide suggestions on how to use energy efficiently within the home.
              <br></br>
              If smart homes are used on a larger scale, these devices can provide environmental benefits on the long term. Think of environmental sustainability
              and a reduction in carbon emission.
              <br></br>
              <br></br>
              Devices like Nest or Ecobee learn from your habits and adjust the temperature accordingly, ensuring optimal energy use.
              They can be controlled remotely, allowing users to adjust the home's temperature from anywhere, thereby preventing energy wastage.
              <br></br>
              <br></br>
              As the name implies, devices like the Smappee energy monitor, monitor the energy use of every appliance in the house. 
              They provide real-time feedback to users about their energy consumption patterns, enabling them to make conscious decisions to reduce energy wastage. 
          </p>
          {/* Carousell item, showing the differen devices.*/}
          <div className="flex flex-col w-full px-12 py-6 md:px-24">
            <Carousel className="">
              <CarouselContent className="">
                {chap6_Examples.map((component, index) => (
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

          
          {/* <blockquote className="my-6 border-l-2 pl-2 italic font-semibold text-xl">
            “The little speaker that’s a huge help around the house.”
          </blockquote>
          <p className="leading-7">
            A little speaker for sure, but what does it do on the inside to be the <a className="font-semibold italic">"huge help"</a>?
            <br />
            This speaker has capacitive touch sensors (as buttons) and three far-field microphones and of course a speaker.
            <br />
            This is needed to create the <a className="font-semibold italic">"huge help"</a> in the system. But does it have other things? This particular device has only some processors and processing units. Not too interesting.
          </p> */}

          {/* 1.2 */}
          <h3 id="Chapter_1.2" className="mt-8 text-2xl font-semibold tracking-tight">
            1.2. Financial benefits
          </h3>
          <p className="leading-7 mt-3">
          Smart homes enable cost savings through efficient routines and sustainable consumption practices. Additionally, virtual medical consultations reduce healthcare costs and enhance overall well-being.
          </p>
          <p className="leading-7">
          <br />
            Another financial benefit lies in enhanced security measures. 
            Smart home security systems provide peace of mind and can even lower insurance costs. 
            Features like smart doorbells, 
            which allow you to receive alerts and view live video feeds when someone approaches your door, enhance security. 
            Motion sensors and smart locks also contribute to a safer home environment.
          <br />
          <br />
            Lastly, investing in smart home technology can increase your property value.
            An example can be investing into a smart solar system that has an energy management system,
            which analyzes energy usage patterns, weather forecasts and grid demand. This data can help the user
            make informed decisions like when to use stored energy, and when to sell excess energy back to the grid.
            <br />
            <br /> 
            A well-equipped smart home appeals to buyers, making it more attractive in the real estate market. 
            While the initial setup cost can be significant, the long-term benefits, 
            including energy savings and added property value, can offset this investment.
          </p>
            
            <br />
          {/* 1.3
          <h3 id="Chapter_1.3" className="mt-8 text-2xl font-semibold tracking-tight">
            1.3. Psychological benefits
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
          </p> */}
          {/* 1.4 */}
          <h3 id="Chapter_1.4" className="mt-8 text-2xl font-semibold tracking-tight">
            1.4. Health related benefits
          </h3>
          <p className="leading-7 mt-3">
          Smart home devices offer several health advantages for occupants, 
          particularly older adults and people with specific health needs. 
          These devices can help with illness prevention by measuring cleanliness and hygiene of the house. 
          During the COVID-19 pandemic, homeowners became more aware of maintaining a clean living space. 
          Features like smart air purifiers and sanitizing devices reduce the spread of germs and viruses, 
          promoting a healthier environment.
          </p>
          <p className="leading-7">
          Apart from physical health, smart home devices can help with general quality of life. 
          Examples are smart lighting that can change to natural daylight patterns, improving  sleep quality or 
          virtual assistants that can provide companionship and reminders for medication or self-care routines.
          <br />
          <br />
          For older adults, smart homes can be especially useful. Nearly 75% of adults aged 50 and older express a desire to remain in their homes. Features like smart door locks, fall detection sensors, medication reminders, and voice-controlled devices assist with daily tasks and enhance safety.
            <br />
            <br />
          </p>
          <p className="leading-7 mt-6">
            After some more digging we found that the Ring Doorbell has a HD camera, a button, a speaker, microphone, infrared LEDS for the night vision of the camera and “motion detection sensors”.
            <br />
            Well this is way more data that can be processed compared to the Google Nest Mini.
          </p>
            <br></br>
          <a href="https://www.aarp.org/pri/topics/livable-communities/housing/2021-home-community-preferences/" className="underline">Where We Live, Where We Age: Trends in Home and Community Preferences (AARP.org)</a>
        </div>

        <div className="flex flex-col text-justify py-3 mt-4">
          {/* 2.0 */}
          <h2 id="Chapter_2.0" className="flex justify-normal border-b pb-2 text-3xl font-semibold tracking-tight ">
            2.0<a className="mx-2 border-x-2 border-primary text-2xl center-x"></a>Obstacles and Need for Better Understanding of Smart Home Devices
          </h2>
          
          <p className="leading-7 mt-6">
          Smart home devices come with a few problems, often made worse by users not knowing enough about them. SHDs can be complicated. 
          They include many different devices like smart bulbs, thermostats, security cameras, and voice assistants. 
          Fitting all these together can be difficult for users. 
          Without the right help, users might find it hard to set up, adjust, and fix these devices. </p>
          <br></br>
          <p>
            There are worries about privacy and safety. Many SHDs collect personal information, from daily habits to health details. 
            Users often don't know how much data is collected and what it means. 
            Not knowing enough about privacy settings and safe use can accidentally expose data.
          </p>
          <br></br>
          <p>
            Because users don't know much about the privacy and security issues in their devices,
            manufacturers often don't share a lot of information about these topics. This situation can lead to a cycle. 
            If users aren't asking for better security or privacy, manufacturers might not spend time or money to make these improvements. 
            They might also not tell users about possible security issues. Instead, they focus on promoting the good parts of their devices.</p>
          <br></br>
          <p>
            Manufacturers might only fix security or privacy issues after they become a problem, 
            instead of working to prevent these problems in the first place. To stop this cycle, 
            we need to help users understand more about the importance of security and privacy. 
            This way, they can ask manufacturers to be more open about these topics and to do a better job of protecting users. 
            This can be done through education, support from groups that care about these issues, 
            and rules that require manufacturers to protect users' security and privacy.
          </p>
          <br></br>
          <p>
          In conclusion, teaching users is key to getting the most out of SHDs while reducing risks. 
          By increasing awareness, we allow users to make smart decisions and handle the complexities of these smart home devices.
          </p>


          {/* 2.1 */}
          <h3 id="Chapter_2.1" className="mt-8 text-2xl font-semibold tracking-tight">
            2.1. Privacy Concerns and Hacking Vulnerability - Ring Doorbell.
          </h3>
          <p className="leading-7 mt-3">
            The Ring Video Doorbell, a popular smart home device, promises convenience and security at your front door. 
            However, it’s important to weigh both the benefits and potential drawbacks before making an informed decision. 
            This paragraph will investigate several allegations surrounding the Ring Doorbell.          
          </p>
          <br></br>
          <p className="leading-7">
            Ring doorbells have been under investigation due to their susceptibility to hacking incidents. 
            In a case reported by The Washington Post, 
            a hacker gained access to a Ring camera in a child’s room and interacted with an 8-year-old girl. 
            This incident highlights the privacy risks associated with these devices, 
            as unauthorized access can lead to spying and harassment through home security cameras. 
          </p>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            “Google Assistant is designed to wait in standby mode until it detects an activation, like when it hears "Hey Google."”
          </blockquote>
          <p className="leading-7 mt-6">
            They say in standby mode the device records small snippets of audio every few seconds to detect the magic word. After that the device is activated (showed by an indicator light) and will record the request from the user. This request will be send to the servers of Google, more about this later.
          </p>

          {/* 2.2 */}
          <h3 id="Chapter_2.2" className="mt-8 text-2xl font-semibold tracking-tight">
            2.2. Data Sharing with Third Parties
          </h3>
          <p className="leading-7 mt-3">
          Ring has been criticized for its data-sharing practices. User data is shared with third-party companies, 
          including law enforcement agencies. 
          The extent of this data sharing and the lack of transparency raise privacy concerns among users. 
          </p>
          <p className="leading-7 mt-6">
          As of January 2024, Ring has taken a step regarding user privacy. 
          The “Request for Assistance” tool, previously used by police to request user footage, 
          will be removed from the Neighbors app. Law enforcement can no longer directly ask for video through this avenue. 
          However, there are exceptions. In life-or-death situations, 
          police can still reach out to companies like Ring for emergency requests. 
          </p>
          <p className="leading-7 mt-6">
          <a className="font-bold">Amazon’s Acquisition and Integration:</a> Amazon’s takeover of Ring in 2018 has raised questions about privacy. Integration with Amazon services like Alexa has led to concerns that user data could be further collected and potentially compromised.
            <br />
          </p>
          <p>
          <a className="font-bold">Intrusive Neighbors and Community Surveillance:</a> Ring encourages users to share footage with neighbors through its Neighbors app. While this community surveillance approach aims to enhance security, it may lead to privacy violations and unnecessary monitoring of public spaces.
          <br />
          <br />
          In 2018, Ring started to cooperate with local police departments, with features that were specifically built for police officers within the app, allowing them to send public safety alerts and requests for camera footage to ring users in a certain area. In 2023, Ring had nearly 2350 police departments on the app. 
          </p>
          <br />
          <p>
          <a className="font-bold">Legal and Ethical Implications:</a> The use of Ring doorbells in law enforcement investigations raises ethical questions. Critics argue that partnerships between Ring and police departments could infringe on civil liberties, disproportionately impact communities, and challenge the balance between security and privacy. 
          </p>
          <br />
          An example of this is the story of Michael Larkin, a business owner in Ohio. 
          The local police department requested ring doorbell camera footage of the front door camera. 
          His doorbell was among 21 other cameras around his home, recording footage of Larkin, neighbors, 
          customers and anyone else around his business. Quoting the article:
          <blockquote className="mt-6 border-l-2 pl-6 italic">
          “The police said they were conducting a drug-related investigation on a neighbor, and they wanted videos of “suspicious activity” between 5 and 7 p.m. one night in October. Larkin cooperated and sent clips of a car that drove by his Ring camera more than 12 times in that time frame.”
          </blockquote>
          <br />
          <p>Larkin thought that was all the police would need. However, this was just the beginning.</p>
          <br />
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            ”They asked for more footage, now from the entire day’s worth of records. And a week later, 
            Larkin received a notice from Ring itself: The company had received a warrant, signed by a local judge. 
            The notice informed him it was obligated to send footage 
            from more than 20 cameras — whether or not Larkin was willing to share it himself.”
          </blockquote>
          <br/>
          <br/>
          <p>
            Because of the growth of smart surveillance cameras, questions arise on who owns the private home security footage, and who can access it. 
            It is important to keep in mind this debate because it emphasizes how crucial it is to keep the conversation about privacy going.
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
        <div className="flex flex-col">
          {/* The previous and next buttons */}
          <PreviousAndNextButton
            previousUrl={components_chapters[1].href}
            nextUrl={components_chapters[3].href}
          />
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