import React from "react";
import { useNavigate } from "react-router-dom";
import { addALanguage } from "../app/features/languages";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Button from "../components/Button";
import LanguagesForm from "../components/Language/LanguagesForm";
import { SKILLSROUTE } from "../helpers/constants";

const AddLanguage = () => {
  const dispatch = useAppDispatch()
  const {name,image}  = useAppSelector(state=>state.workingLanguage)
  const navigate = useNavigate()
  const onAdd = ()=>{
    const newLanguage = {
      id: '',
      name: name,
      image: image,

    }
    dispatch(addALanguage(newLanguage))
    navigate(SKILLSROUTE)
  }
  
  return (
    <div className='mx-auto w-1/2 animate-entrance'>
      <LanguagesForm />
      <div>
        <Button text='Add Language' onClick={onAdd} />
      </div>

    </div>
  )
};

export default AddLanguage;
