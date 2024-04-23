'use client'

import React from 'react';
import { useEffect, useRef } from 'react';

export default function Page() {
    // const refs = [useRef(null), useRef(null), useRef(null)];

    // useEffect(() => {
    //     function checkVisibility(ref) {
    //         if (ref.current) {
    //             const isVisible = elementInViewport(ref.current);
    //             console.log('Element is visible:', isVisible);
    //         }
    //     }

    //     function checkAllVisibility() {
    //         refs.forEach(checkVisibility);
    //     }

    //     window.addEventListener('scroll', checkAllVisibility);
    //     return () => window.removeEventListener('scroll', checkAllVisibility);
    // }, []);

    return (
        <div className='flex flex-col'>
            {/* //Creating 3 elements that are spaced out
            <div className='min-h-screen'></div>            
            <div ref={refs[0]} className='text-red-800 border-2'>Ref0</div>
            <div className='min-h-screen'></div>
            <div ref={refs[1]} className='text-red-800 border-2'>Ref0</div>
            <div className='min-h-screen'></div>
            <div ref={refs[2]} className='text-red-800 border-2'>Ref0</div> */}
        </div>
    );
}

function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
    );
}


// // This is for the internal navigation of the page.
// const titleAmount = 7;
// // const { refs, isInViewport } = useViewPortObserver(titleAmount);

// // eslint-ignore-next-line react-hooks/exhaustive-deps
// const refs = Array.from({ length: titleAmount }, () => useRef(null));
// // eslint-ignore-next-line react-hooks/exhaustive-deps
// const isInViewport = refs.map(ref => useIsInViewport(ref));


// const chapters = [
//     { title: 'Introduction', id: 'Introduction', isInViewport: ""},
//     {
//       title: 'Sensors', id: 'Chapter_2.0', isInViewport: isInViewport[1], subChapters: [
//         { title: 'Google Nest', id: 'Chapter_2.1', isInViewport: isInViewport[2] },
//         { title: 'Ring', id: 'Chapter_2.2', isInViewport: isInViewport[3] },
//       ]
//     },
//     {
//       title: 'Data Processing', id: 'Chapter_3.0', isInViewport: isInViewport[4], subChapters: [
//         { title: 'Google Nest', id: 'Chapter_3.1', isInViewport: isInViewport[5] },
//         { title: 'Ring', id: 'Chapter_3.2', isInViewport: isInViewport[6] },
//       ]
//     },
//   ];

// ref={refs[0]}