
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-7 py-4 rounded-[5px] font-medium text-base transition-all duration-300 hover:translate-y-[-2px]",
          variant === "primary" &&
            "bg-[rgba(92,46,46,1)] text-white shadow-[0px_4px_14px_rgba(92,46,46,0.25)] hover:shadow-[0px_6px_18px_rgba(92,46,46,0.35)]",
          variant === "secondary" && "text-[rgba(92,46,46,1)] hover:bg-[rgba(254,185,185,0.2)]",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
