import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/Appslice";
import { youtubeSuggestionAPI } from "../Utils/constants/URLs";

const Head = () => {
  const getSearchApi = async (searchData) => {
    const data = await fetch(youtubeSuggestionAPI + searchData);
    const json = await data.json();
    setSuggestion(json[1]);
  };

  const [searchData, setSearchData] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const [showSuggestionBar, setShowSuggestionBar] = useState(false);
  // console.log(suggestions);
  useEffect(() => {
    const timer = setTimeout(() => getSearchApi(searchData), 200);
    // console.log(searchData);
    return () => {
      clearTimeout(timer);
    };
  }, [searchData]);
  const dispatch = useDispatch();
  function HandleClick() {
    dispatch(toggleMenu());
    
  }
  // console.log(showSuggestionBar);
  return (
    <div className="flex p-5 m-x-2 bg-pink-50 justify-between ">
      <div className="flex">
        <img
          onClick={() => HandleClick()}
          className="h-8 p-2"
          alt="threeIcon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRojv7Oj8PKFW1hRUATZpX-gCyeKY49Vq-rKL3d3K2F_g&s"
        ></img>
        <img
          className="h-8 "
          alt="youtubeLogo"
          src="data:image/png;base64,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"
        ></img>
      </div>
      <div>
        <input
          onChange={(e) => {
            setSearchData(e.target.value);
            // console.log(searchData);
          }}
          className="w-96 rounded-md border border-gray-50 shadow-sm px-2"
          type="text"
          value={searchData}
          onFocus={()=>{setShowSuggestionBar(true)}}
          onBlur={()=>{setShowSuggestionBar(false)}}
          
        ></input>
        
        <button>🔍</button>
        
          { showSuggestionBar && (
            <div className=" py-3 px-2 fixed w-96 rounded-md  shadow-sm ">
            <ul className="bg-white">
          {
            suggestions.map((name)=>{
              return(
                <li className=" py-1 hover:bg-gray-100 "  key={name}>🔍 {name}</li>
              )
            })
          }
            
          </ul>
          </div>)}
        
      </div>
      <div>
        <img
          className="h-8 p-2"
          alt="userIcon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAAAAv+uv7AAAAY1BMVEX///8AAAD6+vqGhoawsLDFxcXX19fp6emrq6v39/eQkJB1dXW3t7fQ0NDa2toODg5oaGjj4+OlpaUbGxsmJiaZmZlISEg5OTm9vb0VFRVgYGBDQ0N7e3ufn59bW1stLS1RUVEOCsBAAAAEK0lEQVR4nO1aW4OyIBDdvJGUl7Ysy1r7/7/y27ZlGKx0hKH9HjivIhxhOHPz4yMgICAgICAgICAg4O+QZ+uLlPKSZPkfsiiTc7VAWCXZX9AQyd6g8YNqvxRv5pE3uwcad+yatx7T5QWNO5q38Siuo0QWi33xHiLLCR43fL6BR1QTiCwWJ+/Wkn89LLrt+377cI+unqlEe3O9Pl4XpRCiLNbyYD46eKUSGbZ6kKZ4CJOM111Z4UO5PIqYuGCZqf0RSdAyq+diKs5ozNIXkZK0SIKM15MfitC1GZOu4qhNJfLCBCnaZnTgRg/0o3AwfTUl5mhXfGzK54wP1abtwRvmoBWUywnXveePV1r4TMrcAi7Qmp3JSU0tScMbNfyLm8hmO2+7hTrMbcnMZK2+8Ux8IfZ1PFJNTP3Eci51KpRn25EFAo6Hmcn8L4Tj4SUi5ss3OIdx1zAXqZq29fkKBXB16PlDpsQtYWWiHElFV4eNcoO88ZI69CP90MXWC5P/Z08s7KRQr/DaCUxL125w3ikrE9ATeuQDkRWvnoDG0nMYCJaYA0jlRSrqvBGEEbxEtC+mmmymXoiZmYD9UY8Hihu8Yv9tsv3vxMQYbANhBLPBom9ckYZDTHDiJqJdKynZ1Sk0r5rckHdqbkqyCyl056GIovO66dsAN81PYqyrEVM+TZOufBDRXnDq8As9kD8D/AGqbY3tCqo8+apvCVQtil+ZbRTrQdzOT6NFi1yfy36G67Xc8orQoGUW9aOwlLg4SczlLWGsVJ3aXB9SlKf1ET+mibE1hlX7k1ymWZmlS1kPCuYeq7F3nBc0eN6RG5ppFjcb8VP/NJH2kzx2/H7vGcT0Ab0opTPziLeTRL6vVeybSz7ei8SQXvs76WGaAaD35P4+Bi6FgpWnbSmeNKu7WspmmSwbKev94+OjlzuUDFapurgVhtqLNH7o8HtoNsnBEvK5Ly6GwsedeA26xNcxY2zNRu6JVW0jQ8y6dnzyqO3wcFa7NYKBhvCRhuwwOkO8IydiB6H2QQX/0hBTtzrCJs6U9aRoyjk1M5SV8ES0Qnu8ap5QocbkkcMh1rZEDCoMrS9y5veUCj2DnYTQAZrNWWsbc67o6Ats17vS7tsx1tcVGdvakDYzt9+oQFxntA5M6KvntCl6S+y1SeuiS78WtuTgMEnHsClQynSq28H9cWhiQxPg6kAElf8u1lNsObYEVbusq27wb03nFnbpf89sj6dx39U74JQtazs6dnUVauhTWca0QnlSlyt8B1xku+AAOjSuh4PUzU7xP91exyjcPkqZycE93hLqeOwCJvU2R4dG/eXU2bwMv41x5AjKgVn9NAvRGkeBV2ViVpEbxKAc6T4UGmys36KB/xpOrf3U5eUhCpfJyviOM0drRJx/Z+P+zy4gICAgICAgICAg4I5/7tEmZgN0dXwAAAAASUVORK5CYII="
        ></img>
      </div>
    </div>
  );
};

export default Head;
