import { AppProps } from "next/app";
import "../styles/globals.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RootContainer from "@/components/layouts/container/RootContainer";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer";
import { ThemeProvider } from "next-themes";
import defaultSeoConfig from "@/configs/next-seo";
import { DefaultSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <ThemeProvider attribute="class">
          <DefaultSeo {...defaultSeoConfig} />
          <Analytics />
          <RootContainer>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </RootContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
