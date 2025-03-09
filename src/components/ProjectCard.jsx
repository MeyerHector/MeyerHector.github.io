import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  title,
  description,
  about,
  startDate,
  endDate,
  skills,
  images,
  repo,
}) => {
  const [readAll, setReadAll] = React.useState(false);
  const imagesData = Object.entries(images);
  return (
    <div className="pt-2">
      <div className="flex justify-between items-center mb-2">
        <div className="flex flex-col">
          <span className="font-medium text-lg text-gray-800">{title}</span>
          <p>{about}</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-sm text-gray-500">
            {startDate} {endDate ? ` - ${endDate}` : " - Actualidad"}
          </span>
          {repo && (
            <Link target="blank" to={repo} className="text-blue-500">
              Ver repositorio
            </Link>
          )}
        </div>
      </div>

      {description && (
        <p className="text-gray-500">
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
      <div className="flex flex-wrap gap-2 py-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 rounded-full px-1 text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex justify-start items-center gap-2 mt-2">
        {imagesData.slice(0, 5).map(([description, image], index) => (
          <div key={index} className="relative w-22 h-12">
            <img
              src={image}
              alt={description}
              className="object-cover w-full h-full border-2 border-gray-200 rounded-md cursor-zoom-in"
            />
          </div>
        ))}
        {imagesData.length > 5 && (
          <div className="relative w-22 h-12">
            <span className="text-gray-500 w-full h-full border-2 border-gray-200 rounded-md cursor-pointer flex justify-center items-center">
              +{imagesData.length - 5}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
