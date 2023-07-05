import React from 'react'
import { useSelector } from 'react-redux'





const Sidebar = () => {
  const showBar = useSelector((store) => store.app.isMenuOpen);

  if(!showBar) return null;
  return (
    <div>
        <ul className='border border-gray-100 shadow-inner'>
            <li>home</li>
            <li>shorts</li>
            <li>subscription</li>
        </ul>
        <ul className='border border-gray-100 shadow-inner'>
            <li>library</li>
            <li>history</li>
            <li>liked videos</li>
            <li>show more</li>
        </ul>
        <div  className='border border-gray-100 shadow-inner'>
        <h1>Subscription</h1>
        <ul >
            <li>take u forward</li>
            <li>browse videos</li>   
        </ul>
        </div>
        <div  className='border border-gray-100 shadow-inner'>
        <h1>Explore</h1>
        <ul>
        <li>trending</li>
        <li>shopping</li>
        <li>music</li>
        <li>live</li>
        </ul>
        </div>
    </div>
  )
}

export default Sidebar