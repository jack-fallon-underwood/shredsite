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
    <>
      {href ? (
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
      ) : (
        <button // Render a plain button if no href is provided
          type="button"
          disabled={disabled}
          className={`btn-${variant} border-1 border-white`} // Remove hover effect if not a link
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