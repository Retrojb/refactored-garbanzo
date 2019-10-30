import React from "react"
import Layout from "../components/layout"
import style from "../style/style.module.css"
import container from "../style/container.module.css"
import Rick from "../images/rick.jpg"
import Image from "../components/image"




const ArtistPage = props => (
  <Layout>
      <section className={container.card_container}>
        <span className={container.child_card}>
            <h2 className={style.child_card_title}>Pen Drawings</h2>
                <span className={container.image_container}></span>
                <Image src={Rick} />
                <p className={style.card_desc}> Columbus from COSI</p>
        </span>                   
        <span className={container.child_card}>
            <h2 className={style.child_card_title}>Marker Drawings</h2>
            <span className={container.image_container}></span>
            <img src={Rick} alt="Rick Sanchez from Rick and Morty" />
                <p className={style.card_desc}> Rick Sanchez from Rick and Morty </p>
        </span> 
        <span className={container.child_card}>
            <h2 className={style.child_card_title}>Photography</h2>
            <span className={container.image_container}></span>
            <img src={Rick} alt="This" />
                <p className={style.card_desc}>Rigs, an old roommates dog</p>
        </span>
        <span className={container.child_card}>
            <h2 className={style.child_card_title}>Charcoal</h2>
            <span className={container.image_container}></span>
            <img src={Rick} alt="This" />
                <p className={style.card_desc}>Mario just for fun</p>
        </span> 
        <span className={container.child_card}>
            <h2 className={style.child_card_title}>Phone Art</h2>
            <span className={container.image_container}></span>
            <img src={Rick} alt="This" />
                <p className={style.card_desc}>Birthday greeting created on a Samsung Note 5, using Adobe</p>
        </span> 
        <span className={container.child_card}>
            <h2 className={style.child_card_title}>Digital Art</h2>
            <span className={container.image_container}></span>
            <img src={Rick} alt="This" />
                <p className={style.card_desc}>Part of an art final project<br/>Airbrush, linework, paint, paint and airbrush</p>
            </span> 
    </section>
  </Layout>
)

export default ArtistPage


// export default ( ) => {
//  const data = graphql`	
//         query {
//             alexisshoes: file(relativePath: {eq: "alexisshoes.jpg"}) {
//                 childImageSharp {
//                 fluid {
//                     aspectRatio
//                     base64
//                     src
//                 }
//                 }
//             }
//             art: file(relativePath: {eq: "art.png"}) {
//                 childImageSharp {
//                 fluid {
//                     aspectRatio
//                     base64
//                     src
//                 }
//                 }
//             }
//             cat: file(relativePath: {eq: "catlog.jpg"}) {
//                 childImageSharp {
//                 fluid {
//                     aspectRatio
//                     base64
//                     src
//                 }
//                 }
//             }
//             shoes: file(relativePath: {eq: "shoes.jpg"}) {
//                 childImageSharp {
//                 fluid {
//                     aspectRatio
//                     base64
//                     src
//                 }
//                 }
//             }
//         }
    
//      `
   
//     return (
//         <Layout>
//         {/* <Header></Header>
//         <section className={container.card_container}>
//             <span className={container.child_card}>
//                 <h2 className={style.child_card_title}> Handcrafted Shoes</h2>
                    
//                     <p className={style.card_desc}> Made: April 2nd for my friend Alexis RN pinning Ceramony.</p>
//             </span>
//                 <Img fluid={data.file.childImageSharp.fixed} alt="My art work" fadeIn="true" className={style.selfImg}/>
//             </section>
//             <section className={container.card_container}>
//             <span className={container.child_card}>
//                 <h2 className={style.child_card_title}> Handcrafted Shoes</h2>
                    
//                     <p className={style.card_desc}> Made: April 2nd for my friend Alexis RN pinning Ceramony.</p>
//             </span>
//         </section> */}
//         <Img fluid={data.childImageSharp.fluid} alt="My art work" />
//         </Layout>

//     )
    
// }
