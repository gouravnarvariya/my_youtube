import React, { useEffect, useState } from 'react'
import { youtubeUrl } from '../Utils/constants/URLs';
import VideoCard from './VideoCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';


const VideoContainer = () => {
 


    const [videos, setVideos] = useState([]);
    useEffect(()=>{GetData();},[])
    async function GetData(){
        const data = await fetch(youtubeUrl);
        const json = await data.json();
        setVideos(json.items);
       };  
       if(videos.length===0) return <Shimmer/>
    
  return (
    <div className='flex flex-wrap py-2'>
    {
      videos.map((props)=>{
        return(
          <Link key={props.id} to={"/watch?v=" + props.id }>
          <VideoCard  info={props}/>
          </Link>
        );
      })
    }
    
   
    </div>
  )
}

export default VideoContainer