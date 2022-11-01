import React from 'react'
import './Create.css'
import {CgMinimizeAlt} from 'react-icons/cg'
import {FiMaximize2} from 'react-icons/fi'
import {VscChromeClose} from 'react-icons/vsc'

const Create = () => {
  // console.log('height'+ window.innerHeight)
  // console.log('width'+ window.innerWidth)
  // let h=window.innerHeight
  // let w=window.innerWidth
  return (

    // <div className='create'>
    //     <VscChromeClose style={{'padding-left':'10px', 'float':'right' }}/>
    //   <FiMaximize2 style={{'padding-left':'10px', 'float':'right'}}/>
    //     <CgMinimizeAlt style={{'padding-left':'10px', 'float':'right'}}/>
    //     <div className="header">
    //       Create Post
    //     </div>
    //     <div className="main">
    //         <input type="text" className='title' placeholder='title'/>
    //         <input type="text" className='desc' placeholder='description'/>
    //     </div>
    //     <button className='submit' >Submit</button>
    // </div>
    <div className='create'>
      {/* <VscChromeClose style={{'padding':'10px', 'float':'right','fontSize':'35px' }} onClick={handleClose}/> */}
      <h1 className='head'>Create Post</h1>      
      <form>
      <input type="text" className='create-title' placeholder='title'></input>
          <textarea className="create-desc" placeholder='descripton'></textarea>
          <textarea className='create-lor' placeholder='list of requirements'></textarea>
          <div className='create-foot'>
            <input className='create-budget' placeholder='Budget'></input>
            <input className='create-time' placeholder='Time required'></input>
            <input className='create-asset' placeholder='Assets Required'></input>
          </div>
      </form>
      <button className='create-submit'>Submit</button>
      {/* <h1>
        width : {w}<br/>
        height : {h}
      </h1> */}
    </div>
  )
}

export default Create