import Link from "next/link"

function ButtonWithArrow({ url, buttonText }: { url: string, buttonText: string }) {
    <Link href={url} className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium  bg-white border border-gray-900 hover:border-primary rounded-lg hover:text-primary">{buttonText}<svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
    </svg></Link>
}