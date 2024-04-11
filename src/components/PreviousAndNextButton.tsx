import Link from "next/link";

function PreviousAndNextButton({ previousUrl, nextUrl }: { previousUrl: string, nextUrl: string }) {
    return (
        <div className="flex items-center justify-center pt-3">
            <div className="w-full flex items-center justify-between">
                <Link href={previousUrl} className="p-5">
                    <div className="flex items-center pt-3 text-gray-600 hover:text-primary cursor-pointer">
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
                    </div>
                </Link>
                <Link href={nextUrl} className="p-3">
                    <div className="flex items-center pt-3 text-gray-600 hover:text-primary cursor-pointer">
                        <p className="text-sm font-medium leading-none mr-3">Next</p>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default PreviousAndNextButton;
