import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "visible-focus inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white shadow-nk-card hover:bg-primary-dark hover:-translate-y-0.5",
        secondary:
          "bg-transparent text-dark border border-dark/15 hover:border-dark/40 hover:-translate-y-0.5",
        glass:
          "bg-white/10 text-white border border-white/30 backdrop-blur-md hover:bg-white/20 hover:-translate-y-0.5",
        ghost: "bg-transparent text-dark hover:bg-dark/5",
        outlineLight:
          "bg-transparent text-white border border-white/60 hover:bg-white hover:text-dark",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5 text-[13px]",
        lg: "h-14 px-9 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
