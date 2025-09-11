import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Base button styles shared across all variants
const buttonBaseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-offset-2";

// Button variants configuration
const buttonVariants = cva(buttonBaseStyles, {
    variants: {
        variant: {
            // Primary - Highest emphasis, filled style
            primary: [
                "bg-primary-500 text-gray-white shadow-sm",
                "hover:bg-primary-400",
                "focus-visible:ring-2 focus-visible:ring-primary-300/60",
                "active:bg-primary-600",
                "disabled:bg-primary-300 disabled:text-primary-50",
                "data-[selected=true]:bg-primary-700 data-[selected=true]:text-gray-white"
            ].join(" "),

            // Secondary - Medium emphasis, outlined style
            secondary: [
                "border border-primary-500 bg-transparent text-primary-500 shadow-xs",
                "hover:border-primary-400 hover:text-primary-400",
                "focus-visible:ring-2 focus-visible:ring-primary-300/60",
                "active:bg-primary-50/30 active:border-primary-600 active:text-primary-600",
                "disabled:border-primary-300 disabled:text-primary-50",
                "data-[selected=true]:border-primary-700 data-[selected=true]:text-primary-700 data-[selected=true]:bg-primary-50/40"
            ].join(" "),

            // Tertiary - Low emphasis, ghost style
            tertiary: [
                "bg-transparent text-primary-500",
                "hover:bg-primary-100 hover:text-primary-600",
                "focus-visible:ring-2 focus-visible:ring-primary-300/40",
                "active:bg-primary-100/50 active:text-primary-700",
                "disabled:text-primary-200",
                "data-[selected=true]:bg-primary-50/50 data-[selected=true]:text-primary-700"
            ].join(" "),

            // Link - Text only, with underline
            link: [
                "text-primary-500 bg-transparent p-0 h-auto shadow-none",
                "hover:text-primary-600 hover:underline",
                "focus-visible:ring-1 focus-visible:ring-primary-300/60",
                "active:text-primary-700",
                "disabled:text-primary-200 disabled:no-underline",
                "data-[selected=true]:font-medium data-[selected=true]:text-primary-700"
            ].join(" "),

            // Semantic variations
            success: [
                "bg-success-500 text-gray-white shadow-sm",
                "hover:bg-success-400",
                "focus-visible:ring-2 focus-visible:ring-success-300/60",
                "active:bg-success-600",
                "disabled:bg-success-200 disabled:text-success-50/80"
            ].join(" "),

            warning: [
                "bg-warning-500 text-gray-white shadow-sm",
                "hover:bg-warning-400",
                "focus-visible:ring-2 focus-visible:ring-warning-300/60",
                "active:bg-warning-600",
                "disabled:bg-warning-200 disabled:text-warning-50/80"
            ].join(" "),

            danger: [
                "bg-error-500 text-gray-white shadow-sm",
                "hover:bg-error-400",
                "focus-visible:ring-2 focus-visible:ring-error-300/60",
                "active:bg-error-600",
                "disabled:bg-error-200 disabled:text-error-50/80"
            ].join(" "),
        },

        size: {
            xs: "h-7 px-2 text-xs rounded-md gap-1 text-2xs",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 text-xs",
            md: "h-9 px-4 py-2 has-[>svg]:px-3 text-sm",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4 text-base",
            xl: "h-12 px-8 py-3 rounded-md gap-2.5 text-lg",
            "icon": "size-9 p-2",
            "icon-sm": "size-8 p-1.5",
            "icon-lg": "size-10 p-2.5",
        },

        shape: {
            default: "rounded-md",
            pill: "rounded-full",
            square: "rounded-none",
        },

        fullWidth: {
            true: "w-full",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
        shape: "default",
        fullWidth: false,
    },
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
    loadingText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    isSelected?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            shape,
            fullWidth,
            asChild = false,
            isLoading = false,
            loadingText,
            leftIcon,
            rightIcon,
            isSelected = false,
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : "button";
        const isDisabled = disabled || isLoading;

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, shape, fullWidth, className }))}
                ref={ref}
                disabled={isDisabled}
                aria-busy={isLoading}
                data-selected={isSelected}
                data-slot="button"
                {...props}
            >
                {isLoading ? (
                    <>
                        <Loader2 className="size-4 animate-spin" />
                        {loadingText || children}
                    </>
                ) : (
                    <>
                        {leftIcon}
                        {children}
                        {rightIcon}
                    </>
                )}
            </Comp>
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };
