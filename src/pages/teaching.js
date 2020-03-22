/* global Stripe */
import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container } from '../components/MyStyledComponents'
import { Carousel, Button, Card, Drawer } from 'antd'

const { Meta } = Card

const Teaching = () => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = 'https://js.stripe.com/v3'
    script.async = true

    document.body.appendChild(script)
  }, [])

  const onCheckout = () => {
    setCheckoutLoading(true)
    const stripe = Stripe('pk_test_dFVuzatZp76wOfS5ylB1ksF000wXhysIRM')

    stripe.redirectToCheckout({
      items: [{ sku: 'sku_GvoQ9BUcwbW5Pb', quantity: 1 }],
      shippingAddressCollection: {
        allowedCountries: ['US', 'CA', 'AU', 'NZ']
      },
      successUrl: 'https://your-website.com/success',
      cancelUrl: 'https://your-website.com/canceled'
    })
      .then(function (result) {
        if (result.error) {
          var displayError = document.getElementById('error-message')
          displayError.textContent = result.error.message
        }
      })
  }

  const [teachingDrawerOpen, setTeachingDrawerOpen] = useState(false)
  const [starterKitDrawerOpen, setStarterKitDrawerOpen] = useState(false)
  const [checkoutLoading, setCheckoutLoading] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      teaching1: file(relativePath: { eq: "images/teaching1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth:400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      teaching2: file(relativePath: { eq: "images/teaching2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth:400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teaching3: file(relativePath: { eq: "images/teaching3.jpg" }) {
        childImageSharp {
          fluid(maxWidth:400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teaching4: file(relativePath: { eq: "images/teaching4.jpg" }) {
        childImageSharp {
          fluid(maxWidth:400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
     
      teaching6: file(relativePath: { eq: "images/teaching6.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pianoWithMissEmma: file(relativePath: { eq: "images/pianoWithMissEmma.jpg" }) {
        childImageSharp {
          fluid(maxWidth:400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kit1: file(relativePath: { eq: "images/kit1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

     


    }
  `)

  const CardContainer = styled.div`
    display: grid;
    grid-gap: 1rem;
   grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    margin: 2rem auto;
   padding: 0 1rem;
    max-width: 70rem;
    width: 100vw;
  `

  return <>
    <SEO title='Teaching' />
    <Layout>
      <Container>
        <h1>Teaching</h1>

        <Carousel dots autoplay style={{ width: '100%' }}>

          <Img
            fluid={data.teaching1.childImageSharp.fluid}
          />

          <Img
            fluid={data.teaching2.childImageSharp.fluid}
          />

          <Img
            fluid={data.teaching3.childImageSharp.fluid}
          />

          <Img
            fluid={data.teaching4.childImageSharp.fluid}
          />

        </Carousel>
      </Container>

      {/* <Jumbotron /> */}

      <CardContainer>

        <Card
          onClick={() => {
            window.location = 'https://www.youtube.com/channel/UCJcrv99z4efX0kV0nkCOsnQ?view_as=subscriber'
            return null
          }}
          hoverable
          cover={<Img fluid={data.pianoWithMissEmma.childImageSharp.fluid} />}
        >
          <Meta title='Piano With Miss Emma' description="Help young kids learn piano effortlessly. Instructional videos for adults to facilitate a play-based kid's piano method (appropriate for children 3.5- 8 years old). No experience required (For the adults or the children!) " />
        </Card>

        <Card
          onClick={() => setStarterKitDrawerOpen(true)}
          hoverable

          cover={<img alt='example' src='https://i.ytimg.com/vi/Kt_JePg86b8/maxresdefault.jpg' />}
        >
          <Meta title='Piano w Miss Emma Starter Kit' description='a really good thing...' />
        </Card>

        <Card
          onClick={() => setTeachingDrawerOpen(true)}
          hoverable
          cover={<Img fluid={data.teaching6.childImageSharp.fluid} />}
        >
          <Meta title='Lessons' description='I teach lessons from my home....' />
        </Card>

        <Card
          hoverable
          cover={<Img fluid={data.teaching6.childImageSharp.fluid} />}
          actions={[<a href='mailto:emmagrace91@gmail.com'>Email Me</a>]}
        >
          <Meta title='Request Transcription' description='I can make you a transcription...' />
        </Card>

      </CardContainer>

    </Layout>

    <Drawer onClose={() => setTeachingDrawerOpen(false)} width='auto' visible={teachingDrawerOpen}>
      <h4>Dear stranger,</h4>

      <p>Thanks for considering me as you or your child’s piano teacher. If we work together, I promise to attend to you or your child’s musical development with compassion, joy and patience. As my previous six day teaching schedule in New York City would suggest, I truly love to teach and have a bounty of experience with students of all ages, levels and interests to draw upon. I also have a YouTube channel: piano with Miss Emma, dedicated to sharing my tips for teaching and learning the piano, including games and activities that parents with no experience can use to get their child acquainted with the piano at an early age.
      </p>

      <p>
      For children between the ages of 3 and 7, I keep lessons play-based and creative, unless requested otherwise by the parents. My lessons with young children always involve the use of pictures, colors, stickers, motivational games, imagination, story telling, and interactive play. My goal at that stage of the journey is to help the child to associate music and piano playing with positive emotions, hopefully creating a somewhat addictive experience that will fuel future motivation and encourage persistent practice as they grow older and become more capable of self-directed learning.
      </p>
      <p>
      For students above the age of 7, I will accommodate and adapt according to individual learning styles, goals, experience and musical taste. Whether the student is playing music for leisure or with career aspirations, and whatever style of music they would like to play and/or compose, I guarantee a highly personalized and considered approach for each person.
      </p>
      <h4>FEES AND POLICIES</h4>

      <p>
          Lessons are held at my apartment in Thornleigh, NSW.
      </p>

      <p>

      All lessons are 60 minutes. This may seem like a long time for little kids, but I promise to keep them entertained for the full duration - even if that means coming up with highly individualised games and activities to keep them engaged.
      </p>

      <p>
      For adults and older children, I find that anything less than 60 mins always means we have to rush and neglect important aspects of a comprehensive method to learning the piano.
      </p>

      <p>
      Each student is entitled to 1 free 30 minute trial lesson. Following your trial, if you wish to continue, you must pay for 23 lessons upfront, to be completed in a 26 week commitment period (roughly 6 months). Each 23 lessons at $100 per lesson = $2300.
      </p>

      <p>

          Following your purchase, I will reserve your agreed weekly time for the 26 week commitment period. That gives you up to 3 possible lesson cancellations due to illnesses, emergencies, holidays, special events etc. If you do not complete all 23 lessons in the 26 week window, I will not refund remaining lessons.
      </p>

      <p>

      Under no circumstances will I provide make up lessons, reschedules or refunds for missed lessons. If I myself need to cancel lessons for any reason, I will extend your the deadline for your commitment period accordingly. If I need to extend the deadline by more than 6 weeks for unforeseen reasons, I will instead refund any remaining lessons and offer you a fresh start if/when I begin teaching again.
      </p>

      <p>
      Once your 23 lessons are completed, you can purchase another 23 lessons with a new commitment period of 26 weeks.
      </p>

      <p>
      The policy above is designed to provide you with some flexibility while still protecting me from losses that come with cancellations, reschedules, and extra administration work.
      </p>

      <p>
      Please know that due to the impossibility of getting a real piano into my apartment (our steps are steep), I teach on a high quality electric piano. For beginner and intermediate students this will not interfere with or stunt progress, especially if you invest in a real piano at home for practice.
      </p>

      <p>
Please email me at <a href='mailto:emmagrace91@gmail.com'>emmagrace91@gmail.com</a> to request a trial lesson or more information.
      </p>

    </Drawer>

    <Drawer width='auto' onClose={() => setStarterKitDrawerOpen(false)} visible={starterKitDrawerOpen}>
      <h1>Piano With Miss Emma Starter Kit</h1>

      <div style={{ maxWidth: 'min(20rem, 80vw)', margin: '1rem auto' }}>

        <Carousel dots autoplay>

          <Img
            fluid={data.kit1.childImageSharp.fluid}
          />

        </Carousel>

      </div>

      <p>Kit can be used in conjunction with instructional videos provided on the youtube channel <a href='https://www.youtube.com/channel/UCJcrv99z4efX0kV0nkCOsnQ?view_as=subscriber'>Piano With Miss Emma.</a></p>

      <h4>Kit Contains</h4>
      <ul>
        <li>sticker pack (for use on the piano or keyboard all stickers are reusable up to 100 times)</li>
        <li>right and left wrist bands (to help young children learn the difference)</li>
        <li>notes house (to slide behind the keys, resting against the piano lid, sparking students' imagination and helping them to learn where the notes live!)</li>
        <li>includes pdf of coloured number starter songs</li>
      </ul>

      <Button loading={checkoutLoading} onClick={() => onCheckout()}>
        Buy
      </Button>

    </Drawer>

         </>
}

export default Teaching
