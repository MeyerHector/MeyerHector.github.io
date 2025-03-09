import React from "react";
import { Link } from "react-scroll";
const Nav = () => {
  return (
    <div
      className="flex justify-between p-4 shadow-md sticky top-0 bg-white z-10"
      id="nav"
    >
      <nav className="flex flex-row w-3/5 justify-between text-lg">
        <Link
          className="cursor-pointer hover:bg-black rounded-full px-1.5 py-0.5 duration-100 ease-in hover:text-white"
          to="top"
          smooth={true}
          duration={500}
        >
          About
        </Link>
        <Link
          className="cursor-pointer hover:bg-black rounded-full px-1.5 py-0.5 duration-100 ease-in hover:text-white"
          to="experience"
          smooth={true}
          duration={500}
        >
          Experiencia
        </Link>
        <Link
          className="cursor-pointer hover:bg-black rounded-full px-1.5 py-0.5 duration-100 ease-in hover:text-white"
          to="education"
          smooth={true}
          duration={500}
        >
          Formación
        </Link>
        <Link
          className="cursor-pointer hover:bg-black rounded-full px-1.5 py-0.5 duration-100 ease-in hover:text-white"
          to="skills"
          smooth={true}
          duration={500}
        >
          Skills
        </Link>
        <Link
          className="cursor-pointer hover:bg-black rounded-full px-1.5 py-0.5 duration-100 ease-in hover:text-white"
          to="projects"
          smooth={true}
          duration={500}
        >
          Proyectos
        </Link>
        <button
          className="cursor-pointer hover:bg-black rounded-full px-1.5 py-0.5 duration-100 ease-in hover:text-white"
          to="contact"
          smooth={true}
          duration={500}
        >
          Contacto
        </button>
      </nav>
      <select name="language" className="border-1 border-gray-200 rounded-md">
        <option value="es">🇪🇸</option>
        <option value="en">🇺🇸</option>
      </select>
    </div>
  );
};

export default Nav;
