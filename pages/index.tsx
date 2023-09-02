import { NextPage } from "next";
import PageContainer from "@/components/layouts/container/PageContainer";
import { Hero } from "@/modules/home";

const PageSeo = {
  title: "Home",
  description: "Home",
};

const Index: NextPage = () => {
  return (
    <PageContainer seoProps={PageSeo}>
      <Hero />
    </PageContainer>
  );
};

export default Index;
