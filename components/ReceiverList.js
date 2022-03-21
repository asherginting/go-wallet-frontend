import Link from "next/link";
import styles from './styles/ReceiverList.module.css';
import { useRouter } from 'next/router';

const ReceiverList = ({event, image, name, phone}) => {
  const router = useRouter();

  return (
    <div style={{cursor: 'pointer'}} onClick={event} className={`${styles.card} d-flex flex-row align-items-center justify-content-between`}>         
      <div className={`d-flex flex-row my-3 p-3 text-decoration-none text-dark`}>
        <style jsx>
          {`.photo {
              background-image: url(${image});
            }`
          }
        </style>
        <div className={`${styles.photoUser} photo`}></div>
        <div className='ps-3'>
          <h6>{name}</h6>
          <div>{phone}</div>
        </div>
      </div>
    </div>
    // <Link href={`/transfer/${route}`} className='d-flex flex-row align-items-center justify-content-between'>         
    //   <a className={`${styles.card} d-flex flex-row my-3 p-3 text-decoration-none text-white`}>
    //     <style jsx>
    //       {`.photo {
    //           background-image: url(${image});
    //         }`
    //       }
    //     </style>
    //     <div className={`${styles.photoUser} photo`}></div>
    //     <div className='ps-3'>
    //       <h6>{name}</h6>
    //       <div>{phone}</div>
    //     </div>
    //   </a>
    // </Link>
  )
}

export default ReceiverList;
