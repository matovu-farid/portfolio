import { NavLink } from "react-router-dom";
import { Skill } from "../interfaces/skill";
import SkillsOptions from "./SkillsOptions";
interface Props {
  skill: Skill;
  className?: string;
}

const SkillComponent = ({skill,className}:Props) => {
  return (

    <div className={`flex flex-col border-2 shadow-lg rounded-lg ${className}`}>
       <NavLink to={`/skills/${skill.id}`}>

        <div >

          <div className="p-2">
          
            <h3 className="h-3 text-md text-gray-900 font-bold"> {skill.name}</h3>
          </div>
          <div className="p-2">
            
          </div>
        </div>
       </NavLink>
      <div className="my-auto p-3">
        <SkillsOptions skill={skill}></SkillsOptions>
      </div>
    </div>
  );
}

export default SkillComponent