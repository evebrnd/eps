"use client";
import { MailFilled } from '@ant-design/icons'

export default function Footer() {
    return (
        <footer className="flex justify-center items-center bg-gray-900 text-white bottom-0 w-full h-9">
            <a href="/" className="mr-4">
                © 2024 EPS
            </a>
            <a
                className="mr-4"
                href={'mailto:evber2263@oslomet.no'}
            >
                <MailFilled className="h-6 w-6"/>
            </a>
            <a href="/legalNotice">
                Legal notice
            </a>
        </footer>
    )
}
