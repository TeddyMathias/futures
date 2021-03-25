import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Card, Button, Jumbotron } from 'react-bootstrap'

export default function Asks() {
  return (

    <Container className="md-container my-5">
      <Head>
        <title>Why imagine the future?</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
  
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Ashlea</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary" href="/asks/f58y9ryge">Go</Button>
            </Card.Body>
          </Card>
    </Container>
  )
}
