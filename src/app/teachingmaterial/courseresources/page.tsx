"use client"

import Icon from "@mdi/react";
import Sidebar from "@/components/SideBar";
import { mdiHumanMaleBoardPoll } from "@mdi/js";
import Link from "next/link"
import { components_teaching, components_about } from "@/app/utils/constants";
import PreviousAndNextButton from "@/components/PreviousAndNextButton";

export default function Page() {

  // This is for the internal navigation of the page.
  // const titleAmount = 7;
  // const { refs, isInViewport } = useViewPortObserver(titleAmount);

  const chapters = [
    { title: 'Introduction', id: 'Introduction' },
    {
      title: 'Flow of Working', id: 'flowOfWorking', subChapters: [
        { title: 'Step One', id: 'homeworkExerciseOne' },
        { title: 'Step Two', id: 'lessonPartOne' },
        { title: 'Step Three', id: 'lessonPartTwo' },
        { title: 'Step Four', id: 'lessonPartThree' },
        { title: 'Step Five', id: 'lessonPartFour' },
        { title: 'Step Six', id: 'lastHomeworkExercise' },
      ]
    },
    {
      title: 'Homework', id: 'homework', subChapters: [
        { title: 'Homework Begin', id: 'firstHomeworkExercise' },
        { title: 'Homework End', id: 'lastHomeworkExercise' }
      ]
    },
    { title: 'Powerpoint', id: 'powerpoint' },
    {
      title: 'Games', id: 'games', subChapters: [
        { title: 'Game One', id: 'gameOne' },
        { title: 'Game Two', id: 'gameTwo' }
      ]
    }
  ];

  return (
    <div className="flex flex-wrap">
      {/* The sidebar of the page */}
      <Sidebar chapters={chapters} />

      {/* The main content of the page */}
      <div className="flex flex-col justify-center py-2 mx-auto w-5/6 md:w-3/6">

        {/* Introduction */}
        <Icon path={mdiHumanMaleBoardPoll} size="4em" className="mx-auto mt-7" />
        <h1 id="Introduction" className="flex justify-center text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Course Material
        </h1>
        <p className="leading-7 mt-6">
          This page aims to give you a clear overview of how the course should be organized using the website and the games.
          <br />
          It should be easy to understand and well organized. That way it is easy to implement for you, the organizer/teacher.
          <br />
          It includes the flow of working, homework exercises, powerpoint, and games.
        </p>

        {/* Flow of working */}
        <div className="flex flex-col py-3 mt-4">
          <h2 id="flowOfWorking" className="flex justify-normal border-b pb-2 text-3xl font-semibold tracking-tight ">
            Flow of Working
          </h2>

          <p className="leading-7 mt-2">
            The flow of working is a step by step plan to give homework exercises, the lesson and play games.
          </p>
          <div className="">
            <h2 id="homeworkExerciseOne" className="flex justify-normal border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
              1. Homework exercise one
            </h2>
            <p className="leading-7 mt-2">
              The first step is to give the students a homework exercise. This exercise is designed to prepare the students for the lesson.
              <br />
              Each student will search for three devices inside his/her house and write down the name of the device and its function.
              <br />
              The student will then bring this list to the lesson.
            </p>

            <h2 id="lessonPartOne" className="flex justify-normal border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
              2. Lesson part one
            </h2>
            <p className="leading-7 mt-2">
              The teacher will begin by explaining the topic of smart home devices using the powerpoint (link at the end). This should take around 10 minutes.
            </p>

            <h2 id="lessonPartTwo" className="flex justify-normal border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
              3. Lesson part two
            </h2>
            <p className="leading-7 mt-2">
              The teacher will then let the students go through the chapters of the website. For each chapter, there is a little quiz to do, make sure the students do them. The students have around 40 minutes to do this.
            </p>

            <h2 id="lessonPartThree" className="flex justify-normal border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
              4. Lesson part three
            </h2>
            <p className="leading-7 mt-2">
              The teacher will separate the class in groups of four and give each group one set of game. The students have around 30 minutes to do this.
            </p>

            <h2 id="lessonPartFour" className="flex justify-normal border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
              5. Lesson part four
            </h2>
            <p className="leading-7 mt-2">
              To finish the lesson, the teacher will announce the last homework exercise and wrap up by reflecting on the lesson. The idea is to gather feedback from the students, see if they learned things and if they enjoyed the lesson.
            </p>

            <h2 id="lastHomeworkExercise" className="flex justify-normal border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
              6. Last homework exercise
            </h2>
            <p className="leading-7 mt-2">
              The last homework exercise is to determine the risks of the devices the student wrote down in the first homework exercise.
              <br />
              The student will use the Privacy Calculator page available on the website to determine the risks of the devices and create a small report about it.
              <br />
              The teacher can create his/her own version of this homework exercise.
            </p>
          </div>
        </div>


        {/* Powerpoint */}
        <div className="flex flex-col py-3 mt-4">
          <h2 id="powerpoint" className="flex justify-normal border-b pb-2 text-3xl font-semibold tracking-tight ">
            Introductory Powerpoint
          </h2>
          <p className="leading-7 mt-2">
            This powerpoint is used to explain the topic of smart home devices to the students. It should serve as an introduction to the lesson. It also details the rules for each game that will be played by students.
          </p>
          <div className="flex mt-4 mx-auto text-center">
            <Link href="https://github.com/evebrnd/eps/tree/main/public/courseResources" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Download Powerpoint
            </Link>
          </div>
        </div>

        {/* Games */}
        <div className="flex flex-col py-3 mt-4">
          <h2 id="games" className="flex justify-normal border-b pb-2 text-3xl font-semibold tracking-tight ">
            Games
          </h2>
          <p className="leading-7 mt-2">
            In this section you can download the source pdf that contain the cards for each game. That way you can print them out and use them in the lesson.
          </p>
          <div>
            <h2 id="gameOne" className="flex justify-normal border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
              1. Game one
            </h2>
            <p className="leading-7 mt-2">
              You are given a bunch of cards with events / scenarios. Some are real, some are made up, and it is up to you to figure that out. Rank all the cards on the chart: worrying/not worrying & true/false. When you have ranked them all, you can turn them around & learn the truth (+ source). If you know the answer to one of the cards, you may also decide to stay silent & let the others discuss it.
            </p>
            <div className="flex justify-center mt-4">
              <Link href="https://github.com/evebrnd/eps/tree/main/public/courseResources" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Download Game One
              </Link>
            </div>

            <h2 id="gameTwo" className="flex justify-normal border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
              2. Game two
            </h2>
            <p className="leading-7 mt-2">
              In this activity, we want you to look at smart home devices from two different viewpoints. Start off by discussing how the device is useful for you in your daily life (or for someone you know), what benefits does it have & would you want to live without it? Next, imagine yourself a hacker: how can you exploit the device to make someone’s life as miserable as possible? How can you deal damage to the company? Or how can you spy on someone? What are the dangers you can think of? Now reflect on how you initially thought of the device, has your opinion changed? What insights have you gained?
            </p>
            <div className="flex justify-center mt-4">
              <Link href="https://github.com/evebrnd/eps/tree/main/public/courseResources" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Download Game Two
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {/* The previous and next buttons */}
          <PreviousAndNextButton
            previousUrl={components_teaching[0].href}
            nextUrl={components_about[0].href}
          />
        </div>
      </div>
    </div>
  );
}