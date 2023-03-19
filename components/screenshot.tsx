'use client';
import { useEffect, useState } from 'react';
import ImageWithFallback from './image-handler';

export const WebScreenshot = ({ url }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`/api/screenshot${url ? `?url=${url}` : ''}`, { next: { revalidate: 60 } })
      .then((res) => res.json())
      .then((res) => setData(res.blob))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {!data ? <p>Loading...</p> : <ImageWithFallback
                                        width={216}
                                        height={128}
                                        src={data}
                                        alt={`${url} screenshot`}
                                        fallbackSrc={'/images/HRHNY_TheVenueWide2.jpg'}
                                        /> }
    </div>
  );
};