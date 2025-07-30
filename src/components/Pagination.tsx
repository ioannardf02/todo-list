import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationDemo({
  pages,
  totalItems,
}: {
  pages: string;
  totalItems: number;
}) {
  const totalPage = Math.ceil(totalItems / 10);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {parseInt(pages) > 1 && (
            <PaginationPrevious href={`/mylist/?page=${parseInt(pages) - 1}`} />
          )}
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={`/mylist/?page=${pages}`} isActive>
            {pages}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          {parseInt(pages) < totalPage && (
            <PaginationNext href={`/mylist/?page=${parseInt(pages) + 1}`} />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
