import { FC, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navigation from "./components/Navigation/Navigation";
import ThreeJS from "./components/ThreeJS/ThreeJS";

import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";
import HomePage from "./pages/Home/Home";
import ProjectsPage from "./pages/Projects/projects";

const App: FC = () => {
  return (
    <Fragment>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Routes key="routes">
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      <ThreeJS />
    </Fragment>
  );
};

export default App;
