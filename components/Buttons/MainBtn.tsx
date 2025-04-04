import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function MainBtn({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                "relative tracking-wide bg-stone-900 hover:bg-[#a99d5c] rounded-lg border border-[#a99d5c] hover:scale-95 cursor-pointer transition-all px-4 py-2 text-sm font-medium text-white",
                className
            )}
        >
            {children}
        </button>
    );
}
