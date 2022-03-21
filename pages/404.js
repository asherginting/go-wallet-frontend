import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/ButtonComp'
import styles from '../styles/LandingPage.module.css'
import Link from 'next/link'

export default function NotFound() {
  return(
    <div>
      <Head>
        <title>ZWallet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main className=''>
        <header className='container'>
            <div className='row align-items-center'>
              <div className={`${styles.left} col-12 col-lg-6`}>
                <h1 className={`${styles.headText} fs-1`}><span className='text-primary'>404</span></h1>
                <h1 className={`${styles.headText} fs-1`}><span className='text-primary'>Not Found</span></h1>
                <p className='my-5 fs-4 mt-2'>Sorry, We were unable to find that page <br/> Please use main menu or click button back to landing page</p>
                <Link href='/'>
                <Button grid='true'>Back To Landing Page</Button>
                </Link>
              </div>
              <div className={`${styles.right} col-12 col-lg-6`}>
                <div className={`${styles.bgwave} d-inline-block position-absolute`}>
                  <Image width={800} height={800} quality={100} layout='intrinsic' src='/bg-wave.png' alt='wave' />
                </div>
                <div className='mx-auto text-center mt-4'>
                  <Image layout='' width={600} height={800} quality={100} src='/not-found.png' alt='phone' />
                </div>
              </div>
            </div>
        </header>
        </main>
    </div>
  )
}
