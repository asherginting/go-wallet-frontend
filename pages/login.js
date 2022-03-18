import {useRouter} from 'next/router'
import GoSideBanner from '../components/GoSideBanner';
import { useEffect, useState } from 'react';
import GoForm from '../components/auth/GoForm';
import Head from 'next/head';
import { capitalize } from '../helpers/stringFormatter';

export default function Login({readyToReset}) {
  const router = useRouter();
  const [pathName, setPathName] = useState(router.pathname || '');

  useEffect(() => {
    switch (router.pathname) {
      case '/login': {
        setPathName('login');
        break;
      }
      case '/register': {
        setPathName('register');
        break;
      }
      case '/forgot-password': {
        setPathName('forgot-password');
        break;
      }

      default: {
        setPathName('login');
      }
    }
  }, [router]);

  return (
    <>
      <div>
        <Head>
          <title> {capitalize(pathName)} </title>
        </Head>
      </div>
      <section className="row vh-100 align-items-center">
        <GoSideBanner wrapperClassName="banner h-100 col-lg-7 d-none d-lg-flex justify-content-center" />
        <div className="form col px-md-5 vh-100 overflow-auto">
          <div className="wrapper px-4 px-md-5 py-5">
            {
              (pathName === 'login' || pathName === 'register') && (
                <>
                  <p className='fw-bold fs-5 mb-4'>
                    Start Accessing Banking Needs
                    With All Devices and All Platforms
                    With 30.000+ Users
                  </p>
                  <p className='text-gray mb-5'>
                    Transfering money is eassier than ever, you can access Go Wallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!
                  </p>
                </>
              )
            }
            {
              pathName === 'forgot-password' && (
                <>
                  <p className='fw-bold fs-5 mb-4'>
                    Did You Forgot Your Password?
                    Don’t Worry, You Can Reset Your
                    Password In a Minutes.
                  </p>
                  {
                    readyToReset ? (
                      <p className='text-gray mb-5'>
                        Now you can create a new password for your EZ Wallet account. Type your password twice so we can confirm your new passsword.
                      </p>
                    ) : (
                      <p className='text-gray mb-5'>
                        To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.
                      </p>
                    )
                  }
                </>

              )
            }
            <GoForm path={pathName} readyToReset={readyToReset} />
          </div>
        </div>
      </section>
    </>
  )
}
