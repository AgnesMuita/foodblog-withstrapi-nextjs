import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Categories from './components/categories';
import Navbar from './components/navbar';
import Swipers from './components/swiper';
import Link from "next/link";
const baseUrl = process.env.BASE_URL


export default function Home({posts}) {

  console.log(posts)
  return (
    <div className={styles.container}>
        <Navbar/>
        <Swipers/>
        <section>
          <Categories/>
        </section>
      <main className={styles.main}>
        <h1>Recent Posts</h1>
        {posts && posts.map((post,i)=>(
          // <Link href={`/${post.Slug}`} key={i}>
            <div key={i}>
              <a>
                <p>{post.attributes ? post.attributes.Title:""}</p>
                <p>{post.attributes ? post.attributes.Content:""}</p>
              </a>
            </div>
          // </Link>
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps(){
  const res= await fetch("http://localhost:1337/api/posts") //TODO: move this into an env variable
  const data = await res.json();
  return{props:{posts:data.data}}
  // return{props:{}}
}
