// components/Przepisy/RecipeSkeleton.tsx
export const RecipeSkeleton = () => {
    return (
        <div className="animate-pulse bg-white p-4 rounded-lg shadow-lg flex flex-col space-y-4">
            <div className="w-full h-48 bg-gray-200 rounded-md" />
            <div className="h-5 bg-gray-300 rounded w-3/4 mx-auto" />
            <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto" />
            <div className="h-6 bg-gray-300 rounded w-1/3 mx-auto" />
            <div className="h-4 bg-gray-300 rounded w-2/3 mx-auto" />
            <div className="h-10 bg-gray-300 rounded w-full mt-4" />
        </div>
    );
};
