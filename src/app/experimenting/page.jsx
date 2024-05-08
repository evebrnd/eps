'use client'

import React from 'react';
import PDFViewer from '@/components/pdfviewer';


export default function Page() {


    return (
        <div className='flex flex-col'>

            <PDFViewer
                file='https://www.learningcontainer.com/wp-content/uploads/2019/09/sample-pdf-file.pdf'
            />

        </div>
    );
}
