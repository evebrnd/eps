"use client";
import React from "react";
import Link from "next/link"
import {
  Menu,
  Package2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


export default function Navbar() {
  return (
    <nav className='flex items-center justify-between p-4 bg-background border border-accent-background'>
      <div className="flex items-center justify-between gap-x-2">
        <Link href="/">
          <img src="https://uni.oslomet.no/relink/wp-content/uploads/sites/193/2019/04/ReLink-logo-v.2.png" alt="Logo" className="max-h-10" />
        </Link>
        <h1 className="invisible md:visible text-3xl text-black font-bold">RELINK</h1>
      </div>
      <div className="">
        {/* Bigger screens, above md it is not hidden. */}
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Documentation
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
        </nav>
        {/*Mobile screens*/}
        <Sheet>
          {/* Create the mobile navigation menu icon, above md hidden.*/}
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          {/* Show what the button will pop up.*/}
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium md:hidden">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="#"
                className="text-foreground transition-colors hover:text-foreground"
              >
                Documentation
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
