import styles from './InputAuth.module.css';
import { AiOutlineEye } from 'react-icons/ai'

const InputAuth = ({IconElement, cls, id, placehld, type}) => {
  return (
    <div className={`${styles.contain} position-relative mt-5`}>
      {IconElement}
      {type === 'password' && <AiOutlineEye className={`${styles.eye} position-absolute`} />}
      <div className=''>
        <input className={`${styles.inputsection} w-100 ${cls}`} id={id} type={type} placeholder={`Enter your ${placehld}`}/>
      </div>
   </div>
  )
}

export default InputAuth;
