import AuthPage from "../../components/AuthPage";
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import InputAuth from "../../components/InputAuth";
import { VscLock } from 'react-icons/vsc';
import styles from '../../styles/Auth.module.css';
import Link from 'next/link';
import ButtonComp from "../../components/ButtonComp";

const Register = () => {
  return (
    <AuthPage
    form={
      <>
      <form>
        <InputAuth IconElement={<AiOutlineUser className={`${styles.icon} fs-4 position-absolute`}/>} type='text' placehld='first name' />
        <InputAuth IconElement={<AiOutlineUser className={`${styles.icon} fs-4 position-absolute`}/>} type='text' placehld='last name' />
        <InputAuth IconElement={<AiOutlineMail className={`${styles.icon} fs-4 position-absolute`}/>} type='text' placehld='e-mail' />
        <InputAuth IconElement={<VscLock className={`${styles.icon} fs-4 position-absolute`}/>} type='password' placehld='password'  /> 
        <div className="my-5">
          <ButtonComp block cls='mt-3'>Signup</ButtonComp>
        </div>
        <div className="d-flex justify-content-end">
          Already have an account? Lets
          <Link href='/auth/login'>
            <a className="fw-bold text-decoration-none ps-1 "> Login</a>
          </Link>
        </div>
      </form>
      </>
    }
    />
  )
}

export default Register
