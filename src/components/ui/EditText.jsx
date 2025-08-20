'use client';
import React, { useState } from 'react';

const EditText = ({ 
  placeholder = '',
  value = '',
  onChange,
  type = 'text',
  disabled = false,
  className = '',
  fullWidth = true,
  error = false,
  errorMessage = '',
  label = '',
  required = false,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const handleChange = (e) => {
    if (onChange) {
      onChange(e?.target?.value);
    }
  };

  return (
    <div className={`${fullWidth ? 'w-full' : 'w-auto'} ${className}`}>
      {label && (
        <label className="block text-sm font-manrope font-medium text-global-6 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        disabled={disabled}
        className={`
          w-full
          px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 lg:px-[24px] lg:py-[16px]
          text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px]
          font-manrope 
          font-normal 
          leading-[20px] sm:leading-[21px] md:leading-[22px] lg:leading-[22px]
          text-left 
          text-global-7
          bg-edittext-1
          border border-global-3
          rounded sm:rounded-md md:rounded-lg
          transition-all 
          duration-200 
          ease-in-out
          focus:outline-none 
          focus:ring-2 
          focus:ring-global-4 
          focus:border-global-4
          hover:border-global-7
          placeholder:text-global-7
          ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
          ${disabled ? 'opacity-50 cursor-not-allowed bg-opacity-50' : ''}
          ${focused ? 'ring-2 ring-global-4 border-global-4' : ''}
        `?.trim()?.replace(/\s+/g, ' ')}
        {...props}
      />
      {error && errorMessage && (
        <p className="mt-1 text-sm text-red-500 font-manrope">{errorMessage}</p>
      )}
    </div>
  );
};

export default EditText;