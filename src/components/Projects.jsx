import React from "react";
import ProjectCard from "./ProjectCard";
import { IPFC_images } from "../../public/img/projects/IPFC/indexIPFC";
const Projects = () => {
  return (
    <div className="p-4" id="projects">
      <span className="font-medium text-xl">Proyectos</span>
      <ProjectCard
        title={"IPF-Conecta"}
        about={"Plataforma de conexión laboral"}
        description={
          "IPF-Conecta es una plataforma de conexión laboral que busca facilitar la búsqueda de empleo para los egresados del Instituto Politécnico Formosa. La plataforma cuenta con un apartado de búsqueda de empleos, un chat privado, un perfil de egresado, un apartado de reportes para el administrador y un feed donde los usuarios pueden interactuar."
        }
        startDate={"03/2024"}
        endDate={"11/2024"}
        skills={[
          "Node.js",
          "PostgreSQL",
          "Sequelize",
          "React",
          "Socket.io",
          "TailwindCSS",
        ]}
        images={IPFC_images}
        repo={"https://github.com/IPF-CONECTA/IPF-CONECTA"}
      />
    </div>
  );
};

export default Projects;
