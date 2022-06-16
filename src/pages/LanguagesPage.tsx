import { useAppDispatch, useAppSelector } from "../app/hooks";
import Languages from "../components/Language/Languages";

const LanguagesPage = () => {
  const {
    loading,
    all,
    
  } = useAppSelector((state) => state.languages);
  const dispatch = useAppDispatch();


  return (
    <Languages all={all} loading={loading} />
  );
};

export default LanguagesPage;
