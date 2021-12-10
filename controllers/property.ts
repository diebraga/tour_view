import UseSWR from 'swr'
import { fetcher } from '../utils/fetcher'

export function propertyBySlug() {
  const { data, error } = UseSWR(`${process.env.NEXT_PUBLIC_API_URL}api/properties?filters[slug][$eq]=my-home&populate=texture`, fetcher)

  const formatedCreateAt = new Date(data?.data[0].attributes.createdAt)
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'  
    }
  )

  const [first, sec, third, ...rest] = formatedCreateAt.split(' ');

  const formatedTexture = data?.data[0].attributes.texture.data.attributes.url

  const formatedData = {
    id: data?.data[0].id,
    name: data?.data[0].attributes.name,
    slug: data?.data[0].attributes.slug,
    textureUrl: formatedTexture,
    createdAtDate: `${first} ${sec} ${third?.replace(',', '')}`,
    createdAtTime: rest[0] 
  }

  return {
    property: formatedData,
    isLoading: !error && !data,
    isError: error
  }
}
