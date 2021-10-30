import Head from 'next/head'
import styles from '../styles/Home.module.css'

//components
import HeroSection from "../components/HeroSection"
import Vision from "../components/homeVision"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Solvee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeroSection />
        <Vision />
      </main>

      
    </div>
  )
}
