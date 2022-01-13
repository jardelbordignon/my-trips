import { NextSeo } from 'next-seo'

export const Seo = () => (
  <NextSeo
    title="My Trips"
    description="A simple project to show in a map the places that I went and show more informations and photos when clicked"
    canonical="https://jardelbordignon-mytrips.vercel.com"
    openGraph={{
      site_name: 'My Trips',
      url: 'https://jardelbordignon-mytrips.vercel.com',
      title: 'My Trips',
      description:
        'A simple project to show in a map the places that I went and show more informations and photos when clicked',
      images: [
        {
          url: 'https://jardelbordignon-mytrips.vercel.com/img/cover.png',
          width: 1280,
          height: 720,
          alt: 'My Trips'
        }
      ]
    }}
  />
)
