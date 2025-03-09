import React from "react";
import Card from "./Card";

const Education = () => {
  return (
    <div className="p-4" id="education">
      <span className="font-medium text-xl">Formación académica</span>

      <Card
        image={"ipf-logo.png"}
        title={"Téc. Sup. en Desarrollo de Software Multiplataforma"}
        entity={"Instituto Politécnico Formosa"}
        startDate={"03/2023"}
        endDate={"11/2024"}
        description={
          "Formación en desarrollo de software multiplataforma, con especialización en tecnologías web y móviles. Se adquieren conocimientos en programación, bases de datos, diseño de interfaces y arquitectura de software."
        }
        key={"tec"}
      />
      <Card
        image={"alas-logo.jpg"}
        title={"Bachiller en Economía y Administración"}
        entity={"Colegio Privado Alas"}
        startDate={"03/2017"}
        endDate={"11/2022"}
        location={"Formosa, Argentina"}
      />
    </div>
  );
};

export default Education;
