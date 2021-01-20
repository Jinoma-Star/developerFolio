import React, { useContext } from "react";
import "./StartupProjects.css";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container">
              {bigProjects.projects.map((project,i) => {
                return (
                  <div key={i} className={isDark ? "dark-mode project-card" : "project-card"} 
                  onClick={() => openProjectInNewWindow(project.link)}>
                  <div className="project-image">
                    <img src={project.image} alt={project.projectName} className="card-image"></img>
                  </div>
                  <div className="project-detail">
                    <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
                      {project.projectName}
                    </h5>
                    <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
                      {project.projectDesc}
                    </p>
                  </div>
                </div>
                );
              })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
