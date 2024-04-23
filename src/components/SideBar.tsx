import React from 'react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Chapter {
  title: string;
  id: string;
  isInViewport?: boolean;
  subChapters?: Chapter[];
}

interface SidebarProps {
  chapters: Chapter[];
}

const Sidebar: React.FC<SidebarProps> = ({ chapters }) => {

  const renderChapters = (chapters: Chapter[], level: number = 0) => {
    return chapters.map((chapter, index) => (
      <li key={chapter.id} className=''>
        <a href={`#${chapter.id}`} className={`hover:text-foreground hover:underline ${chapter.isInViewport ? "md:text-foreground md:font-bold" : "md:text-right-foreground"}`}>
          {chapter.title}
        </a>
        {chapter.subChapters && (
          <ul className='text-xs list-decimal list-inside pl-4 pb-2'>
            {renderChapters(chapter.subChapters, level + 1)}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <>
      {/* For mobile screens */}
      <div className="flex justify-center w-screen bg-primary/5 border border-b-2 border-primary-foreground md:hidden">
        <Accordion type="single" collapsible className=''>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl font-semibold">Contents of the page:</AccordionTrigger>
            <AccordionContent>
              <ol className='list-decimal list-inside text-base'>
                {renderChapters(chapters)}
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* For large screens */}
      <div className="hidden md:flex sticky top-0 min-h-fit md:left-0 md:min-w-38 md:max-w-44 md:h-dvh md:px-4 bg-primary/10">
        <div className="justify-normal md:pt-6">
          <p className="text-2xl font-semibold">Contents:</p>
          <ol className='list-decimal list-inside text-sm pt-2'>
            {renderChapters(chapters)}
          </ol>
        </div>
      </div>
    </>
  );
};
export default Sidebar;