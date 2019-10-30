import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import container from "../style/container.module.css"

const DeveloperPage = () => (
  <Layout>
      <div className="dev-container">
      <aside className="aside-dev">
              <h3>Project List:</h3>
              <button><a href="https://github.com/retrojb?tab=repositories"></a>Github</button>
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
              <span className={container.child_card} >
                  
          <img src="images/underconstruction.gif" alt="under construction pickachu" width="550" height="350" />                 
      </span>
      </section>
      <section className={container.card_container}>
          
             
      </section>
  </div>
  </Layout>
)

export default DeveloperPage
