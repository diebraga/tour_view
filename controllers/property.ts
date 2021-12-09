import useSWR from 'swr'

export function propertyBySlug() {
  const { data, error } = useSWR(`http://localhost:133/api/properties?filters[slug][$eq]=my-first-home`)

  return {
    property: data,
    isLoading: !error && !data,
    isError: error
  }
}
