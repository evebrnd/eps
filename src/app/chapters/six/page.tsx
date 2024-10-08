"use client"

import { mdiAbacus } from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";

import Sidebar from "@/components/SideBar";

import SmartDoorbellPNG from "../../../../public/WorkingOfDevices/SmartDoorbell.png"
import SmartEcoBeePNG from "../../../../public/RisksAndBenefits/SmartEcoBee.png"
import SmartNestHubPNG from "../../../../public/RisksAndBenefits/NestHubSand.jpg"
import SmartEnergyMonitorPNG from "../../../../public/RisksAndBenefits/SmappeeEnergyMonitor.jpeg"
import QuestionsRisks from "../../utils/questionsRisks.json"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import PreviousAndNextButton from "@/components/PreviousAndNextButton";
import { components_chapters } from "@/app/utils/constants";
import Quiz from "@/components/Quiz";

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
      title: 'Benefits', id: 'Chapter_1.0', subChapters: [
        { title: 'Environmental', id: 'Chapter_1.1' },
        { title: 'Financial', id: 'Chapter_1.2' },
        { title: 'Health related', id: 'Chapter_1.3' },
      ]
    },
    {
      title: 'Obstacles', id: 'Chapter_2.0', subChapters: [
        { title: 'Privacy Concerns', id: 'Chapter_2.1' },
        { title: 'Data Sharing', id: 'Chapter_2.2' },
      ]
    }
  ];

  return (
    <div className="flex flex-wrap">
      {/* The sidebar of the page */}
      <Sidebar chapters={chapters} />

      {/* The main content of the page */}

      <div className="flex flex-col py-2 mx-auto w-5/6 md:w-3/6">
        <Icon path={mdiAbacus} size="4em" className="mx-auto mt-7" />
        <h1 id="Introduction" className="flex text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Benefits and Risks of Smart Home Devices
        </h1>
        <p className="leading-7 mt-6 text-pretty">
          In this chapter, the benefits and risks of Smart Home Devices will be elaborated.
          becoming aware of these topics will provide more clarity on what an SHD can assist with in improving daily quality of life,
          but also highlights the risks of having such a device in your home.
          <br></br>
          <br /> A smart home device can have many benefits to convenience and efficiency. below are a few categories in which an SHD excels in.
          <br />
        </p>

        {/* 1.0 */}
        <div className="flex flex-col py-3 border-y-2 border-primary/20 mt-10">
          <h2 id="Chapter_1.0" className="flex mt-2 border-b pb-2 text-3xl font-semibold tracking-tight">
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
          {/* 1.3 */}
          <h3 id="Chapter_1.4" className="mt-8 text-2xl font-semibold tracking-tight">
            1.3. Health related benefits
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
            For older adults, smart homes can be especially useful. Over 75% of adults aged 50 and older express a desire to remain in their homes<sup><a href="https://www.aarp.org/home-family/your-home/info-2021/home-and-community-preferences-survey.html">[1]</a></sup>. Features like smart door locks, fall detection sensors, medication reminders, and voice-controlled devices assist with daily tasks and enhance safety.
            <br />
            <br />
          </p>
          <br></br>
          <a href="https://www.aarp.org/pri/topics/livable-communities/housing/2021-home-community-preferences/" className="underline">Where We Live, Where We Age: Trends in Home and Community Preferences (AARP.org)</a>
        </div>

        <div className="flex flex-col py-3 mt-4">
          {/* 2.0 */}
          <h2 id="Chapter_2.0" className="flex border-b pb-2 text-3xl font-semibold tracking-tight ">
            2.0<a className="mx-2 border-x-2 border-primary text-2xl center-x"></a>Obstacles and Need for Better Understanding of Smart Home Devices
          </h2>

          <p className="leading-7 mt-6">
            Smart home devices come with a few problems, often made worse by users not knowing enough about them. SHDs can be complicated. <br />
            They include many different devices like smart bulbs, thermostats, security cameras, and voice assistants. <br />
            Fitting all these together can be difficult for users.
            Without the right help, users might find it hard to set up, adjust, and fix these devices. </p>
          <br></br>
          <p>
            There are worries about privacy and safety. Many SHDs collect personal information, from daily habits to health details. <br />
            Users often don't know how much data is collected and what it means. <br />
            Not knowing enough about privacy settings and safe use can accidentally expose data.
          </p>
          <br></br>
          <p>
            Because users don't know much about the privacy and security issues in their devices,
            manufacturers often don't share a lot of information about these topics. This situation can lead to a cycle. <br />
            If users aren't asking for better security or privacy, manufacturers will not spend time or money to make these improvements. <br />
            They might also not tell users about possible security issues. Instead, they focus on promoting the good parts of their devices.</p>
          <br></br>
          <p>
            Manufacturers might only fix security or privacy issues after they become a problem,
            instead of working to prevent these problems in the first place. To stop this cycle,
            we need to help users understand more about the importance of security and privacy.
            This way, they can demand manufacturers to be more open about these topics and to do a better job of protecting users.
            This can be done through education, support from groups that care about these issues,
            and laws that require manufacturers to protect users' security and privacy.
          </p>
          <br></br>
          <p>
            In conclusion, educating users is key to getting the most out of SHDs while reducing risks.
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
            a hacker gained access to a Ring camera in a child’s room and interacted with an 8-year-old girl.<sup><a href="https://www.washingtonpost.com/technology/2020/02/18/ring-nest-surveillance-doorbell-camera/">[1]</a></sup>
            This incident highlights the privacy risks associated with these devices,
            as unauthorized access can lead to spying and harassment through home security cameras.
          </p>

          {/* 2.2 */}
          <h3 id="Chapter_2.2" className="mt-8 text-2xl font-semibold tracking-tight">
            2.2. Data Sharing with Third Parties
          </h3>
          <p className="leading-7 mt-6">
            It is important to know what data is being shared to third parties, especially with a device that captures motion, audio and video data. According to Ring:
          </p>
          <blockquote className="my-6 border-l-2 pl-2 italic font-semibold text-l">
            “A small number of video recordings are viewed by our research and development team to improve Ring’s products, services and technology. These video recordings are either from customers who have made them publicly available (by posting them on the Neighbors App* or otherwise on the Internet), or from customers, team members and their friends and family who have given us explicit permission to use them for this purpose (which they may revoke at any time).”
          </blockquote>
          
          <p className="leading-7">
            From this, we can conclude that they can access your videos only <strong>after</strong> obtaining explicit permission. Yet, this does suggest that they have the <strong>ability to view your recordings.</strong> But how can you be sure they aren't accessing footage without your consent?
          </p>
          <p className="leading-7 mt-6">
            The reality is that you can not be certain. There have been numerous cases<sup><a href="https://www.politico.com/news/2022/07/13/amazon-gave-ring-videos-to-police-without-owners-permission-00045513">[1]</a><a href="https://www.npr.org/2022/07/23/1113166744/amazon-says-its-given-information-from-ring-cameras-to-police-without-owners-con">[2]</a><a href="https://www.wired.com/story/ring-police-rfa-tool-shut-down/">[3]</a></sup> where data was provided to law enforcement without the user's consent, raising serious concerns about privacy and data security.
          </p>
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
          <br />
          <br />
          <p>
            Because of the growth of smart surveillance cameras, questions arise on who owns the private home security footage, and who can access it.
            It is important to keep in mind this debate because it emphasizes how crucial it is to keep the conversation about privacy going.
          </p>
        </div>

        <h3 className="text-pretty mt-3 mb-3 text-2xl font-semibold hover:underline hover:decoration-wavy hover:decoration-primary pt-10 border-t-2 border-primary/20"><span className="text-primary">Test your knowledge</span> on this chapter!</h3>
        <div className="flex text-center">
          <Quiz
              questions={QuestionsRisks}
          /> 
        </div>

        <div className="flex flex-col">
          {/* The previous and next buttons */}
          <PreviousAndNextButton
            previousUrl={components_chapters[5].href}
            nextUrl={components_chapters[7].href}
          />
        </div>
      </div>
    </div>
  );
}
