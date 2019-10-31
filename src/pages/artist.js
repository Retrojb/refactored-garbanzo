import React from "react"
import Layout from "../components/layout"
import style from "../style/style.module.css"
import container from "../style/container.module.css"
import Rick from "../images/art-page/rick.jpg"
import Shoes from "../images/art-page/alexisshoes.jpg"
import Cup from "../images/art-page/catcup.jpg"
import Mario from "../images/art-page/mario2.jpg"
import Alien from "../images/art-page/alien-birthday.png"
import digitalArt from "../images/art-page/selfport.jpg"
import Shoes2 from "../images/art-page/shoes.jpg"
import CatLog from "../images/art-page/catlog.jpg"
import Goku from "../images/art-page/555CE50C-DA83-4A3C-A7CB-DA86C5408A8C_1_105_c.jpeg"

const ArtistPage = (props) => (
  <Layout>
      <section>
          <h3>The Artist formally know as Zoo</h3>
          <p>Since I can remember, <br/>  I've had a fascination with art. As a child I would spend hours in the winter time just drawing any thing cool I could find in a magazine. I would draw starwar episode 1 characters off Pepsi cans. I would draw cars and engine parts from Motor Trend. Though my personal favorite to illustrate is cartoons, anime and comics. For me there is something with the realm of graphic works that sparks an interest deep inside of me.</p>
            <p>Here are some of the random pieces of art that I have captured on film, arguably some of them aren't that great. Enjoy my numerous styles, and as they say</p> <q><i>Variety is the spice of life</i></q>
        </section>
      <section className={container.card_container}>

      <div className={container.card_flex_main}>
            <h2 className={style.child_card_title}>Shoe doodles</h2>
            <span className={container.child_card}>
                <div className={container.image_container}>
                    <img src={Shoes} alt="White Canvas shoes with handdrawn birds and flowers" />
                        <p>Hand drawn shoes for my friend as a gift for her Register Nurse pinning ceramony</p>
                </div>
                <div className={container.image_container}>
                    <img src={Shoes2} alt="Lion and alien drawing on shoes" />
                        <p>Shoes that originated the artist nickname Bucketz</p>
                </div>
                <p className={style.card_desc}></p>
        </span> 
        </div>
        <div className={container.card_flex_main}>           
            <h2 className={style.child_card_title}>Marker Drawings</h2>
                <span className={container.child_card}>
                    <div className={container.image_container}>
                        <img src={Rick} alt="Rick Sanchez from Rick and Morty" />
                            <p className={style.card_desc}> Rick Sanchez from Rick and Morty </p>
                    </div>
                    <div className={container.image_container}>
                        <img src={Goku} alt="Young Goku" />
                            <p className={style.card_desc}>Goku, my all time favorite anime characters</p>
                    </div>
                </span>
        </div>
        <div className={container.card_flex_main}>
            <h2 className={style.child_card_title}>Ceramics</h2>
                <span className={container.child_card}>
                    <div className={container.image_container}>
                        <img src={Cup} alt="A Series of Animals." />
                            <p className={style.card_desc}>Rigs, an old roommates dog</p>
                    </div>
                    <div className={container.image_container}>
                        <img src={CatLog} alt="A wall decoration" />
                            <p className={style.card_desc}>Rigs, an old roommates dog</p>
                    </div>
                </span>
        </div>
        {/* <div className={container.card_flex_main}>
            <h2 className={style.child_card_title}>Charcoal</h2>
                <span className={container.child_card}>
                    <div className={container.image_container}>
                        <img src={Mario} alt="Charcol drawing of Mario" />
                            <p className={style.card_desc}>Mario just for fun</p>
                    </div>
                </span> 
        </div> */}
        <div className={container.card_flex_main}>
            <h2 className={style.child_card_title}>Digital Art</h2>
                <span className={container.child_card}>
                        <div className={container.image_container}>
                            <img src={Alien} alt="Birthday card with an alien sitting ona ufo" />
                                <p className={style.card_desc}>Birthday greeting created on a Samsung Note 5, using Adobe</p>
                        </div>
                        <div className={container.image_container}>
                            <img src={digitalArt } alt="Drawing 1 art final "  />
                                <p className={style.card_desc}>Part of an art final project<br/>Airbrush, linework, paint, paint and airbrush</p>
                        </div>    
                </span> 
        </div>
    </section>
  </Layout>
)

export default ArtistPage
