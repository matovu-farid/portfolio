import { NavLink } from "react-router-dom";
import { Resume } from "../interfaces/resume";
import Options from "./Options";
interface Props {
  resume: Resume;
  className?: string;
}

const ResumeComponent = ({resume,className}:Props) => {
  return (

    <div className={`flex flex-col border-2 shadow-lg rounded-lg ${className}`}>
       

        <div >

          <div className="p-2">
          
            <h3 className="h-3 text-2xl text-blue-800 font-bold"> {resume.name}</h3>
          </div>
          <div className="p-2">
            
            <p> {resume.description}</p>
          </div>
        </div>
      
      <div className="my-auto p-3">
        <Options resume={resume}></Options>
      </div>
    </div>
  );
}

export default ResumeComponent