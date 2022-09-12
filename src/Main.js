import React from "react";
import Header from "./Header";
import FirstSection from "./FirstSection";
import MainBg from "./image/mainBg.jpg"


function Main(){
   return(

    <main style={{
        background: `url(${MainBg})`
    }}>
        <Header></Header>
        <FirstSection></FirstSection>
    </main>
   ) 
}

export default Main;