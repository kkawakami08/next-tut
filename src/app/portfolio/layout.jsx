import React from "react";

// export const metadata = {
//   title: "Portfolio",
//   description: "Our Portfolio",
// };

const PortfolioLayout = ({ children }) => {
  return (
    <div className=" flex flex-col p-10 pt-0 gap-10 grow ">
      <h2 className="text-6xl font-bold">Our Works</h2>
      {children}
    </div>
  );
};

export default PortfolioLayout;
