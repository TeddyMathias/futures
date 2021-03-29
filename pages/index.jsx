import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Card, Button, Jumbotron, Navbar } from 'react-bootstrap'

export default function Home() {
  return (
    
    <Container className="md-container d-flex align-items-center vh-100">
      <Head>
        <title>VideoAsk Prototype</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Jumbotron>
        <h1>VideoAsk Prototype</h1>
        <p>
        🎥 🎤 ⌨️ <br></br>
          This prototype allows users to respond to video prompts with their own video, audio, or text. Once users reply,
          the facilitator can respond directly to the user to thank them or start a conversation. Choose an example on the next screen and send your replies.
        </p>
        <p>
          <Link href="/asks">
          <Button variant="primary" href="/asks">
            Go &rarr;
                </Button></Link>
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
