import React from 'react'
// use RouteError hook contains all info related to url error like status code, status message etc
import { useRouteError, Link } from 'react-router-dom'
const Error = () => {
  return (
    <>
    <div>OOPS...</div>
    <div>something went wrong</div>
    <div>status: {useRouteError().status}</div>
    <Link to={'/'}>back to home</Link>
    </>
  )
}

export default Error