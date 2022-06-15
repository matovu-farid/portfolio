import React from 'react'
import { SpinnerRoundOutlined } from 'spinners-react';
import { Project } from '../interfaces/project';
import ProjectComponent from './Project';
import SearchField from './SearchField';
interface Props {
  all: Project[];
  searched: Project[] | null;
  addSearchText:Function;
  loading: boolean;
}
const Projects = ({searched,all,addSearchText,loading}:Props) => {
  return (
    <div className="min-h-screen w-100 flex flex-col">
      <SpinnerRoundOutlined
        className="mx-auto my-auto h-100 "
        enabled={loading}
      />
      <SearchField
        searchFunction={addSearchText}
        disabled={loading}
      ></SearchField>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto animate-entrance">
        {(searched || all).map((project) => (
          <ProjectComponent key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects