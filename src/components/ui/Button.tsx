import Link from "next/link";
import { ButtonProps } from "@/types";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-between gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        secondary: "bg-secondary text-white hover:bg-secondary/90",
        outline: "border border-primary text-primary hover:bg-primary/10",
        ghost: "text-primary hover:bg-primary/10",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 px-3 py-1",
        lg: "h-12 px-8 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonPropsExtended
  extends ButtonProps,
    VariantProps<typeof buttonVariants> {
  href?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  children,
  className,
  variant,
  size,
  href,
  type = "button",
  onClick,
  ...props
}: ButtonPropsExtended) => {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
