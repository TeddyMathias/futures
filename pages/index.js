import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="row">
          <div className="col-12 black">
              You're invited: Imagine the future with us.
          </div>
        </div>
        <h1 className={styles.title}>

        </h1>

        <p className={styles.description}>
        When was the last time you imagined the future you cannot live without? We hear a lot about vision boards for the year ahead, but what about 10 years ahead? Or 20?

        “Remember to imagine and craft the worlds you cannot live without, just as you dismantle the ones you cannot live within.”
        — Dr. Ruha Benjamin

        We are harnessing our collective vision so that we can live into it, every day.
        </p>

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
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
