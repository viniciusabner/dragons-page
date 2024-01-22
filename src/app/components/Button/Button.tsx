"use client";

import React from "react";
import "./button.css";

interface ButtonProps {
  primary?: boolean;
  color?: string;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onclick?: () => void;
}

export const Button = ({
  primary = false,
  size = "large",
  backgroundColor,
  color,
  label,
  onclick,
  ...props
}: ButtonProps) => {
  const mode = primary ? "button--primary" : "button--secondary";
  return (
    <button
      type="button"
      className={["button", `button--${size}`, mode].join(" ")}
      onClick={onclick}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
          color: ${color};
        }
      `}</style>
    </button>
  );
};
