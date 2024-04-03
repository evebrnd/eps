import Link from "next/link";
import Icon from '@mdi/react';
import { mdiEmail, mdiGithub } from '@mdi/js';

function Footer() {
    return (
        <footer>
            <hr className="my-2 border-gray-200 mx-4"></hr>
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-5 py-2">
                        <Link href="/about" className="text-base leading-6 text-gray-500 hover:text-gray-900 hover:underline hover:underline-offset-4">
                            About
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/course" className="text-base leading-6 text-gray-500 hover:text-gray-900 hover:underline hover:underline-offset-4">
                            Course
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/team" className="text-base leading-6 text-gray-500 hover:text-gray-900 hover:underline hover:underline-offset-4">
                            Team
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/contact" className="text-base leading-6 text-gray-500 hover:text-gray-900 hover:underline hover:underline-offset-4">
                            Contact
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <Link href="/legalNotice" className="text-base leading-6 text-gray-500 hover:text-gray-900 hover:underline hover:underline-offset-4">
                            Legal notice
                        </Link>
                    </div>
                </nav>
                <div className="flex justify-center mt-8 space-x-6">
                    <Link href="https://github.com/evebrnd/eps" className="text-gray-400 hover:text-gray-500">
                        <Icon path={mdiGithub} className="h-6 w-6" />
                    </Link>
                    <Link
                        className="text-gray-400 hover:text-gray-500"
                        href={'mailto:evber2263@oslomet.no'}
                    >
                        <Icon path={mdiEmail} className="h-6 w-6" />
                    </Link>
                </div>
                <p className="mt-8 text-base leading-6 text-center text-gray-400">
                    © 2024 European Project Semester. MIT License
                </p>
            </div>
        </footer>
    );
}

export default Footer;
