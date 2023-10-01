interface ICandidate {
  id: number
  fullName: string
  country: string
  degree: string
  tags: string[]
  pill: string[]
  completed?: number
  programs?: number
}

export const candidates: ICandidate[] = [
  {
    id: 1,
    fullName: 'Aaliyah Sanderson',
    country: 'Riyadh, Saudi Arabia',
    degree: 'Bachelor - Cambridge University (2023 - 2023)',
    tags: ['top_candidate'],
    pill: ['New York', 'Marketing', 'London']
  },
  {
    id: 2,
    fullName: 'John doe',
    country: 'Boston, USA',
    degree: 'Bachelor - MIT (2023 - 2023)',
    tags: ['top_candidate'],
    pill: ['New York', 'Marketing', 'London']
  },
  {
    id: 3,
    fullName: 'Thomas Matt',
    country: 'Edinburgh, UK',
    degree: 'Bachelor - Harvard University (2023 - 2023)',
    tags: ['top_candidate'],
    pill: ['New York', 'Marketing', 'London']
  },
  {
    id: 4,
    fullName: 'Kamilia Smith',
    country: 'London, UK',
    degree: 'Bachelor - Boston University (2023 - 2023)',
    tags: ['top_candidate'],
    pill: ['New York', 'Marketing', 'London']
  },
  {
    id: 5,
    fullName: 'Roy Jade',
    country: 'Cambridge, UK',
    degree: 'Bachelor - Yale (2023 - 2023)',
    tags: ['top_candidate'],
    pill: ['New York', 'Marketing', 'London']
  },
  {
    id: 6,
    fullName: 'James Harden',
    country: 'New York, USA',
    degree: 'Bachelor - Cambridge University (2023 - 2023)',
    tags: ['top_candidate'],
    pill: ['New York', 'Marketing', 'London'],
    completed: 5,
    programs: 4
  },
  {
    id: 7,
    fullName: 'Bam Adebayo',
    country: 'Florida, USA',
    degree: 'Bachelor - Cambridge University (2023 - 2023)',
    tags: ['top_candidate'],
    pill: ['New York', 'Marketing', 'London'],
    completed: 1,
    programs: 0
  },
  {
    id: 8,
    fullName: 'Kevin Durant',
    country: 'Texas, USA',
    degree: 'Bachelor - Cambridge University (2023 - 2023)',
    tags: ['top_candidate'],
    pill: ['New York', 'Marketing', 'London'],
    completed: 2,
    programs: 1
  },
]
