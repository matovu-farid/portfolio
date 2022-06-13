import { Project } from "../interfaces/project";
import Options from "./Options";

const ProjectComponent = (props:{project: Project}) => {
  return (

    <div className="flex border-2 shadow-lg rounded-lg">
      <div >

        <div className="p-2">
        
          <h3 className="h-3 text-md text-gray-900 font-bold"> {props.project.name}</h3>
        </div>
        <div className="p-2">
          
          <p> {props.project.description}</p>
        </div>
      </div>
      <div className="my-auto p-3">
        <Options project={props.project}></Options>
      </div>
    </div>
  );
}

export default ProjectComponent