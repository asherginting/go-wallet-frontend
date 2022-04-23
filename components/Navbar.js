import Link from "next/link";
import style from './styles/Navbar.module.scss'
import { Navbar, Container, Nav } from "react-bootstrap";
import ButtonComp from "./ButtonComp";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdNotificationsNone } from 'react-icons/md'
import { useSelector } from "react-redux";
import Image from "next/image";

const Navigation = () => {
  const route = useRouter();
  const { login, phoneList } = useSelector(state => state);

  const { picture, fullName } = login.results;
  const defaultPict = '/img/profile.png';

  const show = (e) => {
    e.preventDefault();
    const element = document.getElementById('navbarRight')
    if (element.style.display === 'flex') {
      element.style.display = 'none';
    } else {
      element.style.display = 'flex'
    }
  }

  const handleBtn = (e, route) => {
    e.preventDefault();
  }

  return (
    <>
    <nav className="navbar navbar-expand-md navbar-light bg-primary fixed-top py-4">
      <div className="container">
        <Link href='/'>
          <a>
        <Image src='/img/logo.png' alt='logo' layout="fixed" width={100} height={90}/>
        </a>
        </Link>
        <button onClick={show}
          className="navbar-toggler bg-secondary"
          type="button"
          data-bs-toggle="collapse"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarRight">
          <ul className={`${style.btncontainer} navbar-nav mb-2 mb-lg-0 d-flex flex-row justify-content-end align-items-center`}>
            {login.token 
            ? <>
              <li className="nav-item">
                <div className="position-relative">
                  <style jsx>
                    {`
                    .photo-profile {
                      width: 50px;
                      height: 50px;
                      background-position: center;
                      background-size: cover;
                      background-image: url(${picture ? picture : defaultPict});
                      border-radius: 5px;
                    }
                    `}
                  </style>
                  <div className="photo-profile"></div>
                </div>
              </li>
              <li className='mx-3 text-light'>
                <h4 className="fw-bold">{fullName}</h4>
                <div>{phoneList.phone}</div>
              </li>
              <li onClick={handleBtn} className="my-auto">
                <MdNotificationsNone className='text-white fs-2 fw-bold' />
              </li>
              </>
            : <>
              <li className="nav-item me-0 my-4 my-md-0 me-md-4">
                <ButtonComp block='true' variant="outline-secondary" event={e => route.push('/login')}>Login</ButtonComp>
              </li>
              <li className="nav-item">
                <ButtonComp block='true' variant="secondary" event={e => route.push('/signup')} cls='text-dark'>Signup</ButtonComp>
              </li>
              </>}
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navigation;
