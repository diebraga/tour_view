import UseSWR from 'swr'
import { SectionTypes } from '../@types'
import { fetcher } from '../utils/fetcher'

type getAllSections = {
  attributes: SectionTypes
}

export function getAllSections() {
  const { data, error } = UseSWR(`${process.env.NEXT_PUBLIC_API_URL}api/sections`, fetcher, {
    onError: (error) => {
      console.log(error.message)
    }
  })

  const formatedData = data?.data.map((section: getAllSections) => {
    const data = {
      name: section.attributes.name,
      slug: section.attributes.slug
    }
    return data
  })
  
  return {
    sections: formatedData as SectionTypes[],
    isLoading: !error && !data,
    isError: error
  }
}
