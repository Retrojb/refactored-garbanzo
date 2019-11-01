import React from "react"
import Layout from "../components/layout"
import container from "../style/container.module.css"
import style from "../style/style.module.css"
import Tutor from "../images/cartography/tutoring.jpg"
import Survey from "../images/cartography/surveyor.jpg"
import Walk from "../images/cartography/res_study.jpg"
import Dunbar from "../images/cartography/wd_age.jpg"

const CartographerPage = () => (
  <Layout>
    <section className={container.card_container}> 
    <div className={container.card_flex_main_col}>
            <h3 className={style.child_card_col_title}>Not the ghost of my formal self</h3>
        <span className={container.child_card_row}>
            <img className={container.image_container} src={ Tutor }/>
            <img className={container.image_container} src={ Survey }/>         
        </span>  
    </div>
        <span className={container.child_card_row}>
            <h3 className={style.child_card_col_title} style={{ marginRight:`1rem`, textAlign:`left`}}> Walkability Project</h3>
            <img className={container.image_container} src={ Walk } />         
            <p className={style.card_desc} style={{marginLeft: `.5rem`, textAlign:"right"}}> What is the overall objective of the project? 
                The purpose of the project is to assess the walkability of a section of downtown Dayton.
                This project will require that students complete a project using the GIS workflow.   
                The project will be divided into these phases and each phase will focus on key deliverables.
                The deliverables will be completed by either an individual student, team, or the className.  
            </p>
        </span>                     
        <span className={container.child_card_row} style={{ padding:`2rem`}}>
            <p className={style.card_desc} style={{marginRight: `.5rem`, textAlign:"left"}}> Service Learning project done at Sinclair Community College.
                The concept was to map unique characteristics in the 
                Historical Wright Dunbar Neighborhod, Fall of 2015 </p>                     
            <img className={container.image_container} src={ Dunbar }  />         
            <h3 className={style.child_card_col_title} style={{ marginLeft:`1rem`, textAlign:`right`}}>
                Wright Dunbar Service Learning Project</h3>      
        </span>
        <div className={container.card_flex_main_col}>
                <h3 className={style.child_card_col_title}>3D GIS of The Ohio State University</h3>
            <span className={container.child_card_col}>
                    <iframe src="https://www.youtube.com/embed/ukH2uMqcwzE" frameBorder="2" allow="autoplay; encrypted-media" allowFullScreen style={{width:`600px`, height:`400px`}}>
                    </iframe>
            </span>
                <p className={style.card_desc}>Using Arc Scene to create a 3D landscape and fly through</p>
        </div>
    </section>
  </Layout>
)

export default CartographerPage
