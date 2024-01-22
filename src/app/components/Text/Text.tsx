import React from "react";

interface TextProps {
  /**
   * How size should the text be?
   */
  fontSize?: string;
  /**
   * How weight should the text be?
   */
  fontWeight?: string;
  /**
   * How color should the text be?
   */
  color?: string;
  /**
   * Text contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Text = ({
  fontSize = "text-4xl",
  fontWeight = "font-extrabold",
  color = "text-black",
  label,
}: TextProps) => {
  return <span className={`${fontSize} ${fontWeight} ${color}`}>{label}</span>;
};
