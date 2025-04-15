'use client';
import React, { FC } from 'react';
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string; //nav path
  disabled?: boolean;
  myStyle?: React.CSSProperties;
  variant?: "inner" | "outer"; 
  onMouseEnterDropdown?: () => void; 
  onMouseLeaveDropdown?: () => void;
}

const Button: FC<ButtonProps> = ({
  text,
  href,
  disabled = false,
  variant = "inner",
  myStyle,
  onMouseEnterDropdown,
  onMouseLeaveDropdown,
}) => {
  
  return (
    <Link href={href} passHref>
      <button
        type="button"
        disabled={disabled}
        className={`btn-${variant} border-1 border-white hover:text-black-500`}
        style={myStyle}
        onMouseEnter={onMouseEnterDropdown}
        onMouseLeave={onMouseLeaveDropdown}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;