import React,{useState} from 'react'
import './MyProfile.css'
import Profile from './Profile'
import mydata from './mydata'
import Posts from './Posts'
import mypost from './mypost'
import './Posts.css'
// import Posts from '../student/Posts'

const MyProfile = () => {
  const[showDetails, setShowDetails]= useState(true);
  const[showPosts, setShowPosts]= useState(false);
  const[showApproved, setShowApproved]= useState(false);

  const handleClick1=()=>{
    setShowDetails(!showDetails)
    setShowPosts(showPosts)
    setShowApproved(showApproved)
  }
  const handleClick2=()=>{
    setShowDetails(showDetails)
    setShowPosts(!showPosts)
    setShowApproved(showApproved)
  }
  const handleClick3=()=>{
    setShowDetails(showDetails)
    setShowPosts(showPosts)
    setShowApproved(!showApproved)
  }
  console.log(mydata.length)
  return (
    // <div className='main'>
    //   <div className="left">
    //     <a href=''>My Profile</a>
    //     <a href=''>My Posts</a>
    //     <a href=''>Approved Posts</a>
    //   </div>
    //   <div className="center">
    //     {/* <Profile datum={mydata}/> */}
    //     {/* <div className="posts">
    //       <p>Post no : 1</p>
    //       <div className="title">
    //         title
    //       </div>
    //       <div className="desc">
    //         description
    //       </div>
    //       <div className="foot">
    //         <p>date posted : dd/mm/yyyy</p>
    //         <h4>status : mentor allocated</h4>
    //       </div>
    //     </div>*/}
    //     <Posts datum={mypost}/>
    //   </div> 
    //   <div className="right">
    //     <div className="posts">
    //       <h4>No of posts</h4>
    //       <h1>30</h1>
    //     </div>
    //     <div className="approved">
    //       <h4>No of approved ideas</h4>
    //       <h1>10</h1>
    //     </div>
        
    //   </div>
    // </div>
    <div className='main-page'>
      <div className="main-header">My Profile</div>
      <div className='main'>
      <div className="main-sidebar">

        <button className='my-details' onClick={handleClick1}>My Details</button><br/>
        <button className='my-posts' onClick={handleClick2}>My Posts</button><br/>
        <button className='my-app-posts' onClick={handleClick3}>Approved Posts</button>
        </div>
        {showDetails && 
        <div className='details'>
          <Profile datum={mydata}/>
        </div>
        }
        {showPosts && 
        <div className='posts'>
          <Posts datum={mypost}/>
        </div>
        }
        {showApproved && 
        <div className='approved'>
          {mypost.filter(data=>data.status!=='waiting for Admin approval')
          .map((data)=>{
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
        </div>
        }
      
      </div>
    </div>
  )
}

export default MyProfile