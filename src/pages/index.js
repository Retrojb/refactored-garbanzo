import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import ContactForm from "../components/contact-form"
check();
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

export function check() {
  const foo = window.localStorage;
  console.log('foo', foo);
}
export default IndexPage
