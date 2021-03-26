import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Card, Button, Jumbotron, Navbar } from 'react-bootstrap'

export default function Asks() {
  return (

    <Container className="md-container text-center">
      <Head>
        <title>Why imagine the future?</title>
        <link rel="icon" href="people/p2.png" />
      </Head>
      <Navbar fixed="top" bg="transparent">
        <Link href="/">
          <Navbar.Brand href="/asks">&larr;</Navbar.Brand>
        </Link>
      </Navbar>
      <Row className="justify-content-center">
          <h3 className="text-light mt-2 mb-4">Choose your guide for imagining the future.</h3>
          <Card className="w-50 m-3">
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
          <Card className="w-50 m-3">
            {/* <Card.Img variant="top" src="people/p2.png" /> */}
            <Card.Body>
              <Card.Title>Coffee Farmer</Card.Title>
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
