'use client';
import { useEffect, useState } from 'react';
import ImageWithFallback from './image-handler';

export const WebScreenshot = ({ url }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
        await fetch(`/api/screenshot${url ? `?url=${url}` : ''}`, { next: { revalidate: 60 } })
      .then((res) => res.json())
      .then((res) => setData(res.blob))
      .catch((err) => console.log(err));
    }
    fetchData()
    } , []);
  return (
    <div>
      {!data ? <p>Loading...</p> : <ImageWithFallback
                                        src={data}
                                        height={162}
                                        width={216}
                                        alt={`${url} screenshot`}
                                        fallbackSrc={'/images/HRHNY_TheVenueWide2.jpg'}
                                        /> }
    </div>
  );
};