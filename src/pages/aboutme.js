import React from "react"
import Layout from "../components/layout"
import container from "../style/container.module.css"
import style from "../style/style.module.css"

const AboutMePage = () => {
return(
<Layout>
    
       

    {/* <article className={container.card_flex_main_col} >
            <h3 className={style.child_card_col_title} >Some more about me</h3>
            <ul>
                <li>I am a lover of CLI over GUI</li>
                <li>I perfer VScode for front end and Jet Brains Suite for backend development</li>
                <li>I love to learn about new front end frame works such as React, Gatsby and Vue</li>
                <li>In my personal time I have been expanding my knowledge in Kotlin and Mongo DB.</li>
                <li>I perfer NoSQL over RMS DB</li>
                <li>I love to travel</li>
                <li>I love art, if you couldn't tell</li>
                <li>programming as become a major passion</li>
                <li> My dream job would be working for a start up or a small consulting firm</li>
                <li> I currently volunteer my time with Tech Corp to mentor the youth about IT through after school classNamees and Hackathons</li>
            </ul>
        </article> */}

    <section>
        <h2 style={{fontSize:`70px`}}>Nationwide Insurance</h2>
        <p style={{fontSize:`20px`}}>I currently work for Nationwide Insurance in Columbus, Ohio as poly-skilled fullstack web developer.<br/> Skilled in:
            Development, Testing, Requirements, DevOps, SecOps and Continous Intergration Model. </p>
            <article className={container.card_flex_main_col}>
                <h3 className={style.child_card_col_title} style={{textAlign:`right`, fontSize:`48px`}}>Nationwide Mobile</h3>
                <div className={container.sub_container}>
                    <p className={container.child_card_col} style={{maxWidth:`40%`, padding:`1rem`}}>Money movement and bill payment system. Continous integration and support for the Nationwide Mobile application. These integrations lead to Nationwide Customer Service call reduction while saving millions. Work was guided by a business first mindset taking all customers in consideration. Skills gained continous integration model, customer first mentality,  </p>
                   
                    <ul className={container.child_card_col} style={{maxWidth:`40%`, listStyleType:`none`}}>
                        <h5 style={{fontSize:`24px`}}>Tech Domains</h5>
                                <li>Angular 5</li>
                                <li>Ionic 3</li>
                                <li>Cordova</li>
                                <li>Splunk and Google Analytics</li>
                                <li>Agile</li>
                                <li>External Vendor Implementations</li>
                                <li>MacOS</li>
                            </ul>
                </div>
            </article>
            <article className={container.card_flex_main_col}>
                <h3 className={style.child_card_col_title} style={{textAlign:`right`, fontSize:`48px`}}> Nationwide IT Resource Management</h3>
                <div className={container.sub_container}>
                <p className={container.child_card_col} style={{maxWidth:`40%`, padding:`1rem`, maxHeight:`auto`}}>An internal application that helps teams and management track resources, teams, devops metrics, and other Nationwide IT information.</p>
                <ul className={container.child_card_col} style={{maxWidth:`40%`, listStyleType:`none`}}>
                    <h5 style={{fontSize:`24px`}}>Tech Domains:</h5>
                    <li>Angular 7</li>
                    <li>Java 8</li>
                    <li>AWS</li>
                    <li>Splunk Metrics</li>
                    <li>Docker and Kuberneties</li>
                    <li>Jira and RTC</li>
                    <li>Postgres</li>
                    <li>Concourse CI</li>
                </ul>
                </div>
            </article>
            <article className={container.card_flex_main_col}>
                <h3 className={style.child_card_col_title} style={{textAlign:`right`, fontSize:`48px`}}> NW: Information Risk Management</h3>
                <div className={container.sub_container}>
                    <p className={container.child_card_col} style={{maxWidth:`40%`, padding:`1rem`}}>Consulting the IRM work to insure a secure network and applications. Currently working as a consultant developer working with these technologies:</p>
                <ul className={container.child_card_col} style={{maxWidth:`40%`, listStyleType:`none`}}>
                <h5 style={{fontSize:`24px`}}>Tech Domains</h5>
                    <li>Angular 7</li>
                    <li>OAuth 2 / odic</li>
                    <li>Microsoft Azure Active Directories</li>
                    <li>Cloud Security</li>
                    <li>Identity Access Management</li>
                    <li>AWS</li>
                </ul>    
                </div>
            </article>
        
        </section>

        </Layout>
)
}

export default AboutMePage