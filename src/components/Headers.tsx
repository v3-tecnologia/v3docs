import React from "react";

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="!text-primary !text-5xl/12 lg:!text-6xl/16 !font-bold ">
      {children}
    </h1>
  );
};

export const SubTitle = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="!font-bold !text-3xl md:!text-4xl">{children}</h2>;
};
