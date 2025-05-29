import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  variant?: "normal" | "bold";
  className?: string;
}

export const Paragraph = ({
  children,
  variant = "normal",
  className = "",
}: ParagraphProps) => {
  const baseStyles = "text-base md:text-lg lg:text-xl";
  const variantStyles = {
    normal: "font-normal",
    bold: "font-bold",
  };

  return (
    <p className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </p>
  );
};
