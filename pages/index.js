import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>


        {
          data.map((post, index) => (
            <p key={index}>{post.title}</p>
          ))
        }


      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch(`https://testapi.stockpeek.id/posts`)
  const data = await response.json();

  return {
    props: {
      data
    }
  }
}

