import { Project } from "../interfaces/project";
import Options from "./Options";
interface Props {
  project: Project;
  className?: string;
}

const ProjectComponent = ({project,className}:Props) => {
  return (

    <div className={`flex flex-col border-2 shadow-lg rounded-lg ${className}`}>
      <div >

        <div className="p-2">
        
          <h3 className="h-3 text-md text-gray-900 font-bold"> {project.name}</h3>
        </div>
        <div className="p-2">
          
          <p> {project.description}</p>
        </div>
      </div>
      <div className="my-auto p-3">
        <Options project={project}></Options>
      </div>
    </div>
  );
}

export default ProjectComponent