export type SectionTypes = {
  id: any;
  name: any;
  slug: any;
  textureUrl: any;
  createdAtDate: string;
  createdAtTime: string;
  interactions: InteractionTypes[]
}

export type InteractionTypes = {
  description: string
  id: string
  link: string
  name: string
  positionX: number
  positionY: number
  positionZ: number
  type: 'info' | 'link'
}
