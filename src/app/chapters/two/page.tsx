"use client"

import Icon from "@mdi/react";
import Image from "next/image"
import Card from "@/components/Card";
import { mdiLightbulbOnOutline } from '@mdi/js';
import Sidebar from "@/components/SideBar";
import Quiz from "@/components/Quiz";
import { components_chapters } from "@/app/utils/constants";
import PreviousAndNextButton from "@/components/PreviousAndNextButton";
import AiDrivenSHD from "/public/generalPublicOpinion/aiDrivenShdDiagram.svg"
import ItKnowledge from "/public/generalPublicOpinion/itKnowledgeDiagram.svg"
import SHDOwners from "/public/generalPublicOpinion/shdOwnersDiagram.svg"
import QuestionsOpinion from "../../utils/questionsOpinion.json";

export default function Page() {
  const chapters = [
    { title: 'Introduction', id: 'Introduction' },
    { title: "Articles", id: 'Chapter_1.0' },
    {
      title: "The EPS project survey", id: 'Chapter_2.0', subChapters: [
        { title: 'Question 1', id: 'Chapter_2.1' },
        { title: 'Question 2', id: 'Chapter_2.2' },
        { title: 'Question 3', id: 'Chapter_2.3' },
        { title: 'Question 4', id: 'Chapter_2.4' },
        { title: 'Question 5', id: 'Chapter_2.5' },
        { title: 'Question 6', id: 'Chapter_2.6' }
      ]
    },
    { title: 'Summary', id: 'Chapter_3.0' },
    { title: 'Quiz', id: 'quiz' }

  ];

  return (
    <div className="flex flex-wrap">
      {/* The sidebar of the page */}
      <Sidebar chapters={chapters} />

      {/* The main content of the page */}
      <div className="flex flex-col justify-center py-2 mx-auto w-5/6 md:w-3/6">
        <Icon path={mdiLightbulbOnOutline} size="4em" className="mx-auto mt-7" />
        <h1 id='Introduction' className="flex justify-center text-center mt-5 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Opinion of the general public on SHD and studies
        </h1>

        <p className="leading-7 mt-10 text-pretty">
          Understanding the concept of smart home devices is crucial when researching public opinion on these devices.
          <br /><br />
          Perceptions of these devices can greatly vary based on factors such as convenience, efficiency, security, safety, privacy risks, cost, and integration issues. Individual opinions can also diverge from those of the general public.
          <br /><br />
          Numerous studies, surveys, and articles have been conducted and written about data transparency, privacy, and the risks associated with smart home devices. Here are a few:
        </p>

        <div className="flex flex-col text-pretty py-3 border-t-2 border-primary/20 mt-10">
          <h2 id="Chapter_1.0" className="flex justify-normal mt-2 border-b pb-2 text-3xl font-semibold tracking-tight">
            1.0<a className="mx-2 border-x-2 border-primary text-3xl"></a>Articles
          </h2>
          <p className="leading-7 mt-3 md:mt-6">
            Diving into the realm of smart home devices, we encounter a fascinating blend of technology, privacy, and user behavior. Let's take a journey through some intriguing studies and articles that shed light on this.
            <br /><br />
            First, we come across "User Perceptions of Smart Home IoT Privacy." Here, researchers engage in candid conversations with smart homeowners, unearthing their reasons for embracing IoT devices, their thoughts on privacy risks, and actions they take to protect their privacy. It's clear that these tech-savvy homeowners value the convenience these devices offer. But when it comes to sharing data, their decision is heavily influenced by their trust in device manufacturers and the perceived usefulness of the devices.
            <br /><br />
            Next, we have a study "I Want it Anyway: Consumer Perceptions of Smart Home Devices." This study reveals a curious trend - potential users tend to overlook or downplay possible risks and instead focus on the enticing benefits these devices promise. This highlights a gap in consumer awareness regarding the privacy implications of smart home devices, indicating a need for clearer communication about these risks.
            <br /><br />
            Looking more into the topic of public sentiment towards privacy & security issues regarding smart home devices, "Consumer Attitudes Towards Privacy and Security in Home Assistants" presents an analysis of how the public feels about these issues when it comes to smart home assistants like Amazon's Echo or Google's Home. The study identifies some common worries: data collection, the breadth of information captured, odd device behavior, and breaches of personal privacy.
            <br /><br />
            Moving on, we find "Privacy Norms for Smart Home Personal Assistants," which reports on an online survey conducted to gauge how users feel about security and privacy when it comes to data from their smart home devices. They provide valuable insights into privacy norms in the smart personal assistant ecosystem, the results can serve as a guidline for more privacy-conscious smart personal assistants.
            <br /><br />
            Lastly, we explore "Trust in the Institution and Privacy Management of Internet of Things Devices: A Comparative Study of Dutch and Norwegian Households." This unique study peeks into homes in Norway and the Netherlands to see how trust in national institutions and government regulations shapes people's views on privacy and IoT devices. Within these households, we see a pattern. Typically, one person, often a man, is the tech enthusiast who makes decisions about IoT adoption and privacy. Meanwhile, the other person, usually a woman, is more concerned about how these devices fit into their home. It's a dance of risk and trust, with one person shouldering the concerns and the other placing trust in their partner.
            <br /><br />
            Interestingly, trust levels in the device manufacturers, their respective governments, and policies vary among individuals. The introduction of the General Data Protection Regulation (GDPR), a European law, reportedly boosts trust in the device-making companies' compliance with privacy regulations, but not necessarily in the companies themselves. (Paupini et al. 2022.)
            <br /><br />
            These studies paint a picture of the complex dynamics of trust, privacy, and convenience in the world of smart home devices. They highlight the importance of transparency, robust privacy safeguards, and user education in this ever-evolving landscape. So, as we navigate this intricate world, these insights can serve as our compass, guiding us towards a more secure and privacy-conscious future.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mx-auto mt-5">
            <Card
              title="I Want It Anyway"
              caption="Consumer Perceptions of Smart Home Devices"
              href="https://www.tandfonline.com/doi/full/10.1080/08874417.2018.1528486"
            />
            <Card
              title="User Perceptions of Smart Home IoT Privacy"
              caption="A study on smart homeowners"
              href="https://dl.acm.org/doi/10.1145/3274469"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mx-auto mt-5">
            <Card
              title="Consumer Attitudes Towards Privacy and Security in Home Assistants"
              caption="A study on online reviews"
              href="https://dl.acm.org/doi/10.1145/3170427.3188448"
            />
            <Card
              title="Privacy Norms for Smart Home Personal Assistants"
              caption="A study on privacy and security"
              href="https://dl.acm.org/doi/10.1145/3411764.3445122"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mx-auto mt-5">
            <Card
              title="Trust in the Institution and Privacy Management of Internet of Things Devices"
              caption="A comparative case study of Dutch and Norwegian households"
              href="https://www.sciencedirect.com/science/article/pii/S0160791X22001671?via%3Dihub"
            />
          </div>
        </div>

        <div className="flex flex-col text-pretty py-3 border-t-2 border-primary/20 mt-6">
          <h2 id="Chapter_2.0" className="flex justify-normal mt-2 border-b pb-2 text-3xl font-semibold tracking-tight">
            2.0<a className="mx-2 border-x-2 border-primary text-3xl"></a>The EPS project survey
          </h2>
          <p className="leading-7 mt-3">
            In our quest to understand people's knowledge of smart home devices, we, the EPS project group, conducted a survey with around 70 respondents, a mix of students and older individuals. The survey, consisting of 20 questions, offered some intriguing insights.
          </p>
          <h3 id="Chapter_2.1" className="mt-8 text-2xl font-bold tracking-tight">How would you rate your knowledge of smart home devices?</h3>
          <Image src={ItKnowledge} alt="it knowledge diagram" className="mx-auto my-5" width="700" />

          <h3 id="Chapter_2.2" className="mt-8 text-2xl font-bold tracking-tight">Do you own a smart home device?</h3>
          <Image src={SHDOwners} alt="shd owners diagram" className="mx-auto my-5" width="700" />
          <br /><br />
          <p className="leading-7">Those who owned a device mentioned examples such as Google Home, heating systems, lights, speakers, and smart TVs.  </p>

          <h3 id="Chapter_2.4" className="mt-8 text-2xl font-bold tracking-tight">When thinking of smart home devices, which one comes to mind first?</h3>
          <p className="leading-7">When we asked respondents which smart home device first comes to mind, Alexa (31%) and Google Home (21%) topped the list, followed by lights, smart TVs, fridges, camera doorbells, and heating systems. This showed us a varied level of familiarity and experience with smart home devices among our respondents.  </p>

          <h3 id="Chapter_2.5" className="mt-8 text-2xl font-bold tracking-tight">Do you know if there is AI in any smart home device you use? Specify which device(s)</h3>
          <Image src={AiDrivenSHD} alt="ai driven shd diagram" className="mx-auto my-5" width="700" />
          <p className="leading-7">A majority (53%) were unsure, while 17% answered yes, and 30% said no. Those who answered yes listed devices like Google Home, Alexa, solar systems, speakers, and heating systems. From this, we inferred that not everyone is fully aware of the role of AI in their smart home devices.  </p>

          <h3 id="Chapter_2.5" className="mt-8 text-2xl font-bold tracking-tight">If you were to buy a smart home device, would you rather put your trust in a big company (Google, Amazon, etc.) or in a small company?</h3>
          <p className="leading-7">When considering purchasing a smart home device, most respondents indicated they would trust a small company over a big one like Google or Amazon.</p>

          <h3 id="Chapter_2.6" className="mt-8 text-2xl font-bold tracking-tight">
            Do you have anything you want to mention or tell us about?
          </h3>
          <p className="leading-7">Finally, we gave respondents the opportunity to share any additional thoughts. While most didn't add anything, there were answers such as:</p>
          <ul className="text-left my-4 ml-6 list-disc [&>li]:mt-2">
            <li>“I have no idea what a smart device means”</li>
            <li>“Everything is being processed locally is one of the most important parts of a smart home for me. No external dependencies.”</li>
            <li>“Not knowing about something is very scary. No movement is what happens”</li>
          </ul>
          <p>Thus, it can be said based on these answers that someone has already had experience with smart home devices but some not at all.</p>

          <h3 id="Chapter_3.0" className="mt-8 text-2xl font-bold tracking-tight">Summary</h3>
          <p className="leading-7">
            In conclusion, both the survey and the articles indicate that many people already have some level of experience with smart home devices. According to our survey, respondents generally rated their knowledge of smart home devices as average or higher.
            <br /><br />
            This familiarity with smart home devices allowed respondents to readily identify and name various devices. The articles further underscored that people's opinions about smart home devices can vary widely. Factors influencing these opinions include the device manufacturers, the companies behind the devices, data collection practices, privacy and security risks, online reviews, brand reputation, as well as the efficiency and user-friendliness of the devices.
            <br /><br />
            So, while some people are already navigating the world of smart home devices with ease, others are still exploring this territory. As we continue to delve into this field, our goal is to enhance awareness and understanding, ensuring that everyone can confidently and safely integrate these devices into their lives.
          </p>

          <h3 className="text-pretty mt-3 mb-3 text-2xl font-semibold hover:underline hover:decoration-wavy hover:decoration-primary pt-10 border-t-2 border-primary/20"><span className="text-primary">Test your knowledge</span> on this chapter!</h3>
          <div className="flex text-center">
            <Quiz questions={QuestionsOpinion} />
          </div>
        </div>

        <PreviousAndNextButton
          previousUrl={components_chapters[1].href}
          nextUrl={components_chapters[3].href}
        />

      </div>
    </div>
  );
}
