import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import ContactSlag from './components/ContactSlag'
import AboutSlag from './components/AboutSlag'
import Error from './components/Error'

const App = () => {
  
// this is react router
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            // and these are nested router
            children:[
                { path: "/", element: <Body /> },
                { path: "/about", element: <About /> },
                { path: "/contact", element: <Contact /> },
                { path: "/about/:aboutId", element: <AboutSlag /> },
                { path: "/contact/:contactId", element: <ContactSlag /> },
            ],
            errorElement: <Error/>
        },
    ])
    return <RouterProvider router={router}/>
}
export default App