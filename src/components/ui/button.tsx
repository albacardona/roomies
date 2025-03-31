import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import clsx from 'clsx';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold font-inter first-letter:capitalize ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-30 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 dark:border-none antialiased',
  {
    variants: {
      variant: {
        default: 'bg-bg-secondary text-fg-primary hover:bg-bg-secondary-hover',
        secondary: 'bg-primary text-fg-primary hover:bg-primary-hover',
        accent: 'bg-accent text-fg-primary hover:bg-accent-hover',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-6 px-3 text-xs',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={clsx('w-auto', buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={props.disabled || isLoading || props.disabled}
        onClick={props.onClick}
      >
        {props.children}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
