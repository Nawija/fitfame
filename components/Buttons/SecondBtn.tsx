import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function SecondBtn({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                "relative tracking-wide bg-[#81773e] rounded-lg duration-300 cursor-pointer transition-all px-4 py-2 text-sm font-medium text-white",
                className
            )}
        >
            {children}
        </button>
    );
}
