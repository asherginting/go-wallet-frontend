import { FormControl, InputGroup } from 'react-bootstrap'
import style from '../styles/scss/Input.module.scss'

export default function GoInput({ inputClassName, wrapperClassName, icon, ...rest}) {
  return (
    <InputGroup className={wrapperClassName}>
      {icon && (
          <InputGroup.Text id="basic-addon1" className='border-0 border-bottom bg-white rounded-0 text-gray fs-3'>{icon}</InputGroup.Text>
        )
      }
      <FormControl
        className={`${style.input} ${inputClassName} border-0 border-bottom rounded-0 py-2 bg-white`}
        aria-label={rest.placeholder}
        aria-describedby="basic-addon1"
        {...rest}
        />
    </InputGroup>
  )
}
