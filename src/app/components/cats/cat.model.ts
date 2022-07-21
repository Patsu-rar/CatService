export interface Cat {
  id: string,
  name: string,
  description: string,
  image?: {
    url: string
  }
  selected: boolean
}
