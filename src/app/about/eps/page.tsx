"use client"

import React from "react";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import PreviousAndNextButton from "@/components/PreviousAndNextButton";

export default function Page() {
  return (
    <div className="flex flex-col justify-center py-2 mx-4 md:mx-12">
      <ReactCountryFlag
        countryCode="eu"
        className="mx-auto mt-4"
        style={{
          fontSize: "4em",
        }}
        title="EU flag" />
      <h1 className="flex justify-center text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
        The European Project Semester
      </h1>

      <div className="flex flex-col text-justify  mx-auto w-5/6 md:w-3/6 py-3 border-y-2 border-primary/20 mt-10">
        <h3 className="mt-8 text-2xl font-semibold tracking-tight">
          What is the European Project Semester?
        </h3>
        <p className="leading-7 mt-3 md:mt-6">
          The European Project Semester is a programme between 19 universities from 13 european countries mainly aimed for Engineering students. It is a 30 ECTS course where students work in international and multidisciplinary teams on a project provided by a company / an organization. <br /><br />
          The project is carried out in one semester and the students are guided by a tutor from the university and a mentor from the organization.
        </p>


        <h3 className="mt-8 text-2xl font-semibold tracking-tight">
          Why is this relevant?
        </h3>
        <p className="leading-7 mt-3">
          This programme is a great opportunity for students to gain international experience, improve their language skills and develop their project management and teamwork skills.

        </p>
        <blockquote className="text-pretty my-6 border-l-2 pl-2 italic font-semibold text-xl">
          “Gain a unique international experience in one semester by developing a project at another university in an international and multidisciplinary team. ”
        </blockquote>
        <p className="leading-7 mt-3">
          Smart Home devices and more generally the IoT sector is a very complex field. It requires knowledge in many different areas such as electronics, software development, data analysis, security, privacy, etc. This explains why the EPS programme was a valid option to help with the RELINK organization.
          <br />
        </p>

        <h3 className="mt-8 text-2xl font-semibold tracking-tight">Sources</h3>
        <Link href="https://europeanprojectsemester.eu/" className="mt-4 italic text-gray-500" rel="noopener noreferrer" target="_blank">https://europeanprojectsemester.eu/</Link>
      </div>

      <PreviousAndNextButton
        previousUrl="https://evebrnd.github.io/eps/chapters/us"
        nextUrl="https://evebrnd.github.io/eps/about/relink"
      />
    </div>
  );
}
