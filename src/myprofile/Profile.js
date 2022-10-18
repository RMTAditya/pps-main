import React,{useState} from 'react'
// import mydata from './mydata'

const Profile = ({datum}) => {
    return (
    <>
    {datum.map((data)=>{
    const {username,email_id,department}=data
    return(
        <div className="profile">
        <h4>Name : {username}</h4>
        <p>Email id : {email_id}</p>
        <p>Department : {department}</p>
      </div>
    )
    })}
    </>
  )
}

export default Profile