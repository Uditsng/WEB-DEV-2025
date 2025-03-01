import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const navigate = useNavigate()

  const logIn = ()=>{
    setisLoggedIn(true)
    navigate('/dashboard') // Navigate after Logged In
  }

  const logOut = ()=>{
    setisLoggedIn(false)
    navigate('/')
  }
  return (
    <div className='nav_bar'>
    <Link  to={'/'} className='left items'>MyCompany.in</Link>
        <div className='right'>

          {isLoggedIn && (
            <>
            <Link className="items" to={'/teams'}> Team </Link>
            <Link className="items" to={'/courses'}> Course </Link>
            <Link className="items" to={'/dashboard'}> Dashboard </Link>
            <Link className="items" to={'/profile'}> Profile </Link>
            <button className="items" style={{fontWeight:'bold', backgroundColor:'red'}} onClick={logOut}>LogOut</button>
            </>
          )}

          {!isLoggedIn && (
            <>
            <Link className="items" to={'/about'}> About </Link>
            <button className="items" style={{fontWeight:'bold', backgroundColor:'red'}} onClick={logIn}>LogIn</button>
            <Link className="items" to={'/contact'}> Contact </Link>
            </>
          )}

        </div>
    </div>
  )
}

export default NavBar