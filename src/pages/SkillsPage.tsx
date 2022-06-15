import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const SkillsPage = () => {
  const {
    loading,
    all,
    
  } = useAppSelector((state) => state.skills);
  const dispatch = useAppDispatch();


  return (
    <Projects all={all} searched={searched} loading={loading} addSearchText={addSearchText} />
  );
};

export default SkillsPage;
