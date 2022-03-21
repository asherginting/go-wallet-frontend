import Layout from "../components/Layout";
import HistoriesList from '../components/HistoriesList';
import SideBar from '../components/SideBar';
import { Row, Col } from 'react-bootstrap';
import styles from '../styles/Histories.module.css';
import histories from '../data/histories';
import { useEffect } from "react";
import { useRouter } from "next/router";

const Histories = () => {
  const route = useRouter();

  return (
    <Layout>
      <main className={`${styles.contain} container`}>
        <Row>
          <aside className="col-lg-4">
            <SideBar />
          </aside>
          <section className="col-12 col-lg-8">
            <div className="card p-4 bg-white">
              <div className="mb-4 d-flex flex-row justify-content-between">
                <h4>Transaction History</h4>
                <form>
                  <select className="form-select bg-secondary text-center">
                    <option className="d-none">--Select Filter--</option>
                    <option value='1'>1</option>
                  </select>
                </form>
              </div>
              {histories.map((data, index) => {
                  return <HistoriesList key={index} image={data.image} name={data.name} status={data.status} total={data.total} />
                })}
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  )
}

export default Histories;
