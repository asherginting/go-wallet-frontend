import style from './styles/Footer.module.scss'
import Link from "next/link";
import Image from "next/image";

const Footer = ({full}) => {
  return (
    <footer className={style.footer}>
      <div className='container'>
        {full 
        ? <><div className={style.toptext}>
          <Link href='/'>
          <Image src='/img/logo.png' alt='logo' layout="fixed" width={110} height={100}/>
          </Link>
          <p className="">Go - Wallet is simplify financial needs and saving much time in banking needs with one single app.</p>
        </div>
        <div className="my-5 border border-bottom" /> </>
        : <></>}
        <div className='row d-flex flex-row justify-content-between'>
          <div className='col-12 col-lg-6'>2022 Go - Wallet. All right reserved.</div>
          <div className='col-12 col-lg-6 mt-4 mt-lg-0 text-end'>
            <span className='me-5'>+62 812 3456 789</span>
            <span>contact@gowallet.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
