import React from "react";
import BlogGrid from "../../../components/Blog";
import BlogGridMobile from "../../../components/BlogGridMobile";

function BlogSection() {
  return (
    <section className="w-full">
      <BlogGrid />
      <BlogGridMobile />
    </section>
  );
}

export default BlogSection;
