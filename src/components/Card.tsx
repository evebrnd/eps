import Link from "next/link";
import Image from "next/image";
import { StaticImageData } from "next/image";

function Card({ title, caption, href, image }: { title: string, caption: string, href: string, image?: StaticImageData }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg active:shadow-lg">
      <Link href={href}>
        {image && <Image className="rounded-t-lg" src={image} alt="" />}
      </Link>
      <div className="p-5">
        <Link href={href}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:underline hover:decoration-wavy hover:decoration-primary">{title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">{caption}</p>
        <Link href={href} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-destructive rounded-lg hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Card;
