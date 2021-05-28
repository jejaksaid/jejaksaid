import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childrenImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  // const {
  //   file: {
  //     childImageSharp: { fluid },
  //   },
  // } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            {/* <Image fluid={fluid} className="hero-img" /> */}
            <div className="underline"></div>
            <h1>saidramdhan</h1>
            <h4>freelance web developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero
