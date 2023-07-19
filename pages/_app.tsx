import { AppProps } from 'next/app'
import '../styles/globals.css'
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import RootContainer from '@/components/layouts/container/RootContainer'
import Navbar from '@/components/layouts/navbar/Navbar'
import { ThemeProvider } from 'next-themes'
import defaultSeoConfig from '@/configs/next-seo'
import { DefaultSeo } from 'next-seo'

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <ThemeProvider attribute="class">
          <DefaultSeo {...defaultSeoConfig} />
          <RootContainer>
            <Navbar />
            <Component {...pageProps} />
          </RootContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
