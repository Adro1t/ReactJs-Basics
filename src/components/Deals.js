import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Day from './Day'
import Week from './Week'


const Deals = () => {
    return (
        <>
            <NavBar />
            <div className="container-fluid">
                <div className="row mt-3">
                    <h2>Deals and Promotions</h2>
                    <span>Shop Today's Deals, Lightning Deals, and limited-time discounts</span>
                    <div className="col-md-2 p-3 shadow" style={{ backgroundColor: '#f5f5f5' }}>
                        <h4>Categories</h4>
                        <form>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Mobile
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Laptop
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Clothes
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Books
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Camera
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Accessories
                                </label>
                            </div>
                            <Link className="text-decoration-none btn btn-info">See more</Link>
                        </form>
                        <div className="mt-2">
                            <h4>Deal Type</h4>
                            <Link to="#" className="text-decoration-none">Deal of the Day</Link> <br />
                            <Link to="#" className="text-decoration-none">Lightning Deal</Link> <br />
                            <Link to="#" className="text-decoration-none">Saving and Sales</Link>   <br />
                            <Link to="#" className="text-decoration-none">Weekend Deals</Link>   <br />

                        </div>
                    </div>

                    <div className="col-md-10">
                        <div className="shadow p-2">
                            <center><h3>Deals of the Day</h3></center>
                        </div>
                        <Day />
                        <div className="shadow p-2">
                            <center><h3>Deals of the Week</h3></center>
                        </div>
                        <Week />
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Deals
