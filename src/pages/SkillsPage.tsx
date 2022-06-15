import { useAppDispatch, useAppSelector } from "../app/hooks";
import Skills from "../components/Skills";

const SkillsPage = () => {
  const {
    loading,
    all,
    
  } = useAppSelector((state) => state.skills);
  const dispatch = useAppDispatch();


  return (
    <Skills all={all} loading={loading} />
  );
};

export default SkillsPage;
