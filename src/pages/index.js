import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import ContactForm from "../components/contact-form"
import Image from "../components/image"
import { useSiteMetadata } from "../hooks/use-site-metadata"
const IndexPage = () => (
  <Layout>
    <Header></Header>
    <div><h2>I started this project at 4:15 pm 10/22/2019</h2></div>
    <section><h3>This will be the vbody</h3></section>
    <section><h3>This will be the vbody</h3></section>
    <section><h3>This will be the vbody</h3></section> 
    <ContactForm></ContactForm>
  </Layout>
)


export default () => {
  const { title,  author, email, description } = useSiteMetadata()
  return ( 
    <Layout>
    <Header></Header>
    <h1>{title}</h1>
    <h4> author {author} </h4>
    <h4> email { email } </h4>
    <h5> about { description } </h5>
    <div><h2>I started this project at 4:15 pm 10/22/2019</h2></div>
    <ContactForm></ContactForm>
    <Image></Image>
  </Layout>
    
    )
  }
