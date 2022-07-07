
export interface History {
  job: string,
  date: string,
  points: string[],
  location: string
}
export interface Education {
  institution: string,
  date: string,
  title: string,
}

export interface RSkill {
  frontEnd:string[],
  backEnd:string[],
  tools: string[]

}

export interface Profile {
  network: String,
  username: String,
  url: String,
  icon: String | null
}
export interface Basic {
  name: string,
  image: string
  email: string,
  phone: string,
  url: string,
  summary: string,
  profiles: Profile[]


}
export interface RProject {
  title: string,
  points: string[]
}
export interface Resume {
  id: string,
  basics: Basic,
  title: string,
  intro: string,
  links: string[],
  history: History[],
  skills: RSkill[],
  education: Education[]
}