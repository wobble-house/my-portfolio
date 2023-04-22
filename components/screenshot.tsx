'use client';
import Image from 'next/image';

export const WebScreenshot = ({ url, name }) => {
  const cleanname = name.replace(/ /g, '+');
  return (
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
  )
};

export const WebScreenshotDetails = ({ url, name }) => {
  const cleanname = name.replace(/ /g, '+');
  return (
    <Image
      src={`/images/${cleanname}.png`}
      height={768}
      width={1024}
      alt={`${url} screenshot`}
      sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw"
      /> 
  )
};