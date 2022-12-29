import React from "react";

function Footer(){
    return(
        <>
        {/* footer */}
    <footer>
        <section className="sectionOne">
            <section className="firstSubSectionOne">
                <h3><a href="#about">About Us</a></h3>
                <a href="#" id="logo" className="colorBase">レストランのキッチン</a>
                <p>moe cuisine is a japanese restaurant with all the japanese food culture on the click of a button.</p>
                <div className="socials">
                    <a href="https://www.facebook.com" className="fa fa-facebook"></a>
                    <a href="https://twitter.com/?lang=fr" className="fa fa-twitter"></a>
                    <a href="https://www.linkedin.com/" className="fa fa-linkedin"></a>
                    <a href="https://www.youtube.com/" className="fa fa-youtube"></a>
                </div>
                
            </section>
            <section className="secondSubSectionOne">
                <h3><a href="#">contact us</a></h3>
                <div className="info">
                    <span className="hours">Mon - Sun    9:00 AM - 8:00 PM </span>
                    <span className="phone">(+1) 510-860-1035</span>
                    <span className="location">848 E 28th St, Brooklyn NY, USA</span>
                    <span className="email">info@moe-cuisine.com</span>
                </div>
            </section>
        </section>
        <section className="sectionTwo">
            <p>© Copyrights 2022 Moe Design by Mourad Haddad</p>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Order New</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Location</a></li>
            </ul>
        </section>


    </footer>
        </>
    )
}

export default Footer;