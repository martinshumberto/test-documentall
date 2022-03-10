import React, { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<React.ReactNode> {
  theme?: 'primary' | 'outline';
  size?: 'md' | 'lg';
  icon?: React.ReactNode;
  iconSide?: 'left' | 'right';
}

function Button({
  theme = 'primary',
  size = 'md',
  icon,
  iconSide = 'right',
  ...props
}: IProps) {
  const themes = {
    primary: 'bg-primary text-white hover:bg-primary-600 transition-all',
    outline: 'border-2 border-gray',
  };
  const sizes = {
    md: 'py-3 px-6',
    lg: 'py-5 px-8',
  };
  return (
    <button
      {...props}
      className={`flex items-center space-x-2 rounded-xl font-bold mt-10 shadow-xl shadow-primary-100/100 
        ${themes[theme]} ${sizes[size]}`}
    >
      <span>{props.children}</span>
      {icon && <div>{icon}</div>}
    </button>
  );
}

export default Button;
