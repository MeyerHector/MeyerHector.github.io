import React from "react";
import Card from "./Card";

const Experience = () => {
  return (
    <div className="p-4" id="experience">
      <span className="font-medium text-xl">Experiencia laboral</span>
      <Card
        image={"ipf-logo.png"}
        title={"Desarrollador Backend"}
        entity={"Instituto Politécnico Formosa"}
        startDate={"03/2025"}
        location={"Formosa, Argentina"}
        description={
          "Desarrollo e implementación de soluciones tecnológicas para la gestión de la información de la institución y diferentes empresas competentes que solicitan software. Junto con el equipo de desarrollo y demás áreas de la institución, se llevan a cabo proyectos de software que permiten la automatización de procesos y la mejora de la eficiencia en la gestión de la información."
        }
      />
    </div>
  );
};

export default Experience;
