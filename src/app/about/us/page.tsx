"use client"

import React from "react";
import Icon from '@mdi/react';
import { mdiAccountGroup } from '@mdi/js';
import TeamMemberIcon from "/public/teamMember.png"
import TeamMemberCard from "@/components/TeamMemberCard";
import PreviousAndNextButton from "@/components/PreviousAndNextButton";
import { components_teaching, components_about } from "@/app/utils/constants";


export default function Page() {
  return (
    <div className="flex flex-col justify-center py-2 mx-4 md:mx-12">
      <Icon path={mdiAccountGroup} size="4em" className="mx-auto mt-7" />
      <h1 className="flex justify-center text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Our Team
      </h1>

      <div className="flex flex-col mx-auto w-5/6 md:w-3/6 py-3 border-y-2 border-primary/20 mt-10">
        <h3 className="mt-8 text-2xl font-semibold tracking-tight">
          Who are we?
        </h3>
        <p className="leading-7 my-3 md:my-6">
          We are a team of 5 students from Oslo Metropolitan University, studying the course EPS (European Project Semester). Our team consists of students from different backgrounds and nationalities, we come from 4 different countries and 4 different areas of engineering:
        </p>

        <div className="flex flex-col md:flex-row gap-4 mx-auto">
          <TeamMemberCard
            title="Daan"
            caption="Electronics engineering student from the Saxion University of applied sciences in Enschede, Netherlands."
            image={TeamMemberIcon}
          />
          <TeamMemberCard
            title="Janette"
            caption="Industrial engineering and management (IEM) student from Metropolia University of Applied Sciences in Helsinki, Finland"
            image={TeamMemberIcon}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mx-auto mt-3">
          <TeamMemberCard
            title="Eve"
            caption="Software engineering student from the Technological University of Troyes, France."
            image={TeamMemberIcon}
          />
          <TeamMemberCard
            title="Jasper"
            caption="Cyber security student from the AP University of applied sciences and arts of Antwerp, Belgium."
            image={TeamMemberIcon}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 mx-auto my-3">
          <TeamMemberCard
            title="Melle"
            caption="Cyber security student from the Amsterdam University of Applied Sciences, Netherlands"
            image={TeamMemberIcon}
          />
        </div>
      </div>

      <PreviousAndNextButton
        previousUrl={components_teaching[1].href}
        nextUrl={components_about[1].href}
      />
    </div>
  );
}
