import React from 'react'
import Slider from "react-slick";

const Trending = () => {
    const settings = {
        
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="container">
                <div className="row mt-3 mb-5">
                    <Slider {...settings}>
                        <div>
                            <img src="images/s1.jpg" className="img-fluid" style={{height:'200px'}}/> 
                        </div>
                        <div>
                            <img src="images/s2.jpg" className="img-fluid" style={{height:'200px'}}/> 
                        </div>
                        <div>
                            <img src="images/s3.jpg" className="img-fluid" style={{height:'200px'}}/> 
                        </div>
                        <div>
                            <img src="images/s4.jpg" className="img-fluid" style={{height:'200px'}}/> 
                        </div>
                        <div>
                            <img src="images/s5.jpg" className="img-fluid" style={{height:'200px'}}/> 
                        </div>
                        <div>
                            <img src="images/s6.jpg" className="img-fluid" style={{height:'200px'}}/> 
                        </div>
                        <div>
                            <img src="images/s7.jpg" className="img-fluid" style={{height:'200px'}}/> 
                        </div>
                        <div>
                            <img src="images/s8.jpg" className="img-fluid" style={{height:'200px'}}/> 
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Trending
