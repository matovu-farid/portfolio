import React, { Suspense, useEffect } from "react";

import "./App.css";
import { fetchAllProjects } from "./app/features/projects";
import { useAppDispatch } from "./app/hooks";
import ProjectsPage from "./pages/ProjectsPage";
import { Routes, Route } from "react-router-dom";
import AddProjects from "./pages/AddProjects";
import Sidebar from "./components/Sidebar";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { fetchAllFavs } from "./app/features/favs";
import Favourites from "./pages/Favorites";
import ProjectDetails from "./pages/ProjectDetails";
import SkillsPage from "./pages/SkillsPage";
import AddSkill from "./pages/AddSkill";
import {  ADDLANGUAGEROUTE, ADDPROJECTROUTE, ADDSKILLROUTE, FAVOURITESROUTE, HOMEROUTE, LANGUAGESROUTE, RESUMEROUTE, SHOWPROJECTROUTE, SKILLSROUTE } from "./helpers/constants";
import { fetchAllSkills } from "./app/features/skills";
import { fetchAllLanguages } from "./app/features/languages";
import LanguagesPage from "./pages/LanguagesPage";
import AddLanguage from "./pages/AddLanguage";
import ResumePage from "./components/resume/Resume";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProjects());
    dispatch(fetchAllFavs());
    dispatch(fetchAllSkills());
    dispatch(fetchAllLanguages());
  }, []);
  return (
    <div className="App">
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="flex-1 px-2">
          <ToastContainer />

          <Routes>
            <Route path={HOMEROUTE} element={<ProjectsPage />} />
            <Route path={ADDPROJECTROUTE} element={<AddProjects />} />
            <Route path={FAVOURITESROUTE} element={<Favourites />} />
            <Route path={SKILLSROUTE} element={<SkillsPage />} />
            <Route path={ADDSKILLROUTE} element={<AddSkill />} />
            <Route path={LANGUAGESROUTE} element={<LanguagesPage />} />
            <Route path={ADDLANGUAGEROUTE} element={<AddLanguage />} />
            <Route path={SHOWPROJECTROUTE} element={<ProjectDetails />} />
            <Route path={RESUMEROUTE} element={<ResumePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
