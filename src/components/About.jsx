import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center" id="about">
      <div className="bg-[url(/img/portada.jpeg)] flex flex-col items-center justify-end w-full bg-cover h-32 rounded-t-lg">
        <img
          src="./img/yo.jpeg"
          alt="Hector Meyer"
          className="rounded-full w-24 absolute top-35"
        />
      </div>
      <div className="p-4 mt-5">
        <h2 className="text-2xl font-medium text-center">Héctor Meyer</h2>
        <p className="text-gray-500">
          <span className="text-gray-800">Desarrollador backend</span> con
          experiencia en la creación de soluciones escalables y eficientes.
          Especializado en{" "}
          <span className="text-gray-800">Node.js, Nest.js, Express </span>y
          bases de datos relacionales como{" "}
          <span className="text-gray-800">PostgreSQL y MySQL</span>, me enfoco
          en el diseño de arquitecturas robustas y el desarrollo de{" "}
          <span className="text-gray-800">API Restful</span>.
        </p>
      </div>
    </div>
  );
};

export default About;
