import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

const CartographerPage = () => (
  <Layout>
    <Header></Header>
    <section class="art-container"> 
        <span class="art-box">
            <h3 class="art-title"> Social vulnerability <br/>after Hurricane Katrina</h3>
            <img class="images" src="images/social vulnerbility.jpg" width="300" height="200"/>         
        </span>  
        <span class="art-box">
            <h3 class="art-title"> Walkability Project</h3>
            <img class="images" src="images/residential study area.jpg" width="300" height="200"/>         
            <p class="para2"> What is the overall objective of the project? 
                <br/>The purpose of the project is to assess the walkability of a section of downtown Dayton.
                <br/>This project will require that students complete a project using the GIS workflow.   
                <br/>The project will be divided into these phases and each phase will focus on key deliverables.
                <br/>The deliverables will be completed by either an individual student, team, or the class.  
            </p>
        </span>                     
        <span class="art-box">
            <h3 class="art-title">Wright Dunbar Service<br/> Learning Project</h3>      
            <img class="images" src="images/Dunbar Age of House FINAL COPY.jpg"  width="300" height="200"/>         
            <p class="para2"> Service Learning project done at Sinclair Community College.
                <br/> The concept was to map unique characteristics in the 
                <br/>Historical Wright Dunbar Neighborhod, Fall of 2015 </p>                     
        </span>
        <span class="art-box">
            <h3 class="art-title">3D rendering fly thru of OSU</h3>
                <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/ukH2uMqcwzE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                </iframe>
            <p class="para2">Using Arc Scene to create a 3D landscape and fly through</p>
        </span>
    </section>
  </Layout>
)

export default CartographerPage
