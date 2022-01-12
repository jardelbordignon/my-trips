// similar ao GetPlaceBySlugQuery
export interface IPlaceTemplate {
  place: {
    id: string
    slug: string
    name: string
    location: {
      latitude: number
      longitude: number
    }
    description?: {
      html: string
    }
    gallery: Array<{
      url: string
      height: number
      width: number
    }>
  }
}

export const PlaceTemplate = ({ place }: IPlaceTemplate) => (
  <>
    <h1>{place.name}</h1>
    {place.description && (
      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />
    )}

    {place.gallery.map(({ url, width, height }) => (
      <img key={url} src={url} width={width} height={height} alt={place.name} />
    ))}
  </>
)
