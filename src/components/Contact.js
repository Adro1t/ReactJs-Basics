import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import ContactForm from './ContactForm'
import Map from './Map'

const Contact = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-5 mb-3">
                <div className="row">
                    <ContactForm />
                    <Map />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
