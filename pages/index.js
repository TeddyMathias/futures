import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Fade from 'react-reveal/Fade';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main >
        <div className="container">
        <div className="row">
          <Fade>
          <div className="col-12 text-center">
              <h2>You're invited: Imagine the future with us.</h2>
              <p className={styles.q}>Hi,
                  When was the last time you imagined the future you cannot live without?<br/> We hear a lot about vision boards for the year ahead, but what about 10 years ahead? Or 20? <br/><br/>
                  <span className={styles.quote}>“Remember to imagine and craft the worlds you cannot live without,<br/> just as you dismantle the ones you cannot live within.”
                  — Dr. Ruha Benjamin<br/> </span>
                  <br/>We are harnessing our collective vision so that we can live into it, every day. Won't you join us?
              </p>
          </div>
          </Fade>
        </div>
      </div>
        <h1 className={styles.title}>

        </h1>

    
        <div className={styles.grid}>
          <Link href="/asks/f58y9ryge" >
            <a className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
          <Link href="/asks/f58y9ryge" >
            <a className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
          <Link href="/asks/f58y9ryge" >
            <a className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>
          <Link href="/asks/f58y9ryge" >
            <a className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Link>


        </div>
      </main>

      <footer className={styles.footer}>
        <a
          
          target="_blank"
          rel="noopener noreferrer"
        >
          Future Contexts
        </a>
      </footer>
    </div>
  )
}
