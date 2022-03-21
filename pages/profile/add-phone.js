import { Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import styles from '../../styles/Profile.module.css';
import ButtonComp from "../../components/ButtonComp";
import { useState } from "react";
import InputAuth from "../../components/InputAuth";
import { BsTelephone } from 'react-icons/bs';

const ChangePin = () => {
  const [code, setCode] = useState();
  let pin;

  return (
    <Layout>
      <main className={`container ${styles.contain}`}>
        <Row>
          <aside className="col-12 col-lg-4">
            <SideBar />
          </aside>
          <section className="col-12 col-lg-8">
            <div className={`card px-4 py-5 bg-light ${styles.card}`}>
              <h4>Add Phone Number</h4>
              <p className={`${styles.par} my-4`}>Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>
              <div className={`${styles.input} mx-auto`}>
                <InputAuth id='second' IconElement={<BsTelephone className={`${styles.icon} fs-4 position-absolute`}/>} type='number' placehld='phone number' />
                <ButtonComp cls='mt-5' display='true'>Add Phone Number</ButtonComp>
              </div>
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  )
}

export default ChangePin;
