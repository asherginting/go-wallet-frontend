import Link from 'next/link'
import { useEffect, useState } from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {MdOutlineLock, MdPassword} from 'react-icons/md'
import {BiUser} from 'react-icons/bi'
import GoButton from '../GoButton'
import GoInput from '../GoInput'

export default function GoForm({path, readyToReset}) {

  useEffect(() => {
    console.log(path)
  },[path]);
  return (
    <>
      <form className='d-flex flex-column align-items-end'>
        {
          (path === 'login' || path === 'register') && (
            <>
              {
                path === 'register' && (
                  <>
                    <GoInput
                      wrapperClassName='mb-4 mb-md-5'
                      icon={<BiUser />}
                      placeholder='Enter your firstname'
                      name='firstname'
                    />
                    <GoInput
                      wrapperClassName='mb-4 mb-md-5'
                      icon={<BiUser />}
                      placeholder='Enter your lastname'
                      name='lastname'
                    />
                  </>
                )
              }
              <GoInput
                wrapperClassName='mb-4 mb-md-5'
                icon={<HiOutlineMail />}
                placeholder='Enter your e-mail'
                name='email'
                type='email'
              />
              <GoInput
                wrapperClassName={'mb-3'}
                icon={<MdOutlineLock />}
                placeholder='Enter your password'
                name='password'
                type='password'
              />
              {
                path === 'login' && (
                  <Link href='/forgot-password'>
                    <a className='text-gray'>Forgot password?</a>
                  </Link>
                )
              }
            </>
          )
        }
        {
          (path === 'forgot-password' && !readyToReset) && (
            <GoInput
              wrapperClassName='mb-4 mb-md-5'
              icon={<HiOutlineMail />}
              placeholder='Enter your e-mail'
              name='email'
            />
          )
        }
        {
          (path === 'forgot-password' && readyToReset) && (
            <>
              <GoInput
                wrapperClassName='mb-4 mb-md-5'
                icon={<MdPassword />}
                placeholder='Confirmation code'
                name='text'
              />
              <GoInput
                wrapperClassName='mb-4 mb-md-5'
                icon={<MdOutlineLock />}
                placeholder='Create new password'
                name='password'
              />
              <GoInput
                wrapperClassName='mb-4 mb-md-5'
                icon={<MdOutlineLock />}
                placeholder='Confirm new password'
                name='password'
              />
            </>
          )
        }

        <GoButton className='w-100 py-2 py-md-3 my-4'>
          {
            path === 'login' && "Login"
          }
          {
            path === 'register' && "Register"
          }
          {
            (path === 'forgot-password' && !readyToReset) && "Confirm"
          }
          {
            (path === 'forgot-password' && readyToReset) && "Reset Password"
          }
        </GoButton>
      </form>
      {
        path === 'login' && (
          <p className='text-center text-gray'>Don’t have an account? Let’s  
            <Link href='/register'>
              <a className='fw-bold'> Sign Up</a>
            </Link>
          </p>
        )
      }
      {
        path === 'register' && (
          <p className='text-center text-gray'>Already have an account? Let’s  
            <Link href='/login'>
              <a className='fw-bold'> Login</a>
            </Link>
          </p>
        )
      }
    </>
    
  )
}
