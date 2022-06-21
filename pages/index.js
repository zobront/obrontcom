import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.headshot}>
          <Image src="/obront.jpg" width="100%" height="100%" alt="Headshot" />
        </div>
        <h1 className={styles.title}>Hi, I’m Zach.</h1>
        <p className={styles.body}>I’m a Solidity developer focused on protocol development and security.</p>
        <p className={styles.body}>Most of my time right now is spent participating in <Link href="https://code4rena.com/" target="_blank" rel="noreferrer">Code4rena</Link> contests, and building tooling to better use TLA+ for formal verification.</p>
        <p className={styles.body}>I like to learn by getting my hands dirty and building, and I do my best to share stories and experiments as I go. You can find the nerdy stuff on <Link href="https://mirror.xyz/obront.eth">Mirror</Link>, and more accessible write-ups on <Link href="http://obront.substack.com">my newsletter.</Link></p>
        <p className={styles.body}>In my past life, I co-founded <Link href="https://scribemedia.com/">Scribe Media</Link>. We’ve published 1500+ books (my fav: Can’t Hurt Me by David Goggins) and won a number of cool awards like Entrepreneur Magazine’s #1 Best Company Culture in America.</p>

        <div className={styles.nav}>
          <span className={styles.navEl}><Link href="http://twitter.com/zachobront" target="_blank" rel="noreferrer">🐦 Twitter</Link></span>
          <span className={styles.navEl}><Link href="http://github.com/zobront" target="_blank" rel="noreferrer">👨‍💻 Github</Link></span>
          <span className={styles.navEl}><Link href="http://obront.substack.com/" target="_blank" rel="noreferrer">💌 Newsletter</Link></span>
          <span className={styles.navEl}><Link href="https://mirror.xyz/obront.eth">✍️ Articles</Link></span>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Thanks to <Link href="google.com" target="_blank" rel="noreferrer">Nick Gray</Link> (who wrote <Link href="https://party.pro/book" target="_blank" rel="noreferrer">a great book</Link> about <Link href="https://party.pro/" target="_blank" rel="noreferrer">how to host a party</Link>) for helping to bring this site to life.</p>
      </footer>
    </div>
  )
}
