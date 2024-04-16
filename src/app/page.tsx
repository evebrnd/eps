'use client'
import { Button } from "@/components/ui/button";
import Card from "@/components/Card"
import { components_chapters } from "@/utils/constants";
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

export default function Page() {
  return (
    <section>
      <div className="w-full h-vh bg-primary/10 md:grid lg:grid-cols-8 md:px-12">
        <div className="flex flex-col justify-center lg:col-span-3 px-4 py-6 md:py:12">
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
              <CarouselItem key={index} className="flex flex-row justify-center pl-1 md:basis-1/2 lg:basis-1/4">
                <div className="p-1 text-center">
                  <Card
                    title={component.title}
                    caption={component.description}
                    href={component.href}
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