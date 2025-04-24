'use client';
import React, { FC } from 'react';
import Link from "next/link";
import type { URL } from 'url';

type NextHref = string | URL;

interface ButtonProps {
  text: string;
  href?: NextHref;
  disabled?: boolean;
  myStyle?: React.CSSProperties;
  variant?: "inner" | "outer";
  onMouseEnterDropdown?: () => void;
  onMouseLeaveDropdown?: () => void;
  fontSize?: string;
}

const Button: FC<ButtonProps> = ({
  text,
  href,
  disabled = false,
  variant = "inner",
  myStyle,
  onMouseEnterDropdown,
  onMouseLeaveDropdown,
  fontSize = "text-base",
}) => {
  const hoverClass = href ? "hover:text-black-500" : "";
  const buttonClasses = `btn-${variant} border-1 border-white ${hoverClass} ${fontSize}`;

  return (
    <>
      {href ? (
        <Link href={href} passHref>
          <button
            type="button"
            disabled={disabled}
            className={buttonClasses}
            style={myStyle}
            onMouseEnter={onMouseEnterDropdown}
            onMouseLeave={onMouseLeaveDropdown}
          >
            {text}
          </button>
        </Link>
      ) : (
        <button
          type="button"
          disabled={disabled}
          className={buttonClasses}
          style={myStyle}
          onMouseEnter={onMouseEnterDropdown}
          onMouseLeave={onMouseLeaveDropdown}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;