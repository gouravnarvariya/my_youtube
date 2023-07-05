import React from 'react'
import Button from './Button'

const list = ["All","Gaming","Sports","Cricket","Football","Cars","Likes videos",]

const ButtonList = () => {
  return (
    <div className='flex py-2 '>
   
    {list.map((props)=>{
      console.log(props);
        return (
           
        <Button key={props} name={props} />)
    })}
    </div>
  )
}

export default ButtonList;