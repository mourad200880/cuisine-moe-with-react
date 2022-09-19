import React from "react";

import img1 from "./image/img1.jpg"
import img2 from "./image/img2.jpg"
import img3 from "./image/img3.jpg"
import img4 from "./image/img4.jpg"
import img5 from "./image/img5.jpg"
import img6 from "./image/img6.jpg"
import img7 from "./image/img7.jpg"
import img8 from "./image/img8.jpg"
function ThirdSection(){
    return(
    <>
        <section className="third_section borderBase">
        <section>
            <span><a href="#">Order Online Now</a></span>
            <h2>Our Specility Cusisne</h2>
            <ul>
                <li><a href="#">Breakfast</a></li>
                <li><a href="#">Launch</a></li>
                <li><a href="#">Dinner</a></li>
                <li><a href="#">Dessert</a></li>
                <li><a href="#">Shake</a></li>
            </ul>
        </section>
        <section className="third_section_subSection">
            <ul>
                <li><a href="#"><img src={img1} alt=""/></a></li>
                <li><a href="#"><img src={img2} alt=""/></a></li>
                <li><a href="#"><img src={img3} alt=""/></a></li>
                <li><a href="#"><img src={img4} alt=""/></a></li>
                <li><a href="#"><img src={img5} alt=""/></a></li>
                <li><a href="#"><img src={img6} alt=""/></a></li>
                <li><a href="#"><img src={img7} alt=""/></a></li>
                <li><a href="#"><img src={img8} alt=""/></a></li>
            </ul>

        </section>

        </section>
    </>
    )
}

export default ThirdSection;