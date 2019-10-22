import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import ContactForm from "../components/contact-form"

const IndexPage = () => (
  <Layout>
    <Header></Header>
    <div><h2>HERE IS A THING</h2></div>
    <section><h3>This will be the vbody</h3></section>
    <section><h3>This will be the vbody</h3></section>
    <section><h3>This will be the vbody</h3></section> 
    <ContactForm></ContactForm>
  </Layout>
)

export default IndexPage
