import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import container from "../style/container.module.css"
import style from "../style/style.module.css"

const CartographerPage = () => (
  <Layout>
    <section className={container.card_container}> 
        <span className={container.child_card}>
            <h3 className={style.child_card_title}> Social vulnerability <br/>after Hurricane Katrina</h3>
            <img className={container.image_container} src="images/social vulnerbility.jpg"/>         
        </span>  
        <span className={container.child_card}>
            <h3 className={style.child_card_title}> Walkability Project</h3>
            <img className={container.image_container}src="images/residential study area.jpg" />         
            <p className={style.card_desc}> What is the overall objective of the project? 
                <br/>The purpose of the project is to assess the walkability of a section of downtown Dayton.
                <br/>This project will require that students complete a project using the GIS workflow.   
                <br/>The project will be divided into these phases and each phase will focus on key deliverables.
                <br/>The deliverables will be completed by either an individual student, team, or the className.  
            </p>
        </span>                     
        <span className={container.child_card}>
            <h3 className={style.child_card_title}>Wright Dunbar Service<br/> Learning Project</h3>      
            <img className={container.image_container} src="images/Dunbar Age of House FINAL COPY.jpg"  />         
            <p className={style.card_desc}> Service Learning project done at Sinclair Community College.
                <br/> The concept was to map unique characteristics in the 
                <br/>Historical Wright Dunbar Neighborhod, Fall of 2015 </p>                     
        </span>
        <span className={container.child_card}>
            <h3 className={style.child_card_title}>3D rendering fly thru of OSU</h3>
                <iframe className={container.image_container} src="https://www.youtube.com/embed/ukH2uMqcwzE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                </iframe>
            <p className={style.card_desc}>Using Arc Scene to create a 3D landscape and fly through</p>
        </span>
    </section>
  </Layout>
)

export default CartographerPage
