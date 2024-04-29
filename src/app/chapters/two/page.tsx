"use client"

import Icon from "@mdi/react";
import Card from "@/components/Card";
import { mdiLightbulbOnOutline } from '@mdi/js';
import Sidebar from "@/components/SideBar";
import { components_chapters } from "@/utils/constants";
import PreviousAndNextButton from "@/components/PreviousAndNextButton";

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
    { title: 'Summary', id: 'Chapter_3.0' }

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
          Understanding what a smart home device is plays a huge role when searching for information about what the general public is thinking about smart home devices.
          <br />
          Public opinion about these devices can vary widely depending on the viewpoint, for example, convenience, efficiency, security, safety, privacy risks, cost and integration issues. As well as individual opinions can vary from the general public’s thoughts.  <br />

          There are already many studies, surveys and articles about data transparency, privacy and risks and dangers related to smart home devices. In addition, articles about what the general public think about topics related to smart home devices. And here is few of them:
        </p>

        <div className="flex flex-col text-pretty py-3 border-y-2 border-primary/20 mt-10">
          <h3 id="Chapter_1.0" className="mt-8 text-3xl font-semibold tracking-tight">
            1.0. Articles
          </h3>
          <p className="leading-7 mt-3 md:mt-6">
            The article "User Perceptions of Smart Home IoT Privacy" explores the thoughts of smart homeowners about their privacy. They interviewed eleven people about why they bought IoT devices, what they think about privacy risks, and what they do to keep their privacy safe. The questions were about awareness and worries about privacy. The results showed that people with smart homes like how these devices make their lives easier and more convenient. Their opinions about who should see their data depend on how much they trust the companies that make the devices and how useful they find them.
            <br />
            Before buying any smart home devices, all the people interviewed said they did some research. They chose devices based on what they read in online reviews and the reputation of the brands.
            <br />
            For example, one person said, “I try to make sure it’s a reputable brand… I don’t just get the cheapest thing because those are less secure… I want something that’s more established so I kind of assume that they have more security”. People are also unsure about the privacy risks of devices that don't record sound or video. (Chetty et al. 2018.)
            <br />
            The article “I Want it Anyway: Consumer Perceptions of Smart Home Devices” looks at how the benefits and risks affect people’s decisions to use smart home devices. They collected information through an online survey. The results showed that people usually don’t pay much attention to the possible risks and focus more on the benefits they can get from using these devices. People thought that good performance and compatibility were positive things about these devices. Among the possible risks, only issues related to privacy, performance and time were seen as real risks. (Klobas et al. 2018.)
            <br />
            The paper "Consumer Attitudes Towards Privacy and Security in Home Assistants" looks at what people have said online about privacy and security after buying home assistants like Amazon's Echo or Google's Home. They found three main worries: data collection, the extent of information gathered, strange device behavior, and violations of personal privacy. They collected over 109,000 reviews from online stores like Target, Amazon, Walmart, and Best Buy. They used a list of 53 keywords to find relevant reviews. After their research, they discovered that only about 2% of the reviews mentioned one of the keywords. The device mentioned the most was the Amazon Echo Show, mentioned in 6.1% of reviews. In the end, they found that people who review these devices usually don't talk about privacy and security worries. If they do mention these issues, it's usually about the kind and amount of data that the devices collect. (Fruchter et al. 2018.)
            <br />
            The article "Privacy Norms for Smart Home Personal Assistants" talks about an online survey done by researchers. They wanted to know what users think about security and privacy when it comes to data from smart home devices. One of the findings was a chart that showed how comfortable people are with others seeing their data. For instance, most people don't mind if their partner sees their data, but they're not okay with neighbors or guests seeing it. (Abdi et al. 2021.)
            <br />
            In addition, article "Trust in the Institution and Privacy Management of Internet of Things Devices: A Comparative Study of Dutch and Norwegian Households" explores how trust in national institutions and government rules affects the way people in Norway and the Netherlands think about privacy and IoT devices in their homes.
            <br />
            Overall, people in both countries behave similarly. In a two-adult household, usually one person, often a man, is enthusiastic about IoT and makes decisions about devices and privacy. The other person, often a woman, cares more about how the devices look in their home. So, one person worries about risks for the other, and the second person trusts their partner. People's trust in the companies that make the devices, their government, and policies also varies. The GDPR, a European law, was said to increase trust in the companies that make the devices, but not in the companies themselves. (Paupini et al. 2022.)
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

          <h3 id="Chapter_2.0" className="mt-8 text-3xl font-semibold tracking-tight pt-10 border-t-2 border-primary/20">
            2.0. The EPS project survey
          </h3>
          <p className="leading-7 mt-3">
            There was also a survey to gather information about people’s current knowledge about smart home devices. This survey was conducted by the EPS project group. There are already about 70 respondents, which are a group of students and older people. There are 20 questions in the survey and here are some results.
          </p>
          <h3 id="Chapter_2.1" className="mt-8 text-2xl font-bold tracking-tight">How would you rate your knowledge of smart home devices?</h3>
          <p className="leading-7">INSERT GRAPHIC</p>

          <h3 id="Chapter_2.2" className="mt-8 text-2xl font-bold tracking-tight">Do you own a smart home device?</h3>
          <p className="leading-7">INSERT GRAPHIC</p>

          <h3 id="Chapter_2.3" className="mt-8 text-2xl font-bold tracking-tight">What smart home device(s)?</h3>
          <p className="leading-7">Respondents were also asked to name what device they own, and the answers were for example Google Home, heating, lights, speaker and smart TV.</p>

          <h3 id="Chapter_2.4" className="mt-8 text-2xl font-bold tracking-tight">When thinking of smart home devices, which one comes to mind first?</h3>
          <p className="leading-7">After this, respondents were asked “When thinking of smart home devices, which one comes to mind first?” and respondents answered, for example, Alexa (31%), Google Home (21%), lights, smart tv, fridge, camera doorbells and heating. Therefore, it can be seen that some respondents have already experience and knowledge with some smart home devices and can also identify what can be a smart home device.  </p>

          <h3 id="Chapter_2.5" className="mt-8 text-2xl font-bold tracking-tight">Do you know if there is AI in any smart home device you use? & Specify which device?</h3>
          <p className="leading-7">INSERT GRAPHIC</p>
          <p className="leading-7">Respondents who answered yes, were told to specify which device and answers were, for example, Google Home, Alexa, solar system, speaker and heating. Accordingly, to this question, some people do not know everything about smart home devices.  </p>

          <h3 id="Chapter_2.5" className="mt-8 text-2xl font-bold tracking-tight">If you were to buy a smart home device, would you rather put your trust in a big company (Google, Amazon, etc.) or in a small company?</h3>
          <p className="leading-7">In addition, respondents were asked to rate if they trust a big company or a small company when buying a smart home device and most respondents answered a small company.   </p>

          <h3 id="Chapter_2.6" className="mt-8 text-2xl font-bold tracking-tight">
            Do you have anything you want to mention or tell us about?
          </h3>
          <p className="leading-7">One of the last questions of the survey was “Do you have anything you want to mention or tell us about?” and most answered no. However, there were answers such as:
            <br />
            “I have no idea what a smart device means”,
            <br />
            “Everything is being processed locally is one of the most important parts of a smart home for me. No external dependencies.” and
            <br />
            “Not knowing about something is very scary. No movement is what happens”.
            <br />
            Thus, it can be said based on these answers that someone has already had experience with smart home devices but some not at all.  </p>

          <h3 id="Chapter_3.0" className="mt-8 text-2xl font-bold tracking-tight">Summary</h3>
          <p className="leading-7">In conclusion, based on the survey and articles, it can be seen that some people already have some experience with smart home devices. Based on the survey, respondents have already some experiences with smart home devices, and they find their knowledge of smart home devices the most as little, average and advanced knowledge.
            <br /><br />
            This also makes it easier to identify what a smart home device is because they were already able to name a few of these devices. In addition, based on articles, people’s opinion about smart home devices can vary depending on, for example, manufacturers, companies, data collection, privacy and security risks, online reviews, brand reputation, efficiency and easy-to-use devices. </p>
        </div>

        <PreviousAndNextButton
          previousUrl={components_chapters[0].href}
          nextUrl={components_chapters[2].href}
        />

      </div>
    </div>
  );
}
