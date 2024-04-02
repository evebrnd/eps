'use client'
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ReactTyped } from 'react-typed';

export default function Page() {
  return (
    <div className="">
      <div className="py-10 px-20">
        <h2 className='text-center scroll-m-10 text-2xl font-semibold tracking-tight'>
          Smart Home Devices are:
        </h2>
        <div className="py-6" />
        <h1 className='text-center scroll-m-20 font-extrabold tracking-tight text-6xl sm:text-9xl'>
          <ReactTyped
            strings={["Smart", "Handy", "Convenient", "Dangerous", "Insecure", "Hackable"]}
            typeSpeed={100}
            loop
            backSpeed={50}
            // cursorChar="."
            showCursor={true}
          />
        </h1>
      </div>

      <div className="flex max-h-screen min-h-screen flex-col items-center justify-center text-white py-2 bg-[url('../../public/aiMobile.jpg')] md:bg-[url('../../public/aiComputer.jpg')] bg-cover bg-center">
        <p className="text-center text-6xl font-bold bg-clip-text">Smart home device</p>
        <p className="m-2 text-center text-xl font-bold bg-clip-text">
          Lorem ipsum dolor
        </p>
        <p className="m-10 text-center text-lg">
          EPS Spring 2024
        </p>
      </div>
    </div>
  );
}
