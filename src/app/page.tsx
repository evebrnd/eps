'use client'
import { Button } from "@/components/ui/button";
import Card from "@/components/Card"
import { components_chapters } from "@/utils/constants";
import HomePage from "../../public/HomePage.png"
import Image from "next/image"
import Link from "next/link"
import { GraduationCap } from "lucide-react";

import Icon from "@mdi/react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Page() {
  return (
    <section>
      <div className="w-full h-vh bg-primary/10 md:grid lg:grid-cols-8 md:px-12">
        <div className="flex flex-col justify-center lg:col-span-3 px-4 py-6 md:py:12">
          <p className="pt-3 text-3xl italic md:pt-12 sm:text-justify">
            Education on
          </p>
          <p className="pt-6 text-5xl font-extrabold">
            Smart Home Devices
          </p>
          <div className="md:pr-6">
            <p className="mt-10 text-xl leading-7">
              Transparency information about smart home devices is <strong>NOT</strong> accessible to the public.
            </p>
            <p className="mt-6 text-xl leading-7">
              To create more awareness and have an easier way of explaining this, the RELINK project developed a course for you.
            </p>
            <div className="flex flex-row justify-center lg:justify-normal">
              <Button asChild size="rounded" className="text-lg mt-14 sm:text-2xl bg-primary/80">
                <Link href={components_chapters[0].href} replace>
                  <GraduationCap className="w-8 h-8 mr-4" />
                  Start learning
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:block">
          <Image
            src={HomePage}
            alt="Image"
            width="1920"
            height="1080"
            className="h-[90vh] w-full object-scale-down"
          />
        </div>
      </div>
      <div className="flex flex-col w-full px-12 pt-12 md:px-24">
        <Carousel className="">
          <CarouselContent className="-ml-1">
            {components_chapters.map((component, index) => (
              <CarouselItem key={index} className="flex flex-row pl-1 md:basis-1/2 lg:basis-1/4">

                <div className="p-1 text-center">
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg active:shadow-lg">
                    <Link href={component.href}>
                      <Icon path={component.icon} size="4em" className="mx-auto mt-7" />
                    </Link>
                    <div className="p-5">
                      <Link href={component.href}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:underline hover:decoration-wavy hover:decoration-primary">{component.title}</h5>
                      </Link>
                      <p className="mb-3 font-normal text-gray-700">{component.description}</p>
                      <Link href={component.href} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-destructive rounded-lg hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </Link>
                    </div>
                  </div>
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