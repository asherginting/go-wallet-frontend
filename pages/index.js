import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/LandingPage.module.css'
import Layout from '../components/Layout'
import ButtonComp from '../components/ButtonComp'
import { Col, Row } from 'react-bootstrap'
import { BsTelephone } from 'react-icons/bs'
import { FiLock } from 'react-icons/fi'
import { AiOutlineDownload } from 'react-icons/ai'
import CardLanding from '../components/CardLanding'

export default function Home() {
  const cardAbout = [
    {
      icon: BsTelephone,
      head: '24/7 Support',
      par: 'We have 24/7 contact support so you can contact us whenever you want and we will respond it.'
    },
    {
      icon: FiLock,
      head: 'Data Privacy',
      par: 'We make sure your data is safe in our database and we will encrypt any data you submitted to us.'
    },
    {
      icon: AiOutlineDownload,
      head: 'Easy Download',
      par: 'Go - Wallet is 100% totally free to use it’s now available on Google Play Store and App Store.'
    }
  ]
  const dataFeatures = [
    {head: 'Small Fee', par: 'We only charge 5% of every success transaction done in Go - Wallet app.'},
    {head: 'Data Secured', par: 'All your data is secured properly in our system and it’s encrypted.'},
    {head: 'User Friendly', par: 'Go - Wallet come up with modern and sleek design and not complicated.'}
  ]
  const dataReview = [
    {
      img: '/img/review-1.jpg',
      name: 'Sherina Chaw',
      par: '“I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life”'
    },
    {
      img: '/img/review-3.jpg',
      name: 'Jessica Mera',
      par: '“I use Go - Wallet to manage all financial needs. It’s super easy to use and it’s 100% free app”'
    },
    {
      img: '/img/review-2.jpg',
      name: 'Robert Chandler',
      par: '“Since I’m using this app, I’m not going to move to another similar app. Thank you Go - Wallet!”'
    }
  ]

  return (
    <div>
      <Head>
        <title>Go-Wallet | Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout fullFooter={true}>
        <main className='mt-5'>
          <header className='container'>
            <div className='row align-items-center'>
              <div className={`${styles.left} col-12 col-lg-6`}>
                <h1 className={`${styles.headText} fs-1`}>Awesome App <br/> For Saving <span className='text-primary'>Time.</span></h1>
                <p className='my-5 fs-4'>We bring you a mobile app for banking problems that oftenly wasting much of your times.</p>
                <Link href='/auth/signup'>
                <ButtonComp>Try it free</ButtonComp>
                </Link>
              </div>
              <div className={`${styles.right} col-12 col-lg-6`}>
                <div className={`${styles.bgwave} d-inline-block position-absolute`}>
                  <Image width={1000} height={1000} quality={100} layout='intrinsic' src='/bg-wave.png' alt='wave' />
                </div>
                <div className='mx-auto text-center mt-4'>
                  <Image layout='' width={470} height={925} quality={100} src='/phone2.png' alt='phone' />
                </div>
              </div>
            </div>
          </header>

          <section className='bg-light py-5'>
            <div className='container'>
              <div className='text-center mt-5 mx-auto'>
                <h1 className={`${styles.headText} fs-1`}><span className='text-primary'>About</span> the Application.</h1>
                <p className='my-5 fs-4 w-75 mx-auto'>We have some great features from the application and it’s totally free to use by all users around the world.</p>
              </div>
              <Row>
                {cardAbout.map(item => {
                  return <CardLanding 
                    image={
                    <div className={`${styles.icon} bg-primary text-light`}>
                      <item.icon/>
                    </div>}
                    head={item.head}
                    par={item.par}
                    key={item.head}
                  />
                })}
              </Row>
            </div>
          </section>

          <section className='container py-5'>
            <Row className='justify-content-between align-items-center my-5 g-3'>
              <Col sm={12} lg={5} className='text-sm-center text-lg-start'>
                <h1 className={`${styles.headText} fs-1`}>100+ <span className='text-primary'>Trusted</span> Partners.</h1>
                <p className='mt-5'>We have reached global level and have 100+ brand partners around the globe.</p>
              </Col>
              <Col sm={12} lg={7} className='ps-3 mt-sm-5 mt-lg-0'>
                <Row>
                  {[...Array(6)].map((item, index) => {
                    return <Col xs={6} md={4} key={index} className='m-auto text-center'>
                     <Image height={index === 5 ? 60 : 100} width={index === 5 ? 200 : 140} className={`${styles.partner}`} alt='partner' src={`/img/Group-${index + 1}.png`} />
                    </Col>
                  })}
                </Row>
              </Col>
            </Row>
          </section>

          <secion className='bg-light d-block py-5'>
            <div className='container'>
              <Row>
                <Col sm={12} lg={5} className='d-none d-lg-block'>
                  <Image className='p-0' width={420} height={820} layout='responsive' quality={100} src='/img/phone.png' alt='phone' />
                </Col>
                <Col sm={12} lg={7} className='mt-5'>
                  <h1 className={`${styles.headText} fs-1 mt-4`}>All The <span className='text-primary'>Great</span><br/> Go - Wallet Features.</h1>
                  {dataFeatures.map((data, index) => (
                    <div key={index} className='card bg-white p-5 mt-5'>
                      <h4 className='fw-bold mb-3'><span className='text-primary'>{index + 1}.</span> {data.head}</h4>
                      <div>{data.par}</div>
                    </div>
                  ))}
                </Col>
              </Row>
            </div>
          </secion>
          
          <section className='container py-5 mb-5'>
            <h1 className={`${styles.headText} fs-1 mt-4 text-center`}>What Users are <span className='text-primary'>Saying.</span></h1>
            <p className='mx-auto text-center my-4 w-50'>We have some great features from the application and it’s totally free to use by all users around the world.</p>
            <Row>
              {dataReview.map((item, index) => (
                <CardLanding
                bg={true}
                image={
                  <div>
                    <div className={`review-photo ${styles.photoRev}`} style={{backgroundImage: `url(${item.img})`}}></div>
                  </div>
                }
                head={item.name}
                par={item.par}
                key={item.name}
              />
              ))}
            </Row>
          </section>
        </main>
      </Layout>
    </div>
  )
}
