import React from 'react'

const Week = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-2 mb-3">
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="images/c1.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
                            <div className="card-body">
                                <h5 className="card-title">Laptop</h5>
                                <button className="btn btn-primary">Add to Cart</button>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="images/c2.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
                            <div className="card-body">
                                <h5 className="card-title">Laptop</h5>
                                <button className="btn btn-primary">Add to Cart</button>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="images/c3.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
                            <div className="card-body">
                                <h5 className="card-title">Laptop</h5>
                                <button className="btn btn-primary">Add to Cart</button>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="images/c4.jpg" className="card-img-top" alt="..." style={{ height: '200px' }} />
                            <div className="card-body">
                                <h5 className="card-title">Laptop</h5>
                                <button className="btn btn-primary">Add to Cart</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Week
