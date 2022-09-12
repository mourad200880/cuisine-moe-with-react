import React from "react";
import background from "./image/secondPage.jpg"

function SecondSection(){
    return (
        <>
            <section className="second_page borderBase" style={
                { background : `url(${background})`}
            }>
        <article>
            <div className="articleContent">
                <span>About Us</span>
                <h2>Discover Our <br/> Restaurant Story</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe incidunt, 
                repellendus, distinctio odit minima perspiciatis, mollitia ex 
                nam culpa dignissimos a ipsum maxime itaque praesentium Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ipsam, ducimus iure. A sit odit rerum animi facere qui, 
                labore ea quasi earum officia suscipit,
                aspernatur expedita et dolor, ratione minus.  
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quia!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, harum
                </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus totam, veritatis consequatur quis magni libero excepturi quam, itaque ipsam obcaecati rem. 
                Aperiam maxime aliquam dolore mollitia velit inventore! Totam, deleniti!</p>
                <button className="btn paddingBase colorBase"><a href="#" className="paddingBase">Discover Menu</a>
                    <i className="fas fa-arrow-alt-circle-right paddingBase colorBase"></i>
                </button>
            </div>
        </article>
            </section>
        </>
    )
}

export default SecondSection;