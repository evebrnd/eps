'use client'

import Icon from "@mdi/react";
import { mdiHumanMaleBoardPoll } from "@mdi/js";
import Sidebar from "@/components/SideBar";
import PreviousAndNextButton from "@/components/PreviousAndNextButton";
import { components_chapters } from "@/utils/constants";


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
    { title: 'Games', id: 'games', subChapters: [
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
        <p className="leading-7 mt-6 text-justify">
          We know that the course material is the most important part of the course.
          <br />
          It should be easy to understand and should be well organized. That way it is easy to implement for you, the organizer.
          <br />
          This page contains the course material for the course. It includes the flow of working, homework exercises, powerpoint, and games.
        </p>

        {/* Flow of working */}
        <div className="flex flex-col text-justify py-3 mt-4">
          <h2 id="flowOfWorking" className="flex justify-normal border-b pb-2 text-3xl font-semibold tracking-tight ">
            Flow of Working
          </h2>

          {/* For the flow of working we designed a step by step plan to give homework exercises, give the lesson and play games. */}
          {/* 1. First homework exercise: Search 3 devices at home and note them down*/}
          {/* 2. Lesson part one: Teacher will explain a bit abou the topic using the powerpoint. You have around 10 minutes to do this.*/}
          {/* 3. Lesson part two: Teacher will let the students go through the chapters on the website and do little quizes using the powerpoint in between. They have around 40 minutes to do this.*/}
          {/* 4. Lesson part three: The teacher will create groups of four and use the two games and split them between the students. They have around 30 minutes to do this. */}
          {/* 5. Lesson part four: The teacher will give the last homework exercise and reflect on the lesson. You have around 10 minutes for this. */}
          {/* 6. Last homework exercise: Using the first written down devices and the risk analasys page on the website the student will determine the risks about the devices and create a small report about it. The teacher can create a own version of this. */}

          <p className="leading-7 mt-2 text-justify">
            The flow of working is a step by step plan to give homework exercises, give the lesson and play games.
          </p>
          <div className="">
            <h2 id="homeworkExerciseOne" className="flex justify-normal border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
              1. Homework exercise one
            </h2>
            <p className="leading-7 mt-2 text-justify">
              The first step is to give the students a homework exercise. This exercise is designed to prepare the students for the lesson.
              <br />
              The student will search for three devices inside his/hers house and write down the name of the device and the function of the device.
              <br />
              The student will take this list to the lesson.
            </p>

            <h2 id="lessonPartOne" className="flex justify-normal border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
              2. Lesson part one
            </h2>
            <p className="leading-7 mt-2 text-justify">
              The teacher will explain a bit about the topic using the powerpoint. The teacher has around 10 minutes to do this.
            </p>

            <h2 id="lessonPartTwo" className="flex justify-normal border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
              3. Lesson part two
            </h2>
            <p className="leading-7 mt-2 text-justify">
              The teacher will let the students go through the chapters on the website and do little quizzes using the powerpoint in between. The students have around 40 minutes to do this.
            </p>

            <h2 id="lessonPartThree" className="flex justify-normal border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
              4. Lesson part three
            </h2>
            <p className="leading-7 mt-2 text-justify">
              The teacher will create groups of four and use the two games and split them between the students. The students have around 30 minutes to do this.
            </p>

            <h2 id="lessonPartFour" className="flex justify-normal border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
              5. Lesson part four
            </h2>
            <p className="leading-7 mt-2 text-justify">
              The teacher will give the last homework exercise and reflect on the lesson. The students have around 10 minutes for this.
            </p>

            <h2 id="lastHomeworkExercise" className="flex justify-normal border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
              6. Last homework exercise
            </h2>
            <p className="leading-7 mt-2 text-justify">
              The last homework exercise is to determine the risks of the devices the student wrote down in the first homework exercise.
              <br />
              The student will use the risk analysis page on the website to determine the risks of the devices and create a small report about it.
              <br />
              The teacher can create his/her own version of this homework exercise.
            </p>
          </div>
        </div>

        {/* Homework exersise */}
        <div className="flex flex-col text-justify py-3 mt-4">
          <h2 id="homework" className="flex justify-normal border-b pb-2 text-3xl font-semibold tracking-tight ">
            Homework Exercise
          </h2>
          {/* Here should two homework exercises be shown (Before and After). For every execise a quick explaination. */}
          <div className="">
            <h2 id="firstHomeworkExercise" className="flex justify-normal border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
              1. Homework exercise one
            </h2>
            <p className="leading-7 mt-2 text-justify">
              The first homework exercise is to search for three devices inside your house and write down the name of the device and the function of the device.
              <br />
              You will take this list to the lesson.
            </p>

            <h2 id="lastHomeworkExercise" className="flex justify-normal border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
              2. Last homework exercise
            </h2>
            <p className="leading-7 mt-2 text-justify">
              The last homework exercise is to determine the risks of the devices you wrote down in the first homework exercise.
              <br />
              You will use the risk analysis page on the website to determine the risks of the devices and create a small report about it.
              <br />
              The teacher can create his/her own version of this homework exercise.
            </p>
          </div>
        </div>

        {/* Powerpoint */}
        <div className="flex flex-col text-justify py-3 mt-4">
          <h2 id="powerpoint" className="flex justify-normal border-b pb-2 text-3xl font-semibold tracking-tight ">
            Powerpoint
          </h2>
          {/* A link to the mentimeter and/or powerpoint should be shown here with a quick explaination */}
          <p className="leading-7 mt-2 text-justify">
            The powerpoint is used to explain the topic to the students. It is also used to give little quizzes in between the chapters.
          </p>
          <div className="flex justify-center mt-4">
            <a href="/pdf/powerpoint.pdf" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Download Powerpoint
            </a>
            <a href="https://www.mentimeter.com" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
              Go to Mentimeter
            </a>
          </div>
        </div>

        {/* Games */}
        <div className="flex flex-col text-justify py-3 mt-4">
          <h2 id="games" className="flex justify-normal border-b pb-2 text-3xl font-semibold tracking-tight ">
            Games
          </h2>
          {/* Here should two games be shown. For every game a quick explaination and after that the possibility to download a PDF. */}
          <div className="">
            <h2 id="gameOne" className="flex justify-normal border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
              1. Game one
            </h2>
            <p className="leading-7 mt-2 text-justify">
              Explain the first game here.
            </p>
            <div className="flex justify-center mt-4">
              <a href="/pdf/game_one.pdf" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Download Game One
              </a>
            </div>

            <h2 id="gameTwo" className="flex justify-normal border-b pb-2 text-2xl font-semibold tracking-tight mt-6">
              2. Game two
            </h2>
            <p className="leading-7 mt-2 text-justify">
              Explain the second game here.
            </p>
            <div className="flex justify-center mt-4">
              <a href="/pdf/game_two.pdf" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Download Game Two
              </a>
            </div>
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