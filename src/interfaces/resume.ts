
export interface History {
  job: String,
  date: String,
  points: String[],
  location: String
}
export interface Education {
  institution: String,
  date: String,
  title: String,
}

export interface RSkill {
  frontEnd:String[],
  backEnd:String[],
  tools: String[]

}
export interface RProject {
  title: String,
  points: String[]
}
export interface Resume {
  id: string,
  name: string,
  title: String,
  intro: String,
  links: string[],
  history: History[],
  skills: RSkill[],
  education: Education[]
}