import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function MainBtn({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                "relative tracking-wide bg-(--color-accent) hover:bg-[#a99d5c] rounded-lg duration-300 cursor-pointer transition-all px-4 py-2 text-xs font-medium text-white",
                className
            )}
        >
            {children}
        </button>
    );
}
