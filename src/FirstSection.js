import React from "react";

function FirstSection(){
    return(
    <>
    <section>
            <h1>Welcome <br/>
                to Our Cuisine 
                Restaurant</h1>
            <form action="" className="paddingBase">
                <input type="text" placeholder="search here" className="paddingBase"/>
                <button className="paddingBase">Location</button>   
            </form>
            <span><i className="fab fa-facebook-f colorBase"></i>252k</span>
            <span><i className="fab fa-twitter colorBase"></i> 62k</span>
            <span><i className="fab fa-instagram colorBase"></i> 55k</span>
        </section>
    </>
    )
}

export default FirstSection;