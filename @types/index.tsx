export type TextureType = {
  url: string;
}

export type LinksType = {
  name: string
  position: any
  ref: number
}

export type SectionType = {
  id: number
  name: string
  ref: number
  texture: TextureType
  links: LinksType[]
  infos: InfosType[]
}

export type InfosType = {
  name: string
  position: any
  description: string
}
