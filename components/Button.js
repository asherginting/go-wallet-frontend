const Button = ({children, block, variant='primary', color, ...rest}) => {
  return (
    <div className={block ? 'd-grid' : 'd-inline-block'}>
        <button className={`btn btn-${variant} fw-bold py-3 px-5 text-${color}`} {...rest}>{children}</button>
    </div>
  )
}

export default Button;
