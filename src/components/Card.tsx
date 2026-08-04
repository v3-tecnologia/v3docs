import React from "react";
import Link from "@docusaurus/Link";

interface CardProps {
  title: React.ReactNode;
  children: React.ReactNode;
  href?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

interface CardSuportProps {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Card = ({
  title,
  children,
  href,
  bgColor = "bg-white",
  textColor = "text-black",
  className = "",
}: CardProps) => {
  const cardContent = (
    <div
      className={`relative rounded-3xl shadow-lg p-7 pt-8 transition-colors duration-200 ${bgColor} ${textColor} ${className}  lg:!min-h-[300px] flex flex-col group hover:bg-primary hover:text-white cursor-pointer`}
      style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)" }}
    >
      <div className="absolute top-5 right-7">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 24L24 8"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="group-hover:stroke-white"
          />
          <path
            d="M12 8H24V20"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="group-hover:stroke-white"
          />
        </svg>
      </div>
      <div className="font-bold text-xl mb-2 mt-2">{title}</div>
      <div className="text-base leading-snug mt-5">{children}</div>
    </div>
  );

  if (href) {
    return (
      <Link
        to={href}
        className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-3xl !no-underline"
      >
        {cardContent}
      </Link>
    );
  }
  return cardContent;
};

export const CardSuport = ({
  title,
  children,
  className = "",
}: CardSuportProps) => {
  return (
    <div
      className={`relative rounded-3xl shadow-lg p-7 pt-8 ${className} min-h-[200px] flex flex-col`}
      style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)" }}
    >
      <div className="!font-bold !text-4xl !text-primary !mb-2 !mt-2">
        {title}
      </div>
      <div className="!text-xl/12 !leading-snug !mt-5 !text-primary-dark">
        {children}
      </div>
    </div>
  );
};
