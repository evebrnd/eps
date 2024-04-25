import Image from "next/image";
import { StaticImageData } from "next/image";

function TeamMemberCard({ title, caption, image }: { title: string, caption: string, image?: StaticImageData }) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-lg active:shadow-lg">
            {image && <Image className="rounded-t-lg mx-auto mt-3" src={image} alt="" width="100"/>}
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                <p className="mb-3 font-normal text-pretty text-gray-700">{caption}</p>
            </div>
        </div>
    );
}

export default TeamMemberCard;
