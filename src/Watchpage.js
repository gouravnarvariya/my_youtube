import React from "react";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { closeMenu } from "./Utils/Appslice";
import { useDispatch } from "react-redux";

const Watchpage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  let [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h1>watchPage</h1>
    </div>
  );
};

export default Watchpage;
