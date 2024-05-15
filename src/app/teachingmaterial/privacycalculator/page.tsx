"use client"

import Link from "next/link";
import Icon from '@mdi/react';
import { mdiCalculatorVariantOutline } from '@mdi/js';
import Sidebar from "@/components/SideBar";
import PreviousAndNextButton from "@/components/PreviousAndNextButton";
import { components_chapters, components_teaching } from "@/app/utils/constants";
import QuestionsPrivacyRisk from "../../utils/privacyRiskCalculator.json";
import PrivacyRiskCalculator from "@/components/PrivacyRiskCalculator";

export default function Page() {
  const chapters = [
    { title: 'Introduction', id: 'Introduction' },
    { title: 'Start the rating', id: 'start' },
    { title: 'Sources', id: 'sources' }
  ];

  return (
    <div className="flex flex-wrap">
      {/* The sidebar of the page */}
      <Sidebar chapters={chapters} />

      {/* The main content of the page */}
      <div className="flex flex-col justify-center py-2 mx-auto w-5/6 md:w-3/6">
        <Icon path={mdiCalculatorVariantOutline} size="4em" className="mx-auto mt-7" />
        <h1 id="Introduction" className="flex justify-center text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Privacy risk calculator
        </h1>

                
        <div className="flex flex-col py-3 mt-4">
          <h3 id="start" className="mt-8 text-3xl font-semibold tracking-tight">Start the rating!</h3>
          <PrivacyRiskCalculator questions={QuestionsPrivacyRisk} />

          <h3 id="sources" className="mt-8 text-2xl font-semibold tracking-tight">Sources</h3>
          <Link href="https://uni.oslomet.no/relink/wp-content/uploads/sites/193/2021/12/EPS-Group-M_2019_RELINK-report.pdf" className="mt-4 italic text-gray-500" rel="noopener noreferrer" target="_blank">https://uni.oslomet.no/relink/wp-content/uploads/sites/193/2021/12/EPS-Group-M_2019_RELINK-report.pdf</Link>
        </div>

        <PreviousAndNextButton
          previousUrl={components_chapters[7].href}
          nextUrl={components_teaching[1].href}
        />

        </div>
    </div>
  );
}
