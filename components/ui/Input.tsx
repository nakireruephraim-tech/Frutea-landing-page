import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-dark mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-3 border-2 border-dark/20 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all ${
            error ? 'border-secondary' : ''
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-secondary">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

