'use client';
import Image from 'next/image';

export const WebScreenshot = ({ url, name }) => {
  const cleanname = name.replace(/ /g, '+');
  return (
    <div className="h-[162px] w-[216px]">
            <Image
              src={`/images/${cleanname}.png`}
              height={768}
              width={1024}
              alt={`${url} screenshot`}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className="justify-center"
              /> 
              </div>
  )
};

export const WebScreenshotDetails = ({ url, name }) => {
  const cleanname = name.replace(/ /g, '+');
  return (
    <div className="h-[225px] w-[300px]">
            <Image
              src={`/images/${cleanname}.png`}
              height={768}
              width={1024}
              alt={`${url} screenshot`}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              /> 
              </div>
  )
};