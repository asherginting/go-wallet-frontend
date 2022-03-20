import AuthPage from "../../components/AuthPage";
import PinInput from "react-pin-input";
import ButtonComp from "../../components/ButtonComp";
import { useState } from "react";
import { useRouter } from "next/dist/client/router";
import { AiOutlineCheck } from 'react-icons/ai'

const Pin = () => {
  const [code, setCode] = useState();
  const [test, setTest] = useState('');
  const [status, setStatus] = useState(false);

  const route = useRouter();

  let pin;
  const handleConfirm = (e) => {
    e.preventDefault();
    console.log('pin', pin);
    console.log('test', test)
    if (Number(test) === 123456) {
      setStatus(true)
    }
  }
  return (
    <AuthPage
      info={status ?
        <div className="my-5">
          <div className="badge bg-primary rounded rounded-pill py-2 my-5">
            <AiOutlineCheck className="fs-1 fw-bold text-center"/>
          </div>
          <h2>Your PIN Was Successfully Created</h2>
          <p className="my-5">Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</p>
        </div>
        : <>
          <h2>Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h2>
          <p className="my-5">Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</p>
        </>
      }
      form={status
        ?  <div className="mt-5">
            <ButtonComp event={e => route.push('/auth/login')} block>Login Now</ButtonComp>
          </div>
        : <form>
          <PinInput 
          length={6} 
          focus
          ref={(n) => (pin = n)}
          onChange={(value, index) => {setTest(value)}}
          type="numeric" 
          inputMode="number"
          style={{padding: '10px'}}  
          inputStyle={{borderColor: 'purple', color: 'black'}}
          inputFocusStyle={{borderColor: 'purple'}}
          autoSelect={true}
          regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
          <div className="mt-5">
            <ButtonComp event={handleConfirm} block>Confirm</ButtonComp>
          </div>
        </form>
      }
    />
  )
}

export default Pin;
