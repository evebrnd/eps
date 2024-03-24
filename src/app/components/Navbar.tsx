"use client";

import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Logo from "../../../public/vercel.svg";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-10 w-full bg-gray-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">EPS Project</span>
            <Image
              className="h-8 w-auto fill-white"
              src={Logo}
              alt="EPS logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href={`/`} target="_blank" className="text-sm font-semibold leading-6 text-white">
            Start course
          </a>
          <a href="/who" className="text-sm font-semibold leading-6 text-white">
            EPS project
          </a>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-auto" />
        <Dialog.Panel className="bottom-auto right-0 top-0 z-11 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 absolute">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">EPS project</span>
              <Image
                className="h-8 w-auto fill-white"
                src={Logo}
                alt="EPS logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href={`/`}
                  target="_blank"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start course{" "}
                  <ChevronRightIcon
                    className="inline-block h-4 w-4"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={`/who`}
                  target="_blank"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  EPS Project{" "}
                  <ChevronRightIcon
                    className="inline-block h-4 w-4"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
