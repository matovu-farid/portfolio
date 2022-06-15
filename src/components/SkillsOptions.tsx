import  { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { addAFav, deleteAFav } from '../app/features/favs';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { deleteASkill, updateASkill } from '../app/features/skills';
import { resetWorkingSkill, setWorkingSkill } from '../app/features/working_skill';
import { Skill } from '../interfaces/skill';
import Button from './Button';
import SkillsForm from './SkillsForm';

const SkillsOptions = (props: { skill: Skill}) => {
  const skill = props.skill;
  const dispatch = useAppDispatch()
  const {name,image} = useAppSelector(state=>state.workingSkill)
  const {pathname} = useLocation()
  const favs = useAppSelector(state=>state.favorites.favs)
  const isAFavorite = ()=> favs.some(favorite=>favorite.name === skill.name)
  const isFavoritesPath =()=> pathname.includes('fav')
 
  const onDelete = ()=>{
    
    dispatch(deleteASkill(skill))

  }
  const onUpdate = ()=>{
    const newSkill = {
      id: skill.id,
      name: name,
      image: image,

    }
    dispatch(updateASkill(newSkill))
    dispatch(resetWorkingSkill())
    toggleDialog()
  }
  const onCancel = ()=>{
    dispatch(resetWorkingSkill())
    toggleDialog()
  }
  const [open,setOpen] = useState(false)
  const toggleDialog = ()=>{
    setOpen(!open)
  }
  useEffect(()=>{
    if(open) dispatch(setWorkingSkill(skill))
  },[open])


 
  return (
    <div className='flex gap-1 relative'>
      <dialog  className='shadow-2xl z-10' open={open}>
        <SkillsForm/>
        <div className='flex gap-2 justify-end'>
          <Button text='Update' onClick={onUpdate}></Button>
          <Button text='Cancel' onClick={onCancel}></Button>
        </div>
      </dialog>
      
        <Button text='Edit' onClick={toggleDialog}/>
        <Button text='Delete' onClick={onDelete}/>
        <div className='flex-1 flex justify-end pr-4'>

        </div>
    </div>
  )
}

export default SkillsOptions