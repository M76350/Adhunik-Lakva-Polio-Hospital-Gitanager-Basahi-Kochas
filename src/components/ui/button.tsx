import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500 before:translate-x-[-100%] before:transition-transform before:duration-700 before:ease-out hover:before:translate-x-0 before:z-[-1] after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent after:translate-x-[-200%] after:transition-transform after:duration-1000 hover:after:translate-x-[200%] after:z-10 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:shadow-glow",
        destructive: "bg-destructive text-destructive-foreground before:from-destructive before:to-destructive/80 hover:shadow-lg",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground before:from-primary/20 before:to-primary-glow/20",
        secondary: "bg-secondary text-secondary-foreground before:from-secondary before:to-secondary/80 hover:shadow-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground before:from-accent before:to-accent/80",
        link: "text-primary underline-offset-4 hover:underline before:hidden",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
      <span className="relative z-10">{props.children}</span>
    </Comp>;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
