import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  cta: string;
  ctatext: string;
  details: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, subtitle, cta, ctatext, details }) => {
  return (
    <div className=" bg-white dark:bg-zinc-800 rounded-xl drop-shadow-lg w-4/5 h-80 flex items-center overflow-hidden max-sm:flex-col max-sm:w-4/5 max-sm:max-w-xs max-sm:h-[30rem]">
        <div className="h-full w-2/5 bg-center bg-no-repeat bg-cover bg-white max-sm:w-full max-sm:h-" style={{ backgroundImage: `url(${imageSrc})`}}> </div>
        <div className=" text-gray-900 dark:text-gray-100 w-3/5 h-full p-7 flex flex-col justify-center max-sm:w-full">
          <h1 className="text-2xl font-extrabold mb-3 max-sm:text-xl max-sm:mb-1">{title}</h1>
          <p className="text-sm font-normal text-gray-700 dark:text-gray-300 mb-7 max-sm:text-xs">{subtitle}</p>
          <div>
            <a href={`${cta}`} className='px-7 py-2 rounded-lg text-md text-white bg-gradient-to-br from-indigo-600 to-red-500 hover:px-12 hover:rounded-3xl hover:py-3 transition-all duration-700 max-sm:text-sm '>{ctatext}</a>
            <a href={`${details}`} className='ml-7 text-gray-900 dark:text-gray-100 text-md hover:underline'>Learn more &gt;</a>
          </div>
        </div>
    </div>
  );
};

export default Card;
