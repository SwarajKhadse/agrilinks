import React from 'react'

function Navbar() {
  return (
    <>
    <nav class="navbar " style={{
        background: "rgb(2,0,36)",
        background: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(76,9,121,1) 50%, rgba(175,0,255,1) 100%)",
        height:"60px"
    }}>
  
    <span style={{
      color:"white ",
      fontWeight:"bold",
      textAlign:"center",
      marginLeft:"auto",
      marginRight:"auto",
      fontSize:"20px"
    }}>PROFILE</span>
  
</nav>
    </>
  )
}

export default Navbar