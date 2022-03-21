import { useRouter } from "next/dist/client/router";

const ButtonComp = ({display, variant='primary', cls, color, event, route, children, ...rest}) => {
  const router = useRouter()

  return (
    <div className={display ? 'd-grid' : 'd-inline-block'}>
        <button onClick={event} className={`btn btn-${variant} ${cls} fw-bold py-3 px-5 text-${color}`} {...rest}>{children}</button>
    </div>
  )
}

export default ButtonComp;
