import React from "react";

import { Github, Coding, Repository } from "@/modules/dashboard";
import { TopTrack, CurrentlyPlaying } from "@/modules/dashboard/spotify";
import PageContainer from "@/components/layouts/container/PageContainer";
import { Heading } from "@/components/ui";

const PageSeo = {
  title: "Dashboard",
  description: "Dashboard",
};

const Activity = () => {
  return (
    <PageContainer seoProps={PageSeo}>
      <Heading title="📌 Activities" />
      <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <Github />
        <Coding />
        <Repository />
      </section>

      <section className="mt-5">
        <h2 className="text-2xl font-bold">Sigit&apos;s Currently Playing</h2>
        <CurrentlyPlaying />
      </section>
      <section className="h-1/3">
        <h2 className="text-2xl font-bold">Spotify Top Tracks</h2>
        <TopTrack />
      </section>
    </PageContainer>
  );
};

export default Activity;
