import React from 'react'
import './MyProfile.css'
import Profile from './Profile'
import mydata from './mydata'
import Posts from './Posts'
import mypost from './mypost'
// import Posts from '../student/Posts'

const MyProfile = () => {
  return (
    <div className='main'>
      <div className="left">
        <a href=''>My Profile</a>
        <a href=''>My Posts</a>
        <a href=''>Approved Posts</a>
      </div>
      <div className="center">
        {/* <Profile datum={mydata}/> */}
        {/* <div className="posts">
          <p>Post no : 1</p>
          <div className="title">
            title
          </div>
          <div className="desc">
            description
          </div>
          <div className="foot">
            <p>date posted : dd/mm/yyyy</p>
            <h4>status : mentor allocated</h4>
          </div>
        </div>*/}
        <Posts datum={mypost}/>
      </div> 
      <div className="right">
        <div className="posts">
          <h4>No of posts</h4>
          <h1>30</h1>
        </div>
        <div className="approved">
          <h4>No of approved ideas</h4>
          <h1>10</h1>
        </div>
        
      </div>
    </div>
  )
}

export default MyProfile