import styles from '../styles/Transfer.module.css';

const ListDetail = ({title, desc}) => {
  return (
    <div className={`${styles.cardList} card bg-white p-3 mt-3`}>
      <div>{title}</div>
      <h5 className="mt-3 fw-bold">{desc}</h5>
    </div>
  )
}

export default ListDetail;
