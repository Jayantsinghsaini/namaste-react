 import React from 'react'
 import { Link } from 'react-router-dom'
 const Header = () => {
   return (

     <header>
{/* this is Link component that cant reload page when navigating  */}
     <li><Link to={'/'}>Home</Link></li>
     <li><Link to={'/about'}>About</Link></li>
     <li><Link to={'/contact'}>Contact</Link></li>
     
     </header>
   )
 }
 
 export default Header