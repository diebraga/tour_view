import UseSWR from 'swr'
import { fetcher } from '../utils/fetcher'


export function getAllSections() {
  const { data, error } = UseSWR(`${process.env.NEXT_PUBLIC_API_URL}api/sections`, fetcher, {
    onError: (error) => {
      console.log(error.message)
    }
  })

  const formatedData = data?.data.map((section) => {
    const data = {
      name: section.attributes.name,
      slug: section.attributes.slug
    }
    return data
  })
  
  return {
    sections: formatedData,
    isLoading: !error && !data,
    isError: error
  }
}
