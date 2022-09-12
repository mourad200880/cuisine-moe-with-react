import React from "react";

function Header(){
    return(

        <>
            <header>
            <a href="#" id="logo" className="colorBase">レストランのキッチン</a>
            <nav>
                <span className="humburgerMenu">
                    <i className="fas fa-bars hidden colorBase"></i>
                    <i className="fa fa-bars-staggered colorBase"></i>
                </span>
                <ul className="hamburgerMenuNav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Order New</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Location</a></li>
                </ul>
                <form action="">
                    <input type="text" placeholder="search"/>
                    <i className="fas fa-search colorBase"></i>
                </form>
            </nav>
            
            </header>
        </>
    )
}


export default Header;