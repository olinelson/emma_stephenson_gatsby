/* global Stripe */
import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import WithLocation from '../components/WithLocation'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container } from '../components/MyStyledComponents'
import { Carousel, Button, Card, Drawer, Collapse, Modal, message, InputNumber, Divider, Statistic } from 'antd'
import { countries } from '../utils'
import queryString from 'query-string'

const { Meta } = Card
const { Panel } = Collapse

const Teaching = (props) => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = 'https://js.stripe.com/v3'
    script.async = true

    document.body.appendChild(script)
  }, [])

  const pageQuery = queryString.parse(props.location.search)

  if (pageQuery.stripe && pageQuery.stripe === 'success') {
    Modal.success({ title: 'Purchase Complete', content: 'Thanks, you will receive an email confirmation shortly!' })
    navigate('/teaching')
  }
  if (pageQuery.stripe && pageQuery.stripe === 'cancel') {
    message.warning('Purchase canceled')
    navigate('/teaching')
  }

  const [teachingDrawerOpen, setTeachingDrawerOpen] = useState(false)
  const [starterKitDrawerOpen, setStarterKitDrawerOpen] = useState(false)
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const onCheckout = () => {
    setCheckoutLoading(true)
    const stripe = Stripe('pk_live_MUiJenwf3RE3gr8hqovEMTji00Y4bfbTAu')

    stripe.redirectToCheckout({
      items: [{ sku: 'sku_GzBcYDWUtwAGXt', quantity }],
      shippingAddressCollection: {
        allowedCountries: countries
      },
      successUrl: 'https://emmastephensonmusic.com/teaching?stripe=success',
      cancelUrl: 'https://emmastephensonmusic.com/teaching?stripe=cancel'
    })
      .then(function (result) {
        if (result.error) {
          var displayError = document.getElementById('error-message')
          displayError.textContent = result.error.message
        }
      })
  }

  const data = useStaticQuery(graphql`
    query {
      teaching1: file(relativePath: { eq: "images/teaching1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      teaching2: file(relativePath: { eq: "images/teaching2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teaching3: file(relativePath: { eq: "images/teaching3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      teaching4: file(relativePath: { eq: "images/teaching4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
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
      pianoWithMissEmma: file(
        relativePath: { eq: "images/pianoWithMissEmma.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kit1Square: file(
        relativePath: { eq: "images/starter_kit/kit1Square.jpg" }
      ) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kit1: file(relativePath: { eq: "images/starter_kit/kit1.png" }) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kit2: file(relativePath: { eq: "images/starter_kit/kit2.png" }) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kit3: file(relativePath: { eq: "images/starter_kit/kit3.png" }) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      arrangement: file(relativePath: { eq: "images/arrangement.png" }) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      starterKitIpad: file(relativePath: { eq: "images/starterKitIpad.jpg" }) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      introduction: allMarkdownRemark(
        filter: { frontmatter: { title: { eq: "Introduction" } } }
      ) {
        edges {
          node {
            html
          }
        }
      }
      teachingDetails: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/teachingDetails/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `)

  const CardContainer = styled.div`
    display: grid;
    grid-gap: 3rem;
   grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    margin: 2rem auto;
   padding: 0 1rem;
    max-width: 70rem;
    width: 100vw;
  `
  console.log(data)

  return (
    <>
      <SEO title='Teaching' />
      <Layout>
        <Container>
          <h1>Teaching</h1>

          <Carousel dots autoplay style={{ width: '100%' }}>
            <Img fluid={data.teaching1.childImageSharp.fluid} />

            <Img fluid={data.teaching2.childImageSharp.fluid} />

            <Img fluid={data.teaching3.childImageSharp.fluid} />

            <Img fluid={data.teaching4.childImageSharp.fluid} />
          </Carousel>
        </Container>

        <CardContainer>
          <Card
            // onClick={() => {
            //   window.location = 'https://www.youtube.com/channel/UCJcrv99z4efX0kV0nkCOsnQ?view_as=subscriber'
            //   return null
            // }}
            actions={[
              <Button
                type='link'
                key='youtube'
                href='https://www.youtube.com/channel/UCJcrv99z4efX0kV0nkCOsnQ?view_as=subscriber'
              >
                Check it Out!
              </Button>
            ]}
            hoverable
            cover={<Img fluid={data.pianoWithMissEmma.childImageSharp.fluid} />}
          >
            <Meta
              title='Piano With Miss Emma'
              description="Help young kids learn piano effortlessly. Instructional videos for adults to facilitate a play-based kid's piano method (appropriate for children 3.5- 8 years old). No experience required (For the adults or the children!) "
            />
          </Card>

          <Card
            // onClick={() => setStarterKitDrawerOpen(true)}
            hoverable
            actions={[
              <Button
                type='link'
                key='stButtonrter'
                onClick={() => setStarterKitDrawerOpen(true)}
              >
                More Info
              </Button>
            ]}
            // actions={[<a key='youtube' href='https://www.youtube.com/channel/UCJcrv99z4efX0kV0nkCOsnQ?view_as=subscriber'>Check it Out!</a>]}
            cover={<Img fluid={data.kit1Square.childImageSharp.fluid} />}
          >
            <Meta
              title='Starter Kit'
              description='Purchase the $30 starter kit which can be used in conjunction with instructional videos provided on the youtube channel Piano With Miss Emma.'
            />
          </Card>

          <Card
            // onClick={() => setTeachingDrawerOpen(true)}
            hoverable
            actions={[
              <Button
                type='link'
                key='youtube'
                onClick={() => setTeachingDrawerOpen(true)}
              >
                More Info
              </Button>
            ]}
            cover={<Img fluid={data.teaching6.childImageSharp.fluid} />}
          >
            <Meta
              title='Lessons'
              description='Thanks for considering me as you or your child’s piano teacher. If we work together, I promise to attend to you or your child’s musical development with compassion, joy and patience. As my previous six day teaching schedule in New York City would suggest, I truly love to teach and have a bounty of experience with students of all ages, levels and interests to draw upon.'
            />
          </Card>

          <Card
            hoverable
            cover={<Img fluid={data.arrangement.childImageSharp.fluid} />}
            actions={[
              <Button type='link' href='mailto:emmagrace91@gmail.com'>
                Email Me
              </Button>
            ]}
          >
            <Meta
              title='Request Arrangement'
              description={
                <div>
                  <p>
                    Got a kid who won' t stop singing the songs from Frozen II,
                    or the latest jingle they absorbed from a cartoon?
                  </p>
                  <p>
                    I can turn short excerpts of these songs into simple piano
                    arrangements using my coloured finger number method.
                  </p>
                  <p>
                    Even if you've never played piano before, you and your child
                    can begin making music together at the piano instantly using
                    red and blue colours and numbers 1 - 5.
                  </p>

                  <h4>Pricing</h4>

                  <p>
                    <h5>$80</h5> PDF only. 1 page arrangement using coloured
                    finger numbers, delivered to your inbox within 2 weeks of
                    your order placement.
                  </p>
                  <p>
                    <h5>$150</h5> PDF + Instructional Youtube Video with backing
                    track. PDF and youtube video delivered to your inbox within
                    2 weeks of your order placement.
                  </p>

                  <p>
                    Examples of PDFs can be found in my starter kit booklet.
                    Examples of youtube videos can be found{' '}
                    <a
                      target='blank'
                      href='https://www.youtube.com/channel/UCJcrv99z4efX0kV0nkCOsnQ'
                    >
                      here
                    </a>
                  </p>

                  <p>
                    <a href='mailto:emmagrace91@gmail.com'>Email me</a> directly
                    for a sample and/or to make an order.
                  </p>
                </div>
              }
            />
          </Card>
        </CardContainer>
      </Layout>

      <Drawer
        onClose={() => setTeachingDrawerOpen(false)}
        width='auto'
        visible={teachingDrawerOpen}
      >
        <Container>
          <h1>Fees and Policies</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.introduction.edges[0].node.html
            }}
          />
          <Collapse defaultActiveKey={['Adults and older children']}>
            {console.log(data.teachingDetails)}
            {data.teachingDetails.edges
              .sort(
                (a, b) => a.node.frontmatter.order - b.node.frontmatter.order
              )
              .map(e => (
                <Panel
                  header={e.node.frontmatter.title}
                  key={e.node.frontmatter.title}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: e.node.html
                    }}
                  />
                </Panel>
              ))}
          </Collapse>
        </Container>
      </Drawer>

      <Drawer
        width='auto'
        onClose={() => setStarterKitDrawerOpen(false)}
        visible={starterKitDrawerOpen}
      >
        <Container>
          <h1>Piano With Miss Emma Starter Kit</h1>

          <div
            style={{
              maxWidth: 'min(50rem, 80vw)',
              margin: '1rem auto',
              display: 'grid',
              gridTemplateColumns: '100%',
              gridGap: '1rem'
            }}
          >
            <Carousel dots autoplay style={{ margin: 'auto' }}>
              <Img fluid={data.kit1.childImageSharp.fluid} />
              <Img fluid={data.kit2.childImageSharp.fluid} />
              <Img fluid={data.kit3.childImageSharp.fluid} />
            </Carousel>
          </div>

          <p>
            Kit can be used in conjunction with instructional videos provided on
            the youtube channel{' '}
            <a href='https://www.youtube.com/channel/UCJcrv99z4efX0kV0nkCOsnQ?view_as=subscriber'>
              Piano With Miss Emma.
            </a>
          </p>

          <h4>Kit Contains</h4>
          <ul>
            <li>
              sticker pack (for use on the piano or keyboard all stickers are
              reusable up to 100 times)
            </li>
            <li>
              right and left wrist bands (to help young children learn the
              difference)
            </li>
            <li>
              notes house (to slide behind the keys, resting against the piano
              lid, sparking students' imagination and helping them to learn
              where the notes live!)
            </li>
            <li>includes pdf of coloured number starter songs</li>
          </ul>

          <p>
            Listed price does not include postage. You card will be charged for
            postage after the order is processed. Package will be delivered by
            economy air and should arrive 5-10 days after your order is
            submitted.
          </p>

          <h4>Postage Estimate (for small orders weighing less than 5kg)</h4>
          <ul>
            <li>Within Australia: $8.95AUD</li>
            <li>New Zealand: $10.20AUD</li>
            <li>Europe: $21.30AUD</li>
            <li>Canada: $16AUD</li>
            <li>United States:$16AUD</li>
            <li>United Kingdom: $20.20AUD</li>
            <li>South America: $25AUD</li>
            <li>Africa: $26AUD</li>
            <li>Asia: $22AUD</li>
            <li>Russia: $25AUD</li>
          </ul>

          <h4>Choose Quantity</h4>
          <span>
            <InputNumber
              min={1}
              defaultValue={3}
              value={quantity}
              onChange={d => setQuantity(d)}
            />
          </span>
          <Divider />
          <Statistic title='Price' value={`AUD $${quantity * 30}` + '.00'} />
          <Button
            style={{ margin: '1rem 0' }}
            size='large'
            loading={checkoutLoading}
            onClick={() => onCheckout()}
          >
            Buy Now
          </Button>
        </Container>
      </Drawer>
    </>
  )
}

export default WithLocation(Teaching)
