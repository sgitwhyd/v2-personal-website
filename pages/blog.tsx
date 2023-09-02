import React from "react";
import PageContainer from "@/components/layouts/container/PageContainer";

const seoData = {
  title: "Blog",
  description: "Blog",
  openGraph: {
    title: "Blog",
    description: "Blog",
  },
};

const Blog = () => {
  return (
    <PageContainer seoProps={seoData}>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Coming Soon 🙌</h1>
      </div>
    </PageContainer>
  );
};

export default Blog;
