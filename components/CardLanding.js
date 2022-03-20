import { Col } from "react-bootstrap"
import style from './CardLanding.module.css';

const CardLanding = ({photo, head, par, bg = 'primary'}) => {
  return (
  <Col ms={12} lg={4} className='px-4 mt-3 mt-lg-0'>
    <div className={`${style.cardcontain} card bg-${bg} px-4 text-center`}>
      <div className="mx-auto mt-4">{photo}</div>
      <h3 className="mt-4 text-light">{head}</h3>
      <p className="mt-4 mb-5 text-light">{par}</p>
    </div>
  </Col>)
}

export default CardLanding;
