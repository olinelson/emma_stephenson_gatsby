import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "../components/MyStyledComponents"

const Contact = () => (
  <>
    <SEO title="Success" />
    <Layout>
      <Container>
        <h1>Thank you</h1>
        <p>
          Thanks for your enquiry, we will be in touch shortly, in the meantime,
          please feel free to check out our{" "}
          <a
            href="https://piano-lessons-106305.square.site/reviews"
            target="_blank"
          >
            testimonials
          </a>
        </p>
      </Container>
    </Layout>
  </>
)

export default Contact
