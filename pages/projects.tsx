import React from "react";
import PageContainer from "@/components/layouts/container/PageContainer";
import { Projects as Project } from "@/modules/project";
import { Heading } from "@/components/ui";

const PageSeo = {
  title: "Projects",
  description: "Projects",
};

const Projects = () => {
  return (
    <PageContainer seoProps={PageSeo}>
      <Heading title="🚀 Highlighted Projects" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Project />
      </div>
    </PageContainer>
  );
};

export default Projects;
