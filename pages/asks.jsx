import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Card, Button, Jumbotron } from 'react-bootstrap'

export default function Asks() {
  return (

    <Container className="md-container text-center">
      <Head>
        <title>Why imagine the future?</title>
        <link rel="icon" href="people/p2.png" />
      </Head>
      <Row className="justify-content-center">
          <h3 className="text-light mb-4">Choose your guide for imagining the future.</h3>
          <Card className="w-75 mb-2">
            {/* <Card.Img variant="top" src="people/p2.png" /> */}
            <Card.Body>
              <Card.Title>Single Mom</Card.Title>
              <Card.Text>
                Lorem ipsum dolor lorem ipsum.
              </Card.Text>
              <Link href="/asks/f8no4cfjr">
              <Button variant="primary">Go &rarr;</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="w-75">
            {/* <Card.Img variant="top" src="people/p2.png" /> */}
            <Card.Body>
              <Card.Title>Farmer</Card.Title>
              <Card.Text>
                Lorem ipsum dolor lorem ipsum.
              </Card.Text>
              <Link href="/asks/f58y9ryge">
              <Button variant="primary">Go &rarr;</Button>
              </Link>
            </Card.Body>
          </Card>
          </Row>
    </Container>
  )
}
