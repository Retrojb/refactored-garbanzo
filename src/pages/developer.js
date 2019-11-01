import React from "react"
import Layout from "../components/layout"
import container from "../style/container.module.css"
import construction from "../images/random/underconstruction.gif"

const DeveloperPage = () => (
  <Layout>
      <div className={container.card_container}>                  
                  <img src={construction} alt="under construction pickachu" width="550" height="350" />                 
              
      <aside className="aside-dev">
              <h3>Project List:</h3>
              <button style={{backgroundColor:`black`, padding:`1rem`, textDecoration:`none`, color:`white`}}><a href="https://github.com/retrojb?tab=repositories" target="_blank"  rel="noopener noreferrer">Github</a></button>
              <ul>
                  <li>Fortune Teller</li>
                  <li>Virtual Pet</li>
                  <li>Virtual Pet Shelter</li>
                  <li>Virtual Pets Amok</li>
                  <li>Brick Breaker</li>
                  <li>Review Site</li>
                  <li>Portfolio</li>
                  <li>Starwars Review-site</li>
                  <li>Bank Teller</li>
                  <li>Girl Scout Sales</li>
                  <li>Music Review Site</li>
                  <li>Login Controller</li>
                  <li>React Weather App</li>
                  <li>Minimalist Weather App</li>
                  <li>Angular App</li>
                  <li>MyMenu App</li>
                  <li>Time2Dine</li>
                  <li>Hayapp</li>
              </ul>
      </aside>
      <section className={container.card_container}>
        
      </section>
      <section className={container.card_container}>
          
             
      </section>
  </div>
  </Layout>
)

export default DeveloperPage
