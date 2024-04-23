import PreviousAndNextButton from "@/components/PreviousAndNextButton";
import { components_chapters } from "@/utils/constants";

export default function Page() {
    return (
        <div className="flex flex-col justify-center py-2 mx-auto w-5/6 md:w-3/6">
            <p className="mt-20">To be done</p>

            <PreviousAndNextButton
                previousUrl={components_chapters[4].href}
                nextUrl="/"
            />

        </div>

    )

}