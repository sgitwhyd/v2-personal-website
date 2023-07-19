import { DefaultSeoProps } from 'next-seo'

const title = 'Sigit Wahyudi'

const config: DefaultSeoProps = {
  titleTemplate: `%s | ${title}`,
  description: 'is a software engineer based in Indonesia.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://sgitwhyd.vercel.app/',
    site_name: 'Sigit Wahyudi',
  },
  additionalMetaTags: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'apple-mobile-web-app-title', content: 'Sigit Wahyudi' },
    { name: 'application-name', content: 'Sigit Wahyudi' },
    { name: 'msapplication-TileColor', content: '#2561cd' },
    { name: 'msapplication-config', content: '/browserconfig.xml' },
  ],
}

export default config
