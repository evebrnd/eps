'use client'
import { Button } from "@/components/ui/button";
import { Link, GraduationCap } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-muted px-4">
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
    </div>
  );
}