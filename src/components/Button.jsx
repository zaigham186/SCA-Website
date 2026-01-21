import React from 'react';

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button' }) => {
    const baseClasses = 'font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-block text-center';

    const variants = {
        primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg',
        secondary: 'bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600',
        accent: 'bg-accent-600 hover:bg-accent-700 text-white shadow-md hover:shadow-lg',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClasses} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
