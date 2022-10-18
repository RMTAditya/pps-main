import React,{useState} from 'react'
import './Posts.css'
import data from './data'

const Posts = ({datum}) => {
    return (
    <>
    {datum.map((data)=>{
    const {title,desc,date,status}=data
    return(
    <div className='post'>
        <div className="title">
            {title}
        </div>
        <div className="description">
            {desc}
        </div>
        <div className="foot">
            <div className="left">
                <p>date created : {date}</p>
            </div>
            <div className="right">
                <p>status : {status}</p>
            </div>
        </div>
    </div>
    )
    })}
    </>
  )
}

export default Posts