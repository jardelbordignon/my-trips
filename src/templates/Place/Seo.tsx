import { NextSeo } from 'next-seo'

import { IPlaceTemplate } from '.'

export const Seo = ({ place }: IPlaceTemplate) => {
  const url = 'https://jardelbordignon-mytrips.vercel.com'
  const title = `${place.name} - My Trips`
  const description = place.description
    ? place.description.text
    : 'A simple project to show in a map the places that I went and show more informations and photos when clicked'

  return (
    <NextSeo
      canonical={url}
      title={title}
      description={description}
      openGraph={{
        url,
        title,
        description,
        images: [
          {
            url: place.gallery[0].url,
            width: place.gallery[0].width,
            height: place.gallery[0].height,
            alt: `${place.name}`
          }
        ]
      }}
    />
  )
}
