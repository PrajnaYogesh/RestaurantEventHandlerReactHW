import React from 'react'
import './Navbar.css'

function Navbar({currentUser,logOutUser,signInUser,setSelectedItem,breakfast,lunch,dinner}) {

  return (
    <>
    <div className="navbar">

      <div className="navLogo">
        <img className="navLogo1" src="https://static.vecteezy.com/system/resources/previews/006/945/227/original/vintage-gold-restaurant-logo-and-badge-template-vector.jpg" alt="" />
      </div>
    
    <div className="navtog">
    <div className="navtab" value="breakfast" onClick={()=>{setSelectedItem(breakfast)}}>Breakfast</div>
    <div className="navtab"value="lunch" onClick={()=>{setSelectedItem(lunch)}}>Lunch</div>
    <div className="navtab" value="dinner" onClick={()=>{setSelectedItem(dinner)}}>Dinner</div>
    </div>
    <div className="profileNav">
    {currentUser.isLoggedIn ? <p>Welcome <span style={{color:'peru'}}> {currentUser.name} {'|'} {currentUser.email} </span> </p> :<p>Welcome {currentUser.name} </p> }

 {currentUser.isLoggedIn ? <button  className='btnStyle' onClick={logOutUser}>Log out</button> : <button className='btnStyle' onClick={signInUser}>Sign In</button>}

</div>
  </div>


  </>
  )
}

export default Navbar