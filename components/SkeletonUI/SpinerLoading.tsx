import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const SpinerLoading = () => {
    return (
        <div className="h-[80vh] flex items-center justify-center">
            <AiOutlineLoading3Quarters className="animate-spin text-2xl text-(--color-accent)" />
        </div>
    );
};
