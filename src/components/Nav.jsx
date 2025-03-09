import React from "react";
import { Link } from "react-scroll";
const Nav = () => {
  return (
    <div
      className="flex justify-between p-4 shadow-md sticky top-0 bg-white z-10"
      id="nav"
    >
      <nav className="flex flex-row w-3/5 justify-between text-lg">
        <Link className="cursor-pointer" to="top" smooth={true} duration={500}>
          About
        </Link>
        <Link
          className="cursor-pointer"
          to="experience"
          smooth={true}
          duration={500}
        >
          Experiencia
        </Link>
        <Link
          className="cursor-pointer"
          to="education"
          smooth={true}
          duration={500}
        >
          Formación
        </Link>
        <Link
          className="cursor-pointer"
          to="skills"
          smooth={true}
          duration={500}
        >
          Skills
        </Link>
        <Link
          className="cursor-pointer"
          to="projects"
          smooth={true}
          duration={500}
        >
          Proyectos
        </Link>
        <Link
          className="cursor-pointer"
          to="contact"
          smooth={true}
          duration={500}
        >
          Contacto
        </Link>
      </nav>
      <select name="language" className="border-1 border-gray-200 rounded-md">
        <option value="es">🇪🇸</option>
        <option value="en">🇺🇸</option>
      </select>
    </div>
  );
};

export default Nav;
