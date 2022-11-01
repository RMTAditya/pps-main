import React,{useState} from 'react'
import './Posts.css'
import data from './data'

const Posts = ({datum}) => {
    return (
    <>
    {datum.filter(data=>data.status!=='waiting for admin approval')
    .map((data)=>{
    const {title,desc,date,status,createdby}=data
    return(
    <div className='s-post' onClick={() => console.log('clicked')}>
        <div className="s-head">
            Posted by : {createdby}
        </div>
        <div className="s-title">
            {title}
        </div>
        <div className="s-description">
            {desc}
        </div>
        <div className="s-foot">
            <div className="s-left">
                <p>date created : {date}</p>
            </div>
            <div className="s-right">
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