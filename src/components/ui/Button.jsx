'use client';
import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  type = 'button',
  className = '',
  fullWidth = false,
  loading = false,
  ...props
}) => {
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-300 border border-gray-200',
    secondary: 'bg-gray-50 text-black hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-300 border border-gray-200',
    outline: 'border border-gray-300 text-black bg-transparent hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300',
    ghost: 'text-black bg-transparent hover:bg-gray-50 active:bg-gray-100 focus:ring-gray-300'
  };

  const sizes = {
    xs: 'px-3 py-2 text-xs h-10',
    sm: 'px-4 py-2.5 text-sm h-11',
    md: 'px-5 py-3 text-base h-12',
    lg: 'px-6 py-4 text-lg h-14'
  };

  const responsiveRadius = 'rounded-lg';
  const responsiveFocus = 'focus:ring-2 focus:ring-offset-2';

  const LoadingSpinner = () => (
    <svg 
      className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <button
      type={type}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      className={`
        ${responsiveRadius}
        transition-all 
        duration-200 
        ease-in-out
        focus:outline-none 
        ${responsiveFocus}
        focus:ring-opacity-50
        ${variants?.[variant]} 
        ${sizes?.[size]} 
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105 active:scale-95'} 
        ${loading ? 'relative' : ''}
        font-manrope
        font-medium
        inline-flex
        items-center
        justify-center
        touch-manipulation
        shadow-sm
        ${className}
      `?.trim()?.replace(/\s+/g, ' ')}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <LoadingSpinner />}
      <span className={loading ? 'opacity-75' : ''}>{children}</span>
    </button>
  );
};

export default Button;