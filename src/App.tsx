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

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllProjects());
    dispatch(fetchAllFavs());
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
            <Route path="/" element={<ProjectsPage />} />
            <Route path="/addproject" element={<AddProjects />} />
            <Route path="/favorites" element={<Favourites />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/addskill" element={<AddSkill />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
