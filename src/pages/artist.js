import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

const ArtistPage = () => (
  <Layout>
    <Header></Header>
    <section class="art-container">
        <span class="art-box">
            <h2 class="art-title"> Handcrafted Shoes</h2>
                <img class="images" src="images/alexisshoes.jpg"
                alt="hand drawn shoes with flowers adn birds"/> 
                <p class="para2"> Made: April 2nd for my friend Alexis RN pinning Ceramony. <br/>These shoes were crafted using marker and pen.<br/> The inspiration came from her love of flowers and birds. <br/>It took less than 6 hours to make.  </p>
        </span>
        <span class="art-box">
            <h2 class="art-title"> Pen Drawings</h2>
                <img class="images" src="images/columbus.jpg" /> 
                <p class="para2"> Columbus from COSI</p>
        </span>                   
        <span class="art-box">
            <h4 class="art-title">Marker Drawings</h4>
                <img class="images" src="images/rick.jpg"/>  
                <p class="para2"> Rick Sanchez from Rick and Morty </p>
        </span> 
        <span class="art-box">
            <h4 class="art-title">Photography</h4>
                <img src="images/450CE775-0A16-43BF-A6AD-0042ED8E377F_1_105_c.jpeg" width="400" height="500"/>  
                <p class="para2">Rigs, an old roommates dog</p>
        </span>
        <span class="art-box">
            <h4 class="art-title">Charcoal</h4>
                <img src="images/mario2.jpg" width="400" height="500"/>  
                <p class="para2">Mario just for fun</p>
        </span> 
        <span class="art-box">
            <h4 class="art-title">Phone Art</h4>
                <img src="images/alien-birthday.png" width="400" height="500"/>  
                <p class="para2">Birthday greeting created on a Samsung Note 5, using Adobe</p>
        </span> 
        <span class="art-box">
            <h4 class="art-title">Digital Art</h4>
                <img src="images/selfport.jpg" width="500" height="600"/>  
                <p class="para2">Part of an art final project<br/>Airbrush, linework, paint, paint and airbrush</p>
            </span> 
    </section>
  </Layout>
)

export default ArtistPage
