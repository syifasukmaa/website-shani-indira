import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  variants?: 'primary' | 'secondary';
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}
export default function Button({ children, size, fullWidth, variants = 'primary', className, ...props }: IButton) {
  return (
    <button
      className={cn(
        'border-lightBlue border-2 lg:hover:bg-lightGrey text-white rounded-md shadow-lg cursor-pointer font-semibold focus:bg-transparent active:bg-transparent',
        {
          'w-full': fullWidth === true,
          'w-auto': fullWidth === false,
          'bg-black': variants === 'secondary',
          'bg-transparent': variants === 'primary',
          'py-2 px-3 mt-4': size === 'medium',
          'flex p-2 justify-start items-center mb-2 focus:outline-none': size === 'large',
          'px-2 ': size === 'small',
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
// 7.6
