import React from 'react';

interface BannerProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  cta: string;
  ctatext: string;
  details: string;
}

const Banner: React.FC<BannerProps> = ({ backgroundImage, title, subtitle, cta, ctatext, details }) => {
    return (
        <div className={`relative h-96 w-full bg-gray-900 bg-cover bg-center bg-no-repeat text-gray-100`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='bottom-0 right-0 z-0 h-full bg-gradient-to-l from-black opacity-90 max-md:bg-black max-md:opacity-50'></div>
            <div className="z-1 absolute bottom-4 right-4 w-2/5 p-4 max-md:bottom-0 max-md:right-0 max-md:flex max-md:h-full max-md:w-full max-md:flex-col max-md:items-start max-md:justify-center max-md:p-16">
                <h1 className='text-2xl mb-1 font-bold'>{title}</h1>
                <p className='text-sm font-normal mb-5 max-md:mb-12'>{subtitle}</p>
                <div>
                    <a href={`${cta}`} className='inline-block px-7 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 dark:bg-slate-700 dark:hover:bg-slate-600 transition-all duration-300'>{ctatext}</a>
                    <a href={`${details}`} className='ml-4 hover:underline '>Learn more &gt;</a>
                </div>
            </div>
        </div>
    )
}


export default Banner;
