import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export default function PreviousAndNextButton({ previousUrl, nextUrl}: { previousUrl: string, nextUrl:string }) {
    return (
        <Pagination className="mt-5 text-white">
            <PaginationContent>
                <PaginationItem className="bg-primary rounded-full">
                    <PaginationPrevious href={previousUrl} />
                </PaginationItem>
                <PaginationItem className="bg-primary rounded-full">
                    <PaginationNext href={nextUrl} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
