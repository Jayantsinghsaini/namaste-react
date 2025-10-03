import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
// <Outlet /> is a placeholder component in React Router.
// It tells React Router where to render child (nested) routes inside a parent route.
// Without <Outlet />, child routes won’t appear even if they exist in the route config.
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout