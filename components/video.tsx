'use client';
import YouTube, { YouTubeProps } from 'react-youtube';

export default function Video({VideoURL}:{VideoURL: string}){
  const YouTubeURL = VideoURL.replace("https://www.youtube.com/watch?v=","");
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
    event.target.playVideo();
  }
  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      controls: 0,
      enablejsapi: 1,
      fs: 0,
      iv_load_policy: 3,
      loop: 1,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
      start: 10,
    },
  };
    return(
      <>
        <YouTube videoId={YouTubeURL} className="video-responsive" opts={opts} onReady={onPlayerReady} />
        </>
    )
}


  