import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Pizza-Express Bathinda</title>
        <meta name="description" content="Best Pizza Restaurant in the Town" />
        <link rel="icon" href="/piza.ico" />
      </Head>

      home page
    </div>
  )
}
