import style from '../styles/scss/Footer.module.scss'

export default function GoFooter() {
  return (
    <footer className={` ez-footer bg-primary py-5`}>
      <div className="footer-wrapper container px-md-5 px-4 text-white">
        <section className="footer-head">
          <h3 className="fw-bolder mb-4">Go Wallet</h3>
          <p className={style.desc}>Simplify financial needs and saving much time in banking needs with one single app.</p>
        </section>
        <hr className="my-4 my-lg-5" />
        <section className="footer-credit row">
          <div className="col-12 col-lg-7">
            <p className="mb-5 mb-lg-0">{new Date().getFullYear()} Go Wallet. All right reserved.</p>
          </div>
          <div className="contacts col-12 col-lg-5 d-lg-flex justify-content-end">
            <p className="mb-2 me-lg-4 mb-lg-0">+62 5637 8882 9901</p>
            <p className="m-0">contact@gowallet.com</p>
          </div>
        </section>
      </div>
    </footer>
  )
}
