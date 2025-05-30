import React from "react";

export const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={`!text-primary sm:!text-4xl/10 md:!text-5xl/14 lg:!text-6xl/16 !font-bold ${
        className || ""
      }`}
    >
      {children}
    </h1>
  );
};

export const SubTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={`!font-bold !text-3xl md:!text-4xl ${className || ""}`}>
      {children}
    </h2>
  );
};
