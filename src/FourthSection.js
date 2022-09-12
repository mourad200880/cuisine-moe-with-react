import React from "react";

function FourthSection(){
    return(
        <>
            <section className="fourth_section borderBase clearfix" style={{
            }}>
            <section className="fourth_section_one">
                <span><a href="#">Book Now</a></span>
                <h3>Opening Hours</h3>
                <div>
                    <i className="fas fa-phone-alt colorBase"></i>
                    <h3>Call Now</h3>
                    <p>+213-5-51-16-97-99</p>
                </div>
                <ul>
                    <li>
                        <h5>Monday to Tuesday</h5>
                        <span>09:00 am - 22:00 pm</span>  
                    </li>
                    <li>
                        <h5>Friday to Sunday</h5>
                        <span>11:00 am - 20:00 pm</span>
                    </li>
                </ul>
                <div className="videoContainer">
                    <div className="icon">
                        <i className="fas fa-angle-left colorBase"></i>
                    </div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/mdqIDKD1-Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        
                        </iframe>
                    <div className="icon">
                        <i className="fas fa-angle-right colorBase"></i>
                    </div>
                </div>
            </section>
            <section className="fourth_section_two">
                <span><a href="#" className="colorBase">Testimonials</a></span>
                <h3>Customer Say</h3>
                <img src="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDgzNDc5NjcyNTQz/portrait-of-john-smith.jpg" alt="this is John Smith"/>
                <span>Mr. John Smith</span>
                <div className="rate">
                    <i className="fas fa-star colorBase"></i>
                    <i className="fas fa-star colorBase"></i>
                    <i className="fas fa-star colorBase"></i>
                    <i className="fas fa-star colorBase"></i>
                    <i className="fas fa-star-half-alt colorBase"></i>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Suscipit impedit commodi voluptate quasi, ipsam obcaecati molestiae doloribus ea voluptatem laudantium?</p>
            </section>
            </section>
        </>
    )
}


export default FourthSection;