import React from "react";
import { useFetcher } from "@/hooks/useFetcher";
import { Card } from "./layouts/Card";
import { GithubApiResponse } from "@/types/github";

export const Repository = () => {
  const { isLoading, data } = useFetcher<GithubApiResponse>({
    name: "github-repo",
    url: "/api/github/stats",
  });

  return (
    <Card
      count={isLoading ? "..." : data?.user.publicRepos}
      link={`https://github.com/${data?.user.username}`}
      title=" Github Repository"
    />
  );
};
