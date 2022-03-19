import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
// import BarChart from '../components/BarChart'
import SideBar from '../components/SideBar'
import { Container, Row, Col } from 'react-bootstrap'

export default function Dashboard() {

  return (
    <>
      <style jsx>
        {`
          .banner{
            background-color: #533E85;
            height: 190px;
            border-radius: 20px;
            display: flex;
            flex-direction: row;
            justify-content: between;
            color: white;
            padding: 30px;
          }
          .banner .section{
            flex: 1;
          }
          .banner .section .button{
            width: 100px;
            padding: 6px;
            border: 1px solid #fff;
            background-color: rgba(255,255,255,0.4);
            color: #fff;
            border-radius: 10px;
          }
        `}
      </style>
      <Container>
        <Row>
          <Col xs={3}>
            <SideBar />
          </Col>
          <Col>
            <Row>
              <Col xs={12}>
                <div className='banner'>
                  <div className="section">
                    <div>Balance</div>
                    <h3>Rp120.000</h3>
                    <div>+62 813-9387-7946</div>
                  </div>
                  <div className='section text-end'>
                    <div className='mb-2'>
                      <button className='button'>Transfer</button> 
                    </div> 
                    <div>
                      <button className='button'>Topup</button>  
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={7}>
                  x
                {/* <BarChart data={[10,50,200,300]} labels={['1','2','3','4']} income={0} expense={0} /> */}
              </Col>
              <Col xs={5}>
                  <div className=''>
                      <div>Transaction History</div>

                  </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}
