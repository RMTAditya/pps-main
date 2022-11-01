import React,{useState} from 'react'
import './Posts.css'
const Posts = ({datum}) => {
    return (
    <>
    {datum.map((data)=>{
    const {id,title,desc,date,status}=data
    return(
        <div className="p-posts">
        <p>Post no : {id}</p>
        <div className="p-title">
          {title}
        </div>
        <div className="p-desc">
          {desc}
        </div>
        <div className="p-foot">
          <p className='p-date'>date posted : {date}</p>
          <h4 className='p-status'>status : {status}</h4>
        </div>
      </div>
    )
    })}
    </>
  )
}

export default Posts