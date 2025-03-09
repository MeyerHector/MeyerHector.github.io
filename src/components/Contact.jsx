import React from "react";

const Contact = () => {
  return (
    <form className=" p-4">
      <span className="font-medium text-xl">Contacto</span>
      <div className="flex flex-col" id="contact">
        <div className="flex justify-between gap-2">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Nombre completo"
                className="border-1 border-gray-200 rounded-md p-1 w-2/5"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-1 border-gray-200 rounded-md p-1 w-3/5"
              />
            </div>
            <textarea
              placeholder="Mensaje"
              className="border-1 border-gray-200 rounded-md"
            ></textarea>
          </div>
          <button className="border-1 border-gray-200 rounded-md px-2 cursor-pointer">
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
