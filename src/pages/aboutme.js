import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

const AboutMe = () => {
return(
<Layout>
    <Header></Header>
    <span className="art-container about-me-main">
        <h1>Welcome to Baltes Design and Development</h1>
        <h2>I currently work for Nationwide Insurance in Columbus, Ohio as fullstack web developer;
         who is poly-skilled in Testing, Development, Requirements and Continous Intergration Model</h2>
    </span>
    <section className="art-box">
        <span className="about-me">
            <article className="work-desc">
                <h3>Nationwide Mobile</h3>
                <h5>Money movement and bill payment.<br></br>
            Everyday work greatly impacted the end users experience with bill pay</h5>
                <ul>
                    <li>Angular 5</li>
                    <li>Ionic 3</li>
                    <li>Cordova</li>
                    <li>Splunk and Google Analytics</li>
                    <li>Agile</li>
                </ul>
            </article>
            <article className="work-desc">
                <h3> Nationwide Internal HR / IT <br></br>Resource Management</h3>
                <h5>An internal application that helps teams and management track resources, teams, devops metrics, and other Nationwide IT information.</h5>
                <ul>
                    <li>Angular 7</li>
                    <li>Java 8</li>
                    <li>AWS</li>
                    <li>Splunk Metrics</li>
                    <li>Docker and Kuberneties</li>
                    <li>Jira and RTC</li>
                    <li>Postgres</li>
                    <li>Concourse CI</li>
                </ul>
            </article>
            <article className="work-desc">
                <h3> Nationwide Information Risk Management</h3>
                    <h5>Consulting the IRM work to insure a secure network and applications</h5>
                <ul>
                    <li>Angular</li>
                    <li>Oauth 2 / odic</li>
                    <li>Microsoft Azure</li>
                </ul>    
            </article>
        </span>
        </section>

        <article className="work-desc" >
            <h3>Some more about me</h3>
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
        </article>

        </Layout>
)
}

export default AboutMe