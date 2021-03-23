import React from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'

const SignIn = () => {
    return (
        <>
            <NavBar />

            <div className="container  mt-5 mb-3">
                <div className="col-md-6 offset-md-3 shadow-lg p-5">
                    <form>


                        <div className="col-12 mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>

                        <div className="col-12 mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>



                        <div className="col-8 mt-2 offset-md-2">
                            <button className="btn btn-primary form-control">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default SignIn
