import styles from '../styles/Dashboard.module.css';

const HistoriesList = ({image, name, status, total}) => {
  return (
    <div className='d-flex flex-row align-items-center justify-content-between'>
      <style jsx>
        {`.photo-trans {
            background-image: url(${image});
          }`
        }
      </style>
      <div className='d-flex flex-row my-3'>
        <div className={`${styles.phototransaction} photo-trans`}></div>
        <div className='ps-2 text-light'>
          <div>{name}</div>
          <div>{status}</div>
        </div>
      </div>
      <div className={`${status === 'Transfer' ? 'text-danger fw-bold' : 'text-success fw-bold'}`}>
        {status === 'Transfer' ? '-' : '+'}Rp{Number(total).toLocaleString('id-ID')}
      </div>
    </div>
  )
}

export default HistoriesList;
