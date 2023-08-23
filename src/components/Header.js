const Header = () =>  {
  return (
    <div  className='Header'>
      <div className="logo">
      <img src="https://becode.org/wp-content/uploads/2023/01/becode-logo.png" alt="lolo img"  width= "80"/>
       <h1>aqanda</h1>
      </div>
      <div className="navbar navbar-men">
        <a href="/Register">Register</a>
        <a href="/About">About</a>
      </div>
    </div>
  )
}

export default Header;