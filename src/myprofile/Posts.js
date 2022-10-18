import React,{useState} from 'react'

const Posts = ({datum}) => {
    return (
    <>
    {datum.map((data)=>{
    const {id,title,desc,date,status}=data
    return(
        <div className="posts">
        <p>Post no : {id}</p>
        <div className="title">
          {title}
        </div>
        <div className="desc">
          {desc}
        </div>
        <div className="foot">
          <p>date posted : {date}</p>
          <h4>status : {status}</h4>
        </div>
      </div>
    )
    })}
    </>
  )
}

export default Posts