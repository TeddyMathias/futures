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
      <Row className="justify-content-center"><h3 className="mt-2 mb-4 center-text">Choose an example...</h3></Row>
      <Row className="justify-content-center">
          
          <Card className="w-50 m-3">
            {/* <Card.Img variant="top" src="people/p2.png" /> */}
            <Card.Body>
              <Card.Title>Visualization</Card.Title>
              <Card.Text>
                This is an example of a longer-form visualization exercise, followed by three prompts.
              </Card.Text>
              <Link href="/asks/fpcwdeowh">
              <Button variant="primary">Go &rarr;</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="w-50 m-3">
            {/* <Card.Img variant="top" src="people/p2.png" /> */}
            <Card.Body>
              <Card.Title>Short Prompts</Card.Title>
              <Card.Text>
                This is an example of three short prompts, each with their own replies.
              </Card.Text>
              <Link href="/asks/fe6u1erqo">
              <Button variant="primary">Go &rarr;</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="w-50 m-3">
            {/* <Card.Img variant="top" src="people/p2.png" /> */}
            <Card.Body>
              <Card.Title>Interactive Videos</Card.Title>
              <Card.Text>
               Some examples of interactive videos made using VideoAsk. (Think Black Mirror's "Bandersnatch")
              </Card.Text>
              <a href="https://www.videoask.com/interactive-video" target="_blank">
              <Button variant="primary">Go &rarr;</Button>
              </a>
            </Card.Body>
          </Card>
          </Row>
    </Container>
    
  )
}
