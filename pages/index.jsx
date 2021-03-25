import Head from 'next/head'
import { Container, Row, Card, Button, Jumbotron } from 'react-bootstrap'

export default function Home() {
  return (
    
    <Container className="md-container my-5">
      <Head>
        <title>Why imagine the future?</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Jumbotron>
        <h1>Why imagine the future?</h1>
        <p>
          When was the last time you imagined the future you cannot live without? We hear a lot about vision boards for the year ahead, but what about 10 years ahead? Or 20?
        </p>
        <p>
          <Button variant="primary" href="/asks">
            Go &rarr;
                </Button>
        </p>
      </Jumbotron>

      <footer className="">
        <a
          href="https://vercel.com?filter=next.js&utm_source=github&utm_medium=example&utm_campaign=next-example"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </footer>
    </Container>
  )
}
