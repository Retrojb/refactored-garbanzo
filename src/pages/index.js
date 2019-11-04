import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contact-form"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import style from "../style/style.module.css"
import { Link } from "gatsby"



export default () => {
  const { title,  author, email } = useSiteMetadata()
  return ( 
    <Layout>
    <h1>{title}</h1>
    <h2> author { author } </h2>
    <h3> Email: { email } </h3>
    <div  className={style.container}><h2>I started this project at 4:15 pm 10/22/2019</h2></div>
    <div  className={style.container}><h2>5:45 pm 10/30/2019: Hosted on <a href="surge.sh">surge.sh</a></h2></div>
    <div>
      <Link to="blog-list">Blog</Link>  
      <ContactForm></ContactForm>
      </div>
  </Layout>
    
    )
  }
