import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;

  return (
    <div className=" p-2 m-2 rounded-lg border w-72">
      <img alt="thumbnails" src={thumbnails.medium.url}></img>
      <ul>
        <li className="font-bold py-3">{channelTitle}</li>
        <li className="py-1">{title}</li>
        <li className="py-1">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
