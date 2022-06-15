import React from "react";
import { useNavigate } from "react-router-dom";
import { addASkill } from "../app/features/skills";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Button from "../components/Button";
import SkillsForm from "../components/SkillsForm";
import { SKILLSROUTE } from "../helpers/constants";

const AddSkill = () => {
  const dispatch = useAppDispatch()
  const {name,image}  = useAppSelector(state=>state.workingSkill)
  const navigate = useNavigate()
  const onAdd = ()=>{
    const newSkill = {
      id: '',
      name: name,
      image: image,

    }
    dispatch(addASkill(newSkill))
    navigate(SKILLSROUTE)
  }
  
  return (
    <div className='mx-auto w-1/2 animate-entrance'>
      <SkillsForm />
      <div>
        <Button text='Add Skill' onClick={onAdd} />
      </div>

    </div>
  )
};

export default AddSkill;
