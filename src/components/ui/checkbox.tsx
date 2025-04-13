import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as React from 'react';
import { Check } from '@untitled-ui/icons-react';
import clsx from 'clsx';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={clsx(
      'peer size-4 shrink-0 rounded-sm border border-bd-brand ring-offset-bg-primary active:text-bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-bg-brand data-[state=checked]:text-bg-primary',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={clsx('flex items-center justify-center text-current')}>
      <Check className="size-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
