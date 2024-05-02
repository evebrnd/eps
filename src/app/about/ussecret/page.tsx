"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import TeamMemberCard from "@/components/TeamMemberCard";
import Icon from '@mdi/react';
import TeamMemberIcon from "/public/teamMember.png"
import { mdiAccountGroup } from '@mdi/js';
import PreviousAndNextButton from "@/components/PreviousAndNextButton";

export default function Page() {
  return (
    <div className="flex flex-col justify-center py-2 mx-4 md:mx-12">
      <Icon path={mdiAccountGroup} size="4em" className="mx-auto mt-7" />
      <h1 className="flex justify-center text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Our Derp Team
      </h1>

      <div className="flex flex-col mx-auto w-5/6 md:w-3/6 py-3 border-y-2 border-primary/20 mt-10">
        <h3 className="mt-8 text-2xl font-semibold tracking-tight">
          Who are we? Why are we still here? Just to suffer?
        </h3>
        <p className="leading-7 my-3 md:my-6">
          We are a team of 5 students from Oslo Metropolitan University, we do not study, we are just here to have fun.
          Our team consist of weird people that don't know what they are doing.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mx-auto">
          <TeamMemberCard
            title="Bald Guy (Daan)"
            caption="Chief Executive Officer aka Chief Balding Officer aka boss/bald guy"
            image={TeamMemberIcon}
          />
          <TeamMemberCard
            title="Girlboss (Janette)"
            caption="Time management aka Chief Girlboss Officer aka girlboss"
            image={TeamMemberIcon}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 mx-auto mt-3">
          <TeamMemberCard
            title="Web Wizard (Eve)"
            caption="Technical lead aka Headmaster Hogwarts school of development wizardry aka web wizard"
            image={TeamMemberIcon}
          />
          <TeamMemberCard
            title="Linux Guy (Jasper)"
            caption="Workshop planner aka Chief Linux Gatekeeping Officer aka Linux guy"
            image={TeamMemberIcon}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 mx-auto my-3">
          <TeamMemberCard
            title="Clown (Melle)"
            caption="Security & risk supervisor aka Chief Clowning Officer aka PhD in tomfoolery"
            image={TeamMemberIcon}
          />
        </div>
      </div>

      <PreviousAndNextButton
        previousUrl="https://evebrnd.github.io/eps/coursematerial"
        nextUrl="https://evebrnd.github.io/eps/about/relink"
      />
    </div>
  );
}

