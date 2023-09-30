export { }

declare global {
  interface ICandidate {
    id: number
    fullName: string
    country: string
    degree: string
    tags: string[]
    pill: string[]
  }
}