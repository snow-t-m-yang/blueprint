import React from "react";
import ShowCase from "@/components/ShowCase";

const Blog = () => {
  return (
    <ShowCase
      src="https://wynns.vercel.app/"
      title="A Blog site that I build for my Malaysian friend"
      ui="React.js"
      metaFramework="Next.js"
      cms="Sanity"
      css="Tailwind.css"
      hasCMS={true}
      cloudPlatform="Vercel"
    />
  );
};

export default Blog;
