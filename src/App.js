import React, { useState } from 'react'
import Header from './student/Header'
import data from './student/data'
import Posts from './student/Posts'

const App = () => {
  const [datum,setData]=useState(data)
  return (
    <div>
    <Header/>
    <Posts datum={datum}/>
    </div>
  )
}

export default App
//---------------------------------------------------------------------------
// import React from 'react'
// import MyProfile from './myprofile/MyProfile'
// import Header from './myprofile/Header'

// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <MyProfile/>
//     </div>
//   )
// }

// export default App
//-----------------------------------------------------------------------------
// import React from 'react'
// import Create from './createpost/Create'

// const App = () => {
//   return (
//     <div>
//       <Create />
//     </div>
//   )
// }

// export default App
//---------------------------------------------------------------
// import Dashboard from "./modal/Dashboard";
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <Dashboard/>
//     </div>
//   )
// }

// export default App