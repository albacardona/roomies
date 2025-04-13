import * as React from 'react';
import clsx from 'clsx';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, ...props }, ref) => {
    return (
      <div className="w-full relative group">
        {startIcon && (
          <div className="absolute top-0 left-0 pl-3 h-full">
            <div className="flex h-full items-center gap-2 self-center opacity-30">
              {startIcon}
              <div className="w-[1px] h-5 bg-bd-primary" />
            </div>
          </div>
        )}
        <input
          {...props}
          type={type}
          className={clsx(
            'flex h-10 w-full text-sm text-fg-primary rounded-lg bg-bg-light border border-bd-primary pr-3 pl-3 py-2 ring-0 ring-offset-0 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-sm placeholder:text-fg-placeholder group-hover:bg-bg-secondary group-hover:border-bd-primary-hover group-hover:placeholder:text-fg-secondary group-hover:focus:ring-ring group-hover:focus:ring-2 group-hover:focus:border-bd-brand-light focus-visible:outline-none focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-bd-brand-light disabled:cursor-not-allowed disabled:opacity-50',
            startIcon && 'pl-12',
            endIcon && 'pr-12',
            props.error && 'border-bd-destructive',
            className,
          )}
          ref={ref}
        />
        {endIcon && (
          <div className="absolute top-0 right-0 py-2 pr-3 flex items-center justify-between gap-2">
            <div className="w-[1px] h-5 bg-foreground/20" />
            {endIcon}
          </div>
        )}
      </div>
    );
  },
);
