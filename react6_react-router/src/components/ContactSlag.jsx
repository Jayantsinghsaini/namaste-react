import React from 'react'
import { useParams } from 'react-router-dom'

const ContactSlag = () => {
    const { contactId } = useParams();
    return (
        <div>your slag for contact page is '{contactId}'</div>
    )
}

export default ContactSlag