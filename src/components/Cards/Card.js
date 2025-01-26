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
        "relative flex flex-col-reverse justify-center h-96 container" +
        className
      }
    >
      <div className="block w-full lg:w-1/2 xl:w-2/5 z-10 my-auto mx-auto shadow-lg bg-[#f2f0ef]">
        <div className="flex flex-col bg-grayscaled-soft border border-b-4 border-r-2 border-colored">
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
              <div className="flex flex-row gap-x-2 gap-y-1 flex-wrap">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[#66615e] text-xs border border-b-3 border-r-3 rounded p-1 bg-red-100 uppercase font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="self-end text-right flex">{links}</div>
          </div>
        </div>
      </div>
      <div className="absolute self-center -top-5 -left-5 lg:top-0 lg:left-50 max-w-md opacity-30 rounded-3xl">
        <Image
          src={bgImageSrc}
          width="1000"
          height="1000"
          className="object-fill"
          alt={bgImageAlt}
        />
      </div>
    </div>
  );
};
