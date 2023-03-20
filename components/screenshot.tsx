'use client';
import { useEffect, useState } from 'react';
import ImageWithFallback from './image-handler';
import Image from 'next/image';

export const WebScreenshot = ({ url, name }) => {
  const [data, setData] = useState(null);
  const cleanname = name.replace(/ /g, '+');
  useEffect(() => {
    const fetchData = async () => {
        await fetch(`/api/screenshot${url ? `?url=${url}` : ''}`, { next: { revalidate: 0 }})
      .then((res) => res.json())
      .then((res) => setData(res.blob))
      .catch((err) => console.log(err));
    }
    fetchData()
    }, []);
  return (
    <div>
      {!data ? <Image
                  src={`/images/chromium/${cleanname}.jpeg`}
                  height={162}
                  width={216}
                  alt={`${url} screenshot`}
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                  /> : <ImageWithFallback
                          src={data}
                          height={162}
                          width={216}
                          alt={`${url} screenshot`}
                          fallbackSrc={`/images/chromium/${cleanname}.jpeg`}
                          /> }
                        </div>
                      );
                    };