'use client'

import React from 'react';
// import PDFViewer from '@/components/pdfviewer';
import importedAnnotatedPDF from "@/public/courseMaterial/Annotated_Bibliography.pdf";


export default function Page() {


    return (
        <div className='flex flex-col'>
            {/* The main content of the page */}

            <h1>HEADER</h1>
            
            {/* <div className="flex flex-col justify-center py-2 mx-auto w-5/6 md:w-3/6"> */}
                {/* <PDFViewer
                file='http://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf'
            /> */}

                <head>
                    <title>PDF Example by Object Tag</title>
                </head>
                <div className='flex flex-col h-auto'>
                    <h1>PDF Example by Object Tag</h1>
                    <object data="/Annotated_Bibliography.pdf" type="application/pdf" height="500px" width="100%">
                        <p>Unable to display PDF file. <a href={importedAnnotatedPDF}>Download</a> instead.</p>
                    </object>
                </div>
            {/* </div> */}
        </div>
    );
}
