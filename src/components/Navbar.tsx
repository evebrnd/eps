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
import { components_about, components_chapters, components_teaching } from "@/app/utils/constants"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center p-2 px-4 md:px-8 justify-evenly bg-primary/10">

      {/* RELINK/Home icon */}
      <div className="flex flex-row basis-2/12 md:basis-1/4">
        <Link href="/">
          <h1 className="px-2 py-1 text-3xl italic font-bold border text-foreground font-roboto rounded-xl bg-primary/5">
            RELINK
          </h1>
        </Link>
      </div>

      {/* Start Learning Button */}
      <div className="flex flex-row justify-end md:order-last md:justify-end basis-9/12 md:basis-1/4">
        <Button asChild size="rounded" className="items-center px-3 py-1 text-lg font-extrabold whitespace-pre h-fit bg-primary/80">
          <Link href={components_chapters[0].href}>
            <GraduationCap className="w-8 h-8 mr-2" />
            Start <p className="hidden md:block">learning</p>
          </Link>
        </Button>
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-row justify-end basis-1/12 md:basis-1/2 md:justify-center">

        {/* Bigger screens, above md it is not hidden. */}
        <nav className="items-center hidden text-foreground/80 md:px-4 md:flex md:flex-row md:gap-12 lg:gap-20">
          <NavigationMenu>
            <NavigationMenuList>

              {/* Chapters Button */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xl font-bold bg-transparent">Chapters</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components_chapters.map((component, index) => (
                      <ListItem
                        key={`chapter_${index}`}
                        title={component.title}
                        href={`/eps${component.href}`}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Teaching Material Button */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xl font-bold bg-transparent">Teaching Material</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components_teaching.map((component, index) => (
                      <ListItem
                        key={`chapter_${index}`}
                        title={component.title}
                        href={`/eps${component.href}`}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About Us Button */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xl font-bold bg-transparent">About us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components_about.map((component, index) => (
                      <ListItem
                        key={`about_${index}`}
                        title={component.title}
                        href={`/eps${component.href}`}
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
                <Link
                  key={`mobile_chapter_${index}`}
                  href={component.href}
                  className="leading-7 transition-colors text-foreground/60 hover:text-foreground"
                >
                  {component.title}
                </Link>
              ))}
            </nav>
            <nav className="grid pt-4 font-medium divide-y md:hidden">
              <p className="text-2xl font-bold text-foreground">About</p>
              {components_about.map((component, index) => (
                <Link
                  key={`mobile_about_${index}`}
                  href={component.href}
                  className="leading-7 transition-colors text-foreground/60 hover:text-foreground"
                >
                  {component.title}
                </Link>
              ))}
            </nav>
            <nav className="grid pt-4 font-medium divide-y md:hidden">
              <p className="text-2xl font-bold text-foreground">Teaching Material</p>
              {components_teaching.map((component, index) => (
                <Link
                  key={`mobile_about_${index}`}
                  href={component.href}
                  className="leading-7 transition-colors text-foreground/60 hover:text-foreground"
                >
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
