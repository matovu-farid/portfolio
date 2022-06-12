import React, { FormEvent, useState } from 'react'
import { useAppDispatch } from '../app/hooks';
import { deleteAProject, updateAProject } from '../app/projects';
import { Project } from '../interfaces/project';
import Button from './Button';

const Options = (props: { project: Project}) => {
  const project = props.project;
  const dispatch = useAppDispatch()
  const onDelete = ()=>{
    dispatch(deleteAProject(project))
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
    toggleDialog()
  }
  const [open,setOpen] = useState(false)
  const toggleDialog = ()=>{
    setOpen(!open)
  }
  
  const [name, setName] = useState(project.name)
  const [description, setDescription] = useState(project.description)
  const [image, setImage] = useState(project.image)
  const [github, setGithub] = useState(project.github)
 
  return (
    <div className='flex gap-1'>
      <dialog  className='shadow-lg' open={open}>
        <form className='w-full h-full flex flex-col p-3 text-start justify-start gap-2'>
        <input type="text" id="name" placeholder='title' name="name" value={name} onChange={(e)=>setName((e.target as HTMLInputElement).value)} />

          <textarea id='description' placeholder='description' name='description' value={description}   cols={30} rows={10} onChange={(e)=>setDescription((e.target as HTMLTextAreaElement).value)}></textarea>
        <div className=' flex flex-col'>
          <p className='bold'>Links</p>

         <input type="text" id="image" placeholder='image' name="image" defaultValue={image} onChange={(e)=>setImage((e.target as HTMLInputElement).value)} />
          <input type="text" id="github" placeholder='github' name="github" defaultValue={github} onChange={(e)=>setGithub((e.target as HTMLInputElement).value)} />
        </div>
        </form>
        <div className='flex gap-2 justify-end'>
          <Button text='Update' onClick={onUpdate}></Button>
          <Button text='Cancel' onClick={toggleDialog}></Button>
        </div>
      </dialog>
      <Button text='Edit' onClick={toggleDialog}/>
      <Button text='Delete' onClick={onDelete}/>
    </div>
  )
}

export default Options