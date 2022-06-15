import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addSearchText, search } from "../app/features/projects";
import Projects from "../components/Projects";

const ProjectsPage = () => {
  const {
    loading,
    all,
    searched,
    searchText,
  } = useAppSelector((state) => state.projects);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(search(searchText));
  }, [all, searchText]);

  return (
    <Projects all={all} searched={searched} loading={loading} addSearchText={addSearchText} />
  );
};

export default ProjectsPage;
