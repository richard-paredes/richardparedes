import React from 'react';
import Image from 'next/image';

interface CardProps {
  bgImageSrc: string;
  heading: string;
  description: string;
  technologies: string[];
  links: React.ReactElement[];
}

export const Card: React.FC<CardProps> = ({ heading, description, technologies, links, bgImageSrc }) => {
  return <div className="relative flex flex-col-reverse my-12 md:my-24 w-full md:h-96">
    <div className="block w-full md:w-1/2 xl:w-2/5 z-10 my-auto mx-auto shadow-lg">
      <div className="flex flex-col rounded-md bg-grayscaled-soft border-b-4 md:border-b-0 md:border-l-4 border-colored">
        <div className="mx-6 my-4">
          <div className="font-medium text-base text-contrast mb-4">{heading}</div>
          <p className="font-normal text-gray-dark text-sm mb-2">
            {description}
          </p>
        </div>
        <div className="mx-6 mb-2 flex flex-col">
          <div className="w-full text-xs text-grayscaled">
            <p>Built with:</p>
            <div className="flex flex-row flex-wrap">
              {technologies.map((tech) =>
                <span key={tech} className="m-1">{tech}</span>
              )}
            </div>
          </div>
          <div className="self-end text-right flex">
            {links}
          </div>
        </div>
      </div>
    </div>
    <>
    </>
    <div className="w-full hidden md:block opacity-30 rounded-md">
      <Image src={bgImageSrc} layout="fill" objectFit="contain" />
    </div>
    <div className="relative h-full md:hidden">
      <Image src={bgImageSrc} layout="responsive" width="960" height="461" />
    </div>
  </div>
}