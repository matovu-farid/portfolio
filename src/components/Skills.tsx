import React from 'react'
import { SpinnerRoundOutlined } from 'spinners-react';
import { Skill } from '../interfaces/skill';
import SkillComponent from './Skill';

interface Props {
  all: Skill[];

  loading: boolean;
}
const Skills = ({all,loading}:Props) => {
  return (
    <div className="min-h-screen w-100 flex flex-col">
      <SpinnerRoundOutlined
        className="mx-auto my-auto h-100 "
        enabled={loading}
      />


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto animate-entrance">
        {(all).map((skill) => (
          <SkillComponent key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default Skills