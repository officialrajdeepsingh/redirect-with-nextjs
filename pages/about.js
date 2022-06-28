import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <Image
          width={724}
          height={324}
          objectFit="cover"
          src="/blog/vercel.svg"
          alt="vercel logo "
        />
        <h1 className={styles.title}>
          about js
        </h1>
        <Link href="/page">
          <a></a>
        </Link>
      </main>

    </div>
  )
}
