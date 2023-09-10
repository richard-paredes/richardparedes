import React from "react";
import Image from "next/image";

/**
 *
 * @param {{className?: string, bgImageSrc: string, bgImageAlt: string, heading: string, description: string, technologies: string[], links: React.ReactElement[] }} props
 * @returns {JSX.Element}
 */
export const Card = ({
  className,
  heading,
  description,
  technologies,
  links,
  bgImageSrc,
  bgImageAlt,
}) => {
  return (
    <div
      className={
        "relative flex flex-col-reverse justify-center w-full md:h-96 container" +
        className
      }
    >
      <div className="block w-full md:w-1/2 xl:w-2/5 z-10 my-auto mx-auto shadow-lg">
        <div className="flex flex-col rounded-md bg-grayscaled-soft border-b-4 md:border-b-0 md:border-l-4 border-colored">
          <div className="mx-6 my-4">
            <div className="font-medium text-base text-contrast mb-4">
              {heading}
            </div>
            <p className="font-normal text-gray-dark text-sm mb-2">
              {description}
            </p>
          </div>
          <div className="mx-6 mb-2 flex flex-col">
            <div className="w-full text-xs text-grayscaled">
              <p>Built with:</p>
              <div className="flex flex-row flex-wrap">
                {technologies.map((tech) => (
                  <span key={tech} className="m-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="self-end text-right flex">{links}</div>
          </div>
        </div>
      </div>
      <div className="absolute flex-grow self-center w-2/3 opacity-30 rounded-3xl">
        <Image
          src={bgImageSrc}
          width="1000"
          height="1000"
          className="rounded-md object-fill border border-black dark:border-white"
          alt={bgImageAlt}
        />
      </div>
    </div>
  );
};
