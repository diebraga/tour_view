import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload, OrbitControls, PositionalAudio } from '@react-three/drei'
import { Section } from '../../components/Section'
import { GetServerSideProps } from 'next'
import { InteractionTypes, SectionTypes } from '../../@types'
import * as THREE from 'three'
import { Box, IconButton, useDisclosure } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useRef } from 'react'
import SideBarNavigation from '../../components/SideBarNavigation'
import { useState } from 'react'

type HomeProps = {
  section: SectionTypes
}

export default function Home({ section }: HomeProps) { 
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  console.log(section)
  return (
    <>
      <SideBarNavigation onClose={onClose} isOpen={isOpen} btnRef={btnRef}/>

      <IconButton
        aria-label='open navigation'
        position='absolute'
        left='6'
        top='4'
        className='btn-nav'
        ref={btnRef}
        icon={<GiHamburgerMenu />}
        colorScheme='gray'
        onClick={onOpen} />

      <Canvas frameloop="demand" camera={{ position: [0, 0, 5] }}>
        {/* @ts-ignore */}
        <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />
        <primitive object={new THREE.AxesHelper(10)} />

        <Suspense fallback={null}>
          <Preload all />
          <Section section={section} navigationIsOpen={isOpen}/>
        </Suspense>
      </Canvas>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/sections?filters[slug][$eq]=${slug}&populate=texture&populate=interactions`)
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

  const formattedInteractions = data?.data[0].attributes.interactions.data.map(item => {
    const interaction = {
      id: item.id,
      name: item.attributes.name,
      positionX: item.attributes.positionX,
      positionY: item.attributes.positionY,
      positionZ: item.attributes.positionZ,
      link: item.attributes.link,
      description: item.attributes.description,
      type: item.attributes.type,
    }
    return interaction
  }) as InteractionTypes

  const formatedData = {
    id: data?.data[0].id,
    name: data?.data[0].attributes.name,
    slug: data?.data[0].attributes.slug,
    textureUrl: formatedTexture,
    createdAtDate: `${first} ${sec} ${third?.replace(',', '')}`,
    createdAtTime: rest[0],
    interactions: formattedInteractions
  }

  return {
    props: {
      section: formatedData
    }
  }
}
