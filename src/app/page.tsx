'use client'
import { Button } from "@/components/ui/button";
import Card from "@/components/Card"
import HomePage from "../../public/HomePage.png"
import Image from "next/image"
import Link from "next/link"
import { GraduationCap } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const components_chapters: { title: string; href: string; description: string }[] = [
  {
    title: "Chapter one",
    href: "/eps/chapters/one",
    description:
      "This page is about the first chapter.",
  },
  {
    title: "Chapter two",
    href: "/eps/chapters/two",
    description:
      "This page is about the second chapter.",
  },
  {
    title: "Chapter three",
    href: "/eps/chapters/three",
    description:
      "This page is about the third chapter.",
  },
  {
    title: "Resources",
    href: "/eps/chapters/resources",
    description:
      "To go further on resources for privacy in smart homes.",
  }
]


export default function Page() {
  return (
    <section>
      <div className="w-full bg-primary/10 md:grid lg:grid-cols-8 md:px-12">
        <div className="flex flex-col justify-center col-span-3 px-4 py-6 md:py:12">
          <p className="pt-3 text-3xl italic md:pt-12 sm:text-justify">
            Education of
          </p>
          <p className="pt-6 text-5xl font-extrabold">
            Smart Home Devices
          </p>
          <div className="md:pr-6">
            <p className="mt-10 text-xl leading-7">
              Transparency information about smart home devices is <strong>NOT</strong> accessible to the public.
            </p>
            <p className="mt-6 text-xl leading-7">
              To create more awareness and create an easily understandable way of explaining the RELINK project created a course for you.
            </p>
            <div className="flex flex-row justify-center lg:justify-normal">
              <Button size="rounded" className="text-lg mt-14 sm:text-2xl bg-primary/80">
                <GraduationCap className="w-8 h-8 mr-4" />
                Start learning
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden col-span-5 lg:block">
          <Image
            src={HomePage}
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
      <div className="flex flex-col w-full px-12 pt-12 md:px-24">
        <Carousel className="">
          <CarouselContent className="-ml-1">
            {components_chapters.map((component, index) => (
              <CarouselItem key={index} className="flex flex-row justify-center pl-1 md:basis-1/2 lg:basis-1/4">
                <div className="p-1 text-center">
                  <Card
                    title={component.title}
                    caption={component.description}
                    href={component.href}
                    image={Image}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}


{/* <div className="flex flex-col w-full text-center bg-primary-foreground">
        <p className="pt-12 text-2xl italic sm:text-5xl">
          Education of
        </p>
        <p className="pt-3 text-4xl font-extrabold sm:text-7xl">
          Smart Home Devices
        </p>
      </div> */}

{/* <p className="mt-4 text-lg leading-7 sm:text-2xl">
            Transparency information about smart home devices is <strong>NOT</strong> accessible to the public.
          </p>
          <p className="mt-4 text-lg leading-7 sm:text-2xl">
            To create more <strong>awareness</strong> and create an easily understandable document the RELINK project is determined to <strong>gather</strong> information, <strong>process</strong> the information and <strong>create</strong> a clear and easily accessible <strong>documentation</strong> format.
          </p> */}


{/* <div className="px-4 bg-primary-foreground">
      <div className="pt-16 pb-8">
        <p className="text-4xl italic sm:text-6xl">
          Education of
        </p>
        <p className="text-6xl font-extrabold sm:text-7xl">
          Smart Home <br/>
          Devices
        </p>
      </div>
      <p className="mt-6 text-xl leading-6 sm:text-3xl">
        The <strong>RELINK project</strong> is a research and documentation project against the unapproachable <strong>transparency</strong> in the <strong>smart home devices</strong> industry.
      </p>
      <p className="mt-6 text-xl leading-6 sm:text-3xl">
        Transparency information about smart home devices is <strong>NOT</strong> accessible to the public. 
      </p>
      <p className="mt-6 text-xl leading-6 sm:text-3xl">
        To create more <strong>awareness</strong> and create an easily understandable document the RELINK project is determined to <strong>gather</strong> information, <strong>process</strong> the information and <strong>create</strong> a clear and easily accessible <strong>documentation</strong> format. 
      </p>
      <div className="py-6"></div>
      <div className="flex p-6">
        <Button size="lg" className="justify-center flex-grow text-lg sm:text-2xl">
          <GraduationCap className="w-8 h-8 mr-4 sm:w-10 sm:h-10" />
          Start learning
        </Button>
      </div>
    </div> */}