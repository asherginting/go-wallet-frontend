import { Col } from "react-bootstrap"
import style from './styles/CardLanding.module.css';

const styling = () => {
  <style jsx>{`
    .cardcontain {
      height: 269px;
    }  
  `}</style>
}

const CardLanding = ({image, head, par, bg = false}) => {
  return (
  <div className='col-12 col-lg-4 px-4 mt-3 mt-lg-0'>
    <div className={`${bg ? 'bg-white' : 'bg-white'} cardcontain card px-4 text-center`}>
      <div className="mx-auto mt-4">{image}</div>
      <h3 className="mt-4">{head}</h3>
      <p className="mt-4 mb-5">{par}</p>
    </div>
    {styling}
  </div>)
}

export default CardLanding;
