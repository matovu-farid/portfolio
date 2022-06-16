import  { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteALanguage, updateALanguage } from '../../app/features/languages';
import { resetWorkingLanguage, setWorkingLanguage } from '../../app/features/working_language';
import { Language } from '../../interfaces/language';
import Button from '../Button';
import LanguagesForm from './LanguagesForm';

interface Props {
  language: Language;
}

const LanguagesOptions = ( { language}:Props) => {

  const dispatch = useAppDispatch()
  const {name,image} = useAppSelector(state=>state.workingLanguage)

  
  const onDelete = ()=>{
    
    dispatch(deleteALanguage(language))

  }
  const onUpdate = ()=>{
    const newLanguage = {
      id: language.id,
      name: name,
      image: image,

    }
    dispatch(updateALanguage(newLanguage))
    dispatch(resetWorkingLanguage())
    toggleDialog()
  }
  const onCancel = ()=>{
    dispatch(resetWorkingLanguage())
    toggleDialog()
  }
  const [open,setOpen] = useState(false)
  const toggleDialog = ()=>{
    setOpen(!open)
  }
  useEffect(()=>{
    if(open) dispatch(setWorkingLanguage(language))
  },[open])


 
  return (
    <div className='flex gap-1 relative'>
      <dialog  className='shadow-2xl z-10' open={open}>
        <LanguagesForm/>
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

export default LanguagesOptions