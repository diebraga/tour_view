import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload, OrbitControls } from '@react-three/drei'
import { Section } from '../../components/Section'
import { GetServerSideProps } from 'next'
import { SectionTypes } from '../../@types'

type HomeProps = {
  section: SectionTypes
}

export default function Home({ section }: HomeProps) { 
  return (
    <Canvas frameloop="demand" camera={{ position: [0, 0, 5] }}>
      {/* @ts-ignore */}
      <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />
      <Suspense fallback={null}>
        <Preload all />
        <Section section={section}/>
      </Suspense>
    </Canvas>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/sections?filters[slug][$eq]=${slug}&populate=texture`)
  const data = await response.json()

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
    props: {
      section: formatedData
    }
  }
}