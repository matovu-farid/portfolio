import  { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { addAFav, deleteAFav } from '../app/favs';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { deleteAProject, updateAProject } from '../app/projects';
import { resetWorkingProject, setWorkingProject } from '../app/working_project';
import { Project } from '../interfaces/project';
import Button from './Button';
import ProjectsForm from './ProjectsForm';

const Options = (props: { project: Project}) => {
  const project = props.project;
  const dispatch = useAppDispatch()
  const {name, description,image,github} = useAppSelector(state=>state.workingProject)
  const {pathname} = useLocation()
  const onDelete = ()=>{
    (pathname.includes('fav'))?
    dispatch(deleteAFav(project))
    :
    dispatch(deleteAProject(project))
    dispatch(updateAProject({...project,favorite:false}))

  }
  const onUpdate = ()=>{
    const newProject = {
      id: project.id,
      name: name,
      description: description,
      image: image,
      github: github

    }
    dispatch(updateAProject(newProject))
    dispatch(resetWorkingProject())
    toggleDialog()
  }
  const onCancel = ()=>{
    dispatch(resetWorkingProject())
    toggleDialog()
  }
  const [open,setOpen] = useState(false)
  const toggleDialog = ()=>{
    setOpen(!open)
  }
  useEffect(()=>{
    if(open) dispatch(setWorkingProject(project))
  },[open])
  const navigate = useNavigate()
  const onLike = ()=>{
    dispatch(updateAProject({...project,favorite:true}))

    dispatch(addAFav(project))

    navigate('/favorites')
  }
 
  return (
    <div className='flex gap-1 relative'>
      <dialog  className='shadow-2xl z-10' open={open}>
        <ProjectsForm/>
        <div className='flex gap-2 justify-end'>
          <Button text='Update' onClick={onUpdate}></Button>
          <Button text='Cancel' onClick={onCancel}></Button>
        </div>
      </dialog>
      
        <Button text='Edit' onClick={toggleDialog}/>
        <Button text='Delete' onClick={onDelete}/>
        {

        ((!project.favorite)|| ( project.favorite === undefined))&&<button onClick={onLike}>👍</button>
        }
    </div>
  )
}

export default Options