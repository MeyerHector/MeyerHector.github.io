import React, { useState } from "react";

const Card = ({
  image,
  title,
  entity,
  startDate,
  endDate,
  location,
  description,
}) => {
  const [readAll, setReadAll] = useState(false);
  return (
    <div className=" p-2 mt-2 flex w-full border-3 border-gray-50 rounded-lg">
      <img
        src={`./img/${image}`}
        alt={`Logo ${entity}`}
        className="w-10 h-10 rounded-full bg-cover mt-2"
      />
      <div className="flex flex-col text-gray-500 ms-2 w-full">
        <div className="flex  items-center justify-between w-full">
          <span className="font-medium text-lg text-gray-800">{title}</span>
          <span className="text-sm">
            {startDate} {endDate ? ` - ${endDate}` : " - Actualidad"}
          </span>
        </div>
        <span>{entity}</span>

        {location && <span className="text-sm">{location}</span>}
        {description && (
          <p>
            {description.length > 100 && !readAll ? (
              <>
                {description.slice(0, 100)}
                {"... "}
                <span
                  onClick={() => {
                    setReadAll(true);
                  }}
                  className="text-blue-500 cursor-pointer"
                >
                  {" "}
                  leer más
                </span>
              </>
            ) : (
              description
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
