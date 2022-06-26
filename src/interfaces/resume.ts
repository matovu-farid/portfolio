
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
export interface RProject {
  title: string,
  points: string[]
}
export interface Resume {
  id: string,
  name: string,
  title: string,
  intro: string,
  links: string[],
  history: History[],
  skills: RSkill[],
  education: Education[]
}