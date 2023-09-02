import React from "react";
import PageContainer from "@/components/layouts/container/PageContainer";
import { Experiences } from "@/modules/experiences";
import { Heading } from "@/components/ui";

const PageSeo = {
  title: "Working Experiences",
  description: "Working Experiences",
};

const experience = () => {
  return (
    <PageContainer seoProps={PageSeo}>
      <Heading title="💼 Working Experiences" />
      <Experiences />
    </PageContainer>
  );
};

export default experience;
