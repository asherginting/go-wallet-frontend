import { Col, Row } from "react-bootstrap"
import styles from '../styles/Auth.module.css';
import Image from "next/image";
import { AiOutlineMail } from 'react-icons/ai'
import InputAuth from "../components/InputAuth";
import { VscLock } from 'react-icons/vsc';
import Link from 'next/link';
import ButtonComp from "../components/ButtonComp";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const AuthPage = ({form, info}) => {
  return (
    <section>
      <Row>
        <Col sm={12} lg={6} className={styles.left}>
          <div className="p-5">
            <Link href='/'>
            <h1 className='fs-1 text-light'>Zwallet</h1>
            </Link>
            <Image src='/img/auth-phone.png' alt='phone' layout="responsive" width={300} height={300}/>
            <h2 className="my-5 text-light">App that Convering Banking Needs.</h2>
            <p className='text-light'>
              Zwallet is an application that focussing in banking needs for all users
              in the world. Always updated and always following world trends.
              5000+ users registered in Zwallet everyday with worldwide
              users coverage.
            </p>
          </div>
        </Col>
        <Col sm={12} lg={6} className={styles.right}>
         <div className="p-5">
          {info 
            ? info
            : <><h2>Start Accessing Banking Needs <br />With All Devices and All Platforms<br/> With 30.000+ Users</h2>
              <p className="my-5">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p></>
          }
          {form}
         </div>
        </Col>
      </Row>
    </section>
  )
}

export default AuthPage
