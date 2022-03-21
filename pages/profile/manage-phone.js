import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import SideBar from "../../components/SideBar";
import styles from '../../styles/Profile.module.css';
import { useRouter } from "next/router";
import ListDetail from "../../components/ListDetail";
import Link from "next/link";
import { BiTrashAlt } from 'react-icons/bi';

const Info = () => {
  const route = useRouter();

  const { login, phoneList, email } = useSelector(state => state);

  return (
    <Layout>
      <main className={`container ${styles.contain}`}>
        <Row>
          <aside className="col-12 col-lg-4">
            <SideBar />
          </aside>
          <section className="col-12 col-lg-8">
            <div className={`card px-4 py-5 bg-light ${styles.card}`}>
              <h4>Manage Phone Number</h4>
              <p className={`${styles.par} my-4`}>You can only delete the phone number and then you must add another phone number.</p>
              <div className="position-relative">
                <ListDetail title='Phone Number' desc={phoneList.phone || '+62 ----'}/>
                <Link href='/profile/manage-phone'>
                  <a className={`text-decoration-none position-absolute fs-2 ${styles.trash}`}>
                    <BiTrashAlt/>
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </Row>
      </main>
    </Layout>
  )
}

export default Info;
