import Head from 'next/head'
import { Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import styles from '../../styles/Profile.module.css';
import ButtonComp from "../../components/ButtonComp";
import PinInput from "react-pin-input";
import { useState } from "react";

const ChangePin = () => {
  const [code, setCode] = useState();
  let pin;

  return (
    <Layout>
      <Head>
        <title>Go-Wallet | Change PIN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`container ${styles.contain}`}>
        <Row>
          <aside className="col-12 col-lg-4">
            <SideBar />
          </aside>
          <section className="col-12 col-lg-8">
            <div className={`card px-4 py-5 bg-white ${styles.card}`}>
              <h4>Change PIN</h4>
              <p className={`${styles.par} my-4`}>Enter your current 6 digits Go - Wallet PIN below to continue to the next steps.</p>
              <div className={`${styles.input} mx-auto`}>
                <PinInput 
                  length={6} 
                  focus
                  ref={(n) => (pin = n)}
                  onChange={(value, index) => {setCode(value)}}
                  type="numeric" 
                  inputMode="number"
                  style={{padding: '10px'}}  
                  inputStyle={{borderColor: 'black', color: 'black'}}
                  inputFocusStyle={{borderColor: 'purple'}}
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
                <ButtonComp cls='mt-5' display='true'>Change PIN</ButtonComp>
              </div>
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  )
}

export default ChangePin;
