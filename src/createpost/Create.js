import React from 'react'
import './Create.css'
import {CgMinimizeAlt} from 'react-icons/cg'
import {FiMaximize2} from 'react-icons/fi'
import {VscChromeClose} from 'react-icons/vsc'

const Create = () => {
 
  return (
    <div className='create'>
        <VscChromeClose style={{'padding-left':'10px', 'float':'right' }}/>
      <FiMaximize2 style={{'padding-left':'10px', 'float':'right'}}/>
        <CgMinimizeAlt style={{'padding-left':'10px', 'float':'right'}}/>
        <div className="header">
          Create Post
        </div>
        <div className="main">
            <input type="text" className='input' placeholder='title'/>
            <input type="text" className='desc' placeholder='description'/>
        </div>
        <button className='submit' >Submit</button>
    </div>
  )
}

export default Create