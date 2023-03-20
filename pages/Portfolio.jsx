import React from "react";
import ShowCase from "@/components/ShowCase";

const Portfolio = () => {
  return (
    <ShowCase
      title="A Portfolio site that I build for my Artist father"
      src="https://yiyang-portfolio.vercel.app/"
      ui="React.js"
      metaFramework="Next.js"
      hasCMS={false}
      css="Tailwind.css"
      cloudPlatform="Vercel"
    />
  );
};

export default Portfolio;
