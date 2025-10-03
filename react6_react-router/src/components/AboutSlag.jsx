import React from 'react'
import { useParams } from 'react-router-dom'

const AboutSlag = () => {
  const {aboutId} = useParams()  
  return (
    <div>your slag for about page is '{aboutId}'</div>
  )
}

export default AboutSlag