import React from "react";

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-primary text-5xl/12 lg:text-6xl/16 font-bold ">
      {children}
    </div>
  );
};

export const SubTitle = ({ children }: { children: React.ReactNode }) => {
  return <div className="!font-bold !text-3xl md:!text-4xl">{children}</div>;
};
