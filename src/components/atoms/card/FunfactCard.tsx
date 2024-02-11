import React from 'react';

interface HoverInfoProps {
  funcfact?: string;
  imgSrc?: string;
}

const FunfactCard: React.FC<HoverInfoProps> = ({ funcfact, imgSrc }) => {
  return (
    <div className='absolute inset-0 bg-white w-full h-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-[95%] px-6'>
      <p className='text-lg font-semibold text-black'>{funcfact}</p>
      <p className='text-md text-black absolute bottom-3 '>
        📷 <span className='ml-1'>{imgSrc}</span>
      </p>
    </div>
  );
};
export default FunfactCard;
