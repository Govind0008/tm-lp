import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-7 py-4 rounded-[5px] font-medium text-base transition-colors",
          variant === "primary" &&
            "bg-[rgba(92,46,46,1)] text-white shadow-[0px_4px_14px_rgba(92,46,46,0.25)]",
          variant === "secondary" && "text-[rgba(92,46,46,1)]",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
