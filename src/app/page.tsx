'use client'
import { Button } from "@/components/ui/button";
import HomePage from  "../../public/HomePage.png"
import Image from "next/image"
import Link from "next/link"
// import { Link, GraduationCap } from "lucide-react";

export default function Page() {
  return (
    <section>
      <div className="flex flex-col text-center w-full bg-primary-foreground">
        <p className="pt-12 italic text-2xl sm:text-5xl">
          Education of
        </p>
        <p className="pt-3 font-extrabold text-4xl sm:text-7xl">
          Smart Home Devices
        </p>
      </div>
      <div className="w-full my-16 lg:grid lg:grid-cols-2 gap-4">
        <div className="border-4 flex flex-col items-center justify-center py-12 px-12">
          <p className="leading-7 mt-6 text-lg sm:text-2xl">
            The <strong>RELINK project</strong> is a research and documentation project against the unapproachable <strong>transparency</strong> in the <strong>smart home devices</strong> industry.
          </p>
          <p className="leading-7 mt-3 text-xl sm:text-2xl">
            Transparency information about smart home devices is <strong>NOT</strong> accessible to the public.
          </p>
          <p className="leading-7 mt-3 text-xl sm:text-2xl">
            To create more <strong>awareness</strong> and create an easily understandable document the RELINK project is determined to <strong>gather</strong> information, <strong>process</strong> the information and <strong>create</strong> a clear and easily accessible <strong>documentation</strong> format.
          </p>
        </div>
        <div className="border-4 hidden bg-muted lg:block">
        <Image
            src={HomePage}
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </section>
  );
}



{/* <div className="bg-primary-foreground px-4">
      <div className="pt-16 pb-8">
        <p className="text-4xl sm:text-6xl italic">
          Education of
        </p>
        <p className="font-extrabold text-6xl sm:text-7xl">
          Smart Home <br/>
          Devices
        </p>
      </div>
      <p className="leading-6 mt-6 text-xl sm:text-3xl">
        The <strong>RELINK project</strong> is a research and documentation project against the unapproachable <strong>transparency</strong> in the <strong>smart home devices</strong> industry.
      </p>
      <p className="leading-6 mt-6 text-xl sm:text-3xl">
        Transparency information about smart home devices is <strong>NOT</strong> accessible to the public. 
      </p>
      <p className="leading-6 mt-6 text-xl sm:text-3xl">
        To create more <strong>awareness</strong> and create an easily understandable document the RELINK project is determined to <strong>gather</strong> information, <strong>process</strong> the information and <strong>create</strong> a clear and easily accessible <strong>documentation</strong> format. 
      </p>
      <div className="py-6"></div>
      <div className="flex p-6">
        <Button size="lg" className="justify-center flex-grow text-lg sm:text-2xl">
          <GraduationCap className="mr-4 h-8 w-8 sm:w-10 sm:h-10" />
          Start learning
        </Button>
      </div>
    </div> */}