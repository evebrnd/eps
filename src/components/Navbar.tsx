"use client";
import React from "react";
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  Menu,
  GraduationCap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const components_about: { title: string; href: string; description: string }[] = [
  {
    title: "Our team",
    href: "/eps/about/us",
    description:
      "A page about us.",
  },
  {
    title: "RELINK",
    href: "/eps/about/relink",
    description:
      "A page about the RELINK project.",
  },
  {
    title: "EPS",
    href: "/eps/about/eps",
    description:
      "A page about the EPS project.",
  }
]

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

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center p-2 px-4 md:px-8 justify-evenly bg-primary/10">
      <div className="flex flex-row basis-2/12 md:basis-1/4">
        <Link href="/">
          {/* <img src="https://uni.oslomet.no/relink/wp-content/uploads/sites/193/2019/04/ReLink-logo-v.2.png" alt="Logo" className="h-12" /> */}
          <h1 className="px-2 py-1 text-3xl italic font-bold border text-foreground font-roboto rounded-xl bg-primary/5">
            RELINK
          </h1>
        </Link>
      </div>

      <div className="flex flex-row justify-end md:order-last md:justify-end basis-9/12 md:basis-1/4">
        <Button size="rounded" className="items-center px-3 py-1 text-lg font-extrabold whitespace-pre h-fit bg-primary/80">
          <GraduationCap className="w-8 h-8 mr-2" />
          Start <a className="hidden md:block">learning</a>
        </Button>
      </div>

      <div className="flex flex-row justify-end basis-1/12 md:basis-1/2 md:justify-center">
        {/* Bigger screens, above md it is not hidden. */}
        <nav className="items-center hidden text-foreground/80 md:px-4 md:flex md:flex-row md:gap-12 lg:gap-20">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="">
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-transparent font-bold text-xl`}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xl font-bold bg-transparent">Chapters</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components_chapters.map((component, index) => (
                      <ListItem
                        key={`chapter_${index}`}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xl font-bold bg-transparent">About us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components_about.map((component, index) => (
                      <ListItem
                        key={`about_${index}`}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        {/*Mobile screens*/}
        <Sheet>
          {/* Create the mobile navigation menu icon, above md hidden.*/}
          <SheetTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="bg-transparent shrink-0 md:hidden hover:bg-secondary/20"
            >
              <Menu className="size-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          {/* Show what the button will pop up.*/}
          <SheetContent side="right" className="bg-primary-foreground">
            <nav className="grid font-medium divide-y md:hidden">
              {/* leading-6 mt-6 text-xl sm:text-3xl */}
              <p className="text-2xl font-bold text-foreground">Chapters</p>
              {components_chapters.map((component, index) => (
                <Link key={`mobile_chapter_${index}`} href={component.href} className="leading-7 transition-colors text-foreground/60 hover:text-foreground">
                  {component.title}
                </Link>
              ))}
            </nav>
            <nav className="grid pt-4 font-medium divide-y md:hidden">
              <p className="text-2xl font-bold text-foreground">About</p>
              {components_about.map((component, index) => (
                <Link key={`mobile_about_${index}`} href={component.href} className="leading-7 transition-colors text-foreground/60 hover:text-foreground">
                  {component.title}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-base font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
