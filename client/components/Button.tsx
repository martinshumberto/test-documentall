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
    primary:
      'bg-primary text-white hover:bg-primary-600 transition-all shadow-xl shadow-primary/10',
    outline:
      'hover:bg-gray-100 border-2 border-gray-400 text-gray-500 transition-all',
  };
  const sizes = {
    md: 'py-3 px-6',
    lg: 'py-5 px-8',
  };
  return (
    <button
      {...props}
      className={`flex items-center space-x-2 rounded-xl font-bold relative overflow-hidden
        ${themes[theme]} ${sizes[size]}`}
    >
      {icon && iconSide === 'left' && <div>{icon}</div>}
      <div className="cursor-pointer">{props.children}</div>
      {icon && iconSide === 'right' && <div>{icon}</div>}
    </button>
  );
}

export default Button;
