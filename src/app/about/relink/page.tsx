"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from '@mdi/react';
import RelinkLogo from "/public/relinkLogo.png"
import { mdiShieldHomeOutline } from '@mdi/js';
import PreviousAndNextButton from "@/components/PreviousAndNextButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Page() {
  return (
    <div className="flex flex-col justify-center py-2 mx-4 md:mx-12">
      <Icon path={mdiShieldHomeOutline} size="4em" className="mx-auto mt-7" />
      <h1 className="flex justify-center text-center mt-6 text-4xl font-extrabold tracking-tight lg:text-5xl">
        The Relink Project
      </h1>

      <div className="flex flex-col text-justify  mx-auto w-5/6 md:w-3/6 py-3 border-y-2 border-primary/20 mt-10">
        <h3 className="mt-8 text-2xl font-semibold tracking-tight">
          What is the Relink project about?
        </h3>
        <p className="leading-7 mt-3 md:mt-6">
          The Relink project is a multidisciplinary and inter universities project that aims to study current and future safety risks and issues with Internet of Things (IoT) in homes. The project kicked off in 2019 and is still ongoing. The research study has been organized in 7 Work Packages.
        </p>
        <blockquote className="text-pretty my-6 border-l-2 pl-2 italic font-semibold text-xl">
          “RELINK aims to construct knowledge, raise awareness and reduce digital vulnerabilities in connected homes through research. ”
        </blockquote>

        <Image
          src={RelinkLogo}
          alt="Relink project logo"
          width="400"
          className="mx-auto my-6"
        />

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>More about the Work Packages</AccordionTrigger>
              <AccordionContent>
                <div className="mx-4">
                  <h3 className="font-extrabold">WP 1: Project Administration and Management</h3>
                  <h4 className="font-bold mt-3">Lead: SIFO/OsloMet</h4>
                  <p className="mt-3">Work Description: This WP will ensure that knowledge is generated, managed, and disseminated in a coordinated manner and that all research and innovation activities, financial, ethical, and legal aspects are properly managed. This includes NFR requirements for the respect of ethics guidelines (NSD), that communication and reporting are fulfilled, that a risk management strategy and contingency plan are put in place and that easy access to research results and transfer of knowledge to consortium members, research participants, policymakers, and the general public is provided as outlined in WP 7. The project will also be administered following Responsible Research and Innovation (RRI) principles (Stilgoe et al. 2013) to ensure that all the researchers and stakeholders work together during the research process to align the process and outcomes to the needs, values, and expectations of society.</p>

                  <h3 className="font-extrabold mt-5">WP 2: Mapping and conceptual framework</h3>
                  <h4 className="font-bold mt-3">Lead: SIFO/OsloMet, with all partners</h4>
                  <p className="mt-3">Work Description: The activities in this WP will be geared towards negotiating, understanding, and operationalizing security/privacy risk-related concepts within the context of connected homes. This work package will be carried out in close collaboration with WP3. The WP will produce a mapping of the ecosystem of technologies of the home, including an inventory of household devices, networked infrastructure, key societal services used, and an overview of technologies available in the market. This will include analysis of marketing material, brochures, guides, websites, catalogues as well as policy and regulatory frameworks on IT security, consumer and privacy regulations. The mapping and conceptualization work will be carried out collaboratively through desk research, in workshops involving key stakeholders/experts and advisory board members. This WP also includes research group visits to collaborative partner institutions (NTNU, UCL &  Rathenau) and collaborative projects (GHOST & PETRAS). Finally, the WP will produce a descriptive report and visualization of the household technology vulnerability ecosystem that shows relations between devices, network infrastructures, services, actors, markets, and policies/regulations.</p>

                  <h3 className="font-extrabold mt-5">WP 3: Household IT Security Practices</h3>
                  <h4 className="font-bold mt-3">Lead: SIFO/OsloMet with SIFO PhD, DCS/OsloMet & UoH</h4>
                  <p className="mt3">Work Description: This WP will define and implement methods and procedures for an ethnographic study that shall produce descriptive and structured accounts of household’s everyday uses of IoT, engagement with data (Pink et al., 2017), practical privacy and data management (as opposed to formalized expectations of privacy regulations), risk and security experiences, and attitudes and strategies related to these issues. This will be conducted at three separate but integrated stages; an exploration stage, a toolbox intervention stage, and an evaluation stage. The WP will, through data analysis, a workshop with experts, the SIFO Ph.D., and researcher mobility to partner universities, identify key vulnerability issues. This will be used as a baseline for WP4 prototype tool development and further inquiry (cf. WP5, workshops for proposal to EU FP calls, co-editing of articles, and a 1st journal special issue).</p>

                  <h3 className="font-extrabold mt-5">WP 4: Building Tools for Everyday Risk Management And Public Awareness</h3>
                  <h4 className="font-bold mt-3">Lead: DCS/OsloMet, with DCS PhD, SIFO/OsloMet & UoA</h4>
                  <p className="mt-3">Work Description: This WP will ensure the development of a usable set of tools and materials for everyday risk management applying a user-centered design approach involving collaboration between researchers, household members, designers, and security experts. Drawing on the results of WP3 and two workshops with experts, this WP will take an RRI approach to identify user needs, and develop prototypes of tools that will be trialed in households and evaluated and redesigned in iterations with the aim to develop a community of practice among households – and raise awareness and build competence – around technology security and privacy management. The co-design process will involve representatives from households participating in the project, project partners, designers, IT experts, communication experts, and researchers. The tools will be trialed and evaluated through design interventions in households, dialogue with the public on social media, and workshops with stakeholders and experts. The tools will be presented on the project website and on social media platforms such as YouTube and Facebook. This user-centered tool-building will be the baseline for the DCS Ph.D. and researcher mobility to partner universities and for further inquiry (cf. WP5, workshops for proposal to EU FP calls, co-editing of articles and 2nd journal special issue).</p>

                  <h3 className="font-extrabold mt-5">WP 5: Foresight and Future Scenarios</h3>
                  <h4 className="font-bold mt-3">Lead: NBT, with OsloMet & Rathenau</h4>
                  <p className="mt-3">Work description: drawing on results from WP2, 3, and 4 the WP will develop scenarios of secure and privacy aware household technology futures, using narratives and fictional elements that encourage citizen and cross-sector reflection on matters concerning the future of the connected household. Citizen panels will discuss scenarios reflecting dilemmas concerning identified trends and possible technological, social, and commercial developments (Burgess, 2014). The scenarios will be developed in co-design workshops involving 20-30 stakeholders (citizens, technology security experts, etc.). The WP will ultimately produce visualizations of future vulnerability scenarios and value-based questions and dilemmas regarding digital vulnerability futures. These visual artifacts will be integrated into the set of tools developed in WP4 to facilitate the everyday management of risk and security, enable users to cultivate new strategies, tactics, and literacies, and provoke critical public reflection on privacy, security and technology futures in response to privacy and security challenges related to everyday use of digital technologies. The scenario-building activities will also serve as an occasion to engage with policymakers, present dilemmas with policy options for tradeoffs, and to guide innovation towards a more secure and privacy-aware technology future. Outputs will also be in the form of reports and policy briefs. NBT will collaborate closely with Rathenau in this WP.</p>

                  <h3 className="font-extrabold mt-5">WP 6: Digital Vulnerability Population Survey</h3>
                  <h4 className="font-bold mt-3">Lead: SIFO/OsloMet, with NBT</h4>
                  <p className="mt-3">Work Description: This WP will identify key indicators, based on extrapolation from empirical findings in the project and conduct a national survey of tech inventory, key digital service uses, patterns and projections of uses, attitudes, and strategies related to digital security and privacy risks in consumer households. The output will be in the form of a report and will feed into WP7. Data will be accessible for future longitudinal studies by others.</p>


                  <h3 className="font-extrabold mt-5">WP 7: Communication, Dissemination and Future Research Impact Agenda</h3>
                  <h4 className="font-bold mt-3">Lead: SIFO, with all partners</h4>
                  <p className="mt-3">Work Description: This WP will disseminate the process and results of the project to the international academic community as well as to public stakeholders; including households, schools, civil society (citizens and advocates), technology manufacturers, and policymakers (also; SIFO as OECD-delegate will promote results at biannual meetings, DCS as UN/ITU member will promote findings in UN sessions). The WP will ensure academic contributions by the project in national/international discussions about technology security and the values designed into future technology. The WP will disseminate key concepts, challenges, scenarios, and tools through a variety of channels and media formats in a way that engages and sensitizes different stakeholders. This will entail bridging the perspectives of consumers and citizens with advocacy, scholarly, entrepreneurial, and policy innovation, and developing and maintaining a feedback loop between citizens, stakeholders and researchers throughout the project period. As part of the project’s future research agenda, this WP will involve workshops (also including advisory board) for planning two special issues in journals and an application for research funding to EU FP calls on digital security/secure societies (and calls under the next FP). The project application will serve as an opportunity to activate the extensive national and international network built through the consortium.</p>

                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <h3 className="mt-8 text-2xl font-semibold tracking-tight">Sources</h3>
          <Link href="https://uni.oslomet.no/relink/" className="mt-4 italic text-gray-500" rel="noopener noreferrer" target="_blank">https://uni.oslomet.no/relink/</Link>
      </div>

      <PreviousAndNextButton
        previousUrl="https://evebrnd.github.io/eps/about/us"
        nextUrl="https://evebrnd.github.io/eps/about/eps"
      />
    </div>
  );
}
