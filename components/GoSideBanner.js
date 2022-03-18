import Image from 'next/image';
import style from '../styles/scss/GoSideBanner.module.scss';
import phone from '../public/images/phone-banner.png';

export default function EZSideBanner({wrapperClassName}) {
  return (
    <section className={`${style["side-banner"]} ${wrapperClassName} px-5`}>
      <div className="wrapper text-white px-5 d-flex flex-column w-75 justify-content-center">
        <h1 className='fw-bolder fs-1 mt-5'>Go Wallet</h1>
        <Image src={phone} alt='phone-banner' layout='responsive' />
        <p className='fw-bold fs-4'>App that Covering Banking Needs.</p>
        <p className='mb-5'>Go Wallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Go Wallet everyday with worldwide users coverage.</p>
      </div>
    </section>
  )
}
