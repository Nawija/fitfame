"use client";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) => {
    const generatePageNumbers = () => {
        const range = 2;
        const pageNumbers = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage > range) pageNumbers.push(1);
            if (currentPage > range + 1) pageNumbers.push("...");

            const start = Math.max(1, currentPage - range);
            const end = Math.min(totalPages, currentPage + range);

            for (let i = start; i <= end; i++) {
                pageNumbers.push(i);
            }

            if (currentPage < totalPages - range - 1) pageNumbers.push("...");
            if (currentPage < totalPages - range) pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };

    return (
        <div className="flex justify-center mt-12 mb-8 space-x-2">
            {generatePageNumbers().map((page, index) => (
                <button
                    key={index}
                    onClick={() => {
                        if (page !== "...") onPageChange(page as number);
                    }}
                    className={`px-4 py-2 text-sm font-semibold rounded-md cursor-pointer ${
                        page === currentPage
                            ? "bg-[#c99b37ee] text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-stone-300"
                    }`}
                    disabled={page === "..."}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};
