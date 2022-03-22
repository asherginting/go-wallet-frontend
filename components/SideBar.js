import { BsGrid, BsArrowUp } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiUser3Line } from 'react-icons/ri';
import Link from 'next/link';
import { MdOutlineLogout } from 'react-icons/md';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import styles from '../styles/Transfer.module.css';
import ButtonComp from "../components/ButtonComp";
import { useDispatch } from 'react-redux';

const SideBar = () => {
  const route = useRouter();
  const [routes, setRoutes] = useState('/dashboard');
  const dispatch = useDispatch();

  useEffect(() => {
    setRoutes(route.pathname)
  }, [route.pathname])

  const dataSide = [
    {icon: BsGrid, desc: 'Dashboard', to: '/dashboard'},
    {icon: BsArrowUp, desc: 'Transfer', to: '/transfer'},
    {icon: AiOutlinePlus, desc: 'Top Up', to: '/top-up'},
    {icon: RiUser3Line, desc: 'Profile', to: '/profile'}
  ]

  const handleTopup = (e) => {
    e.preventDefault();
    
  }

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: 'LOGOUT'
    })
    route.push('/');
  }

  return (
    <div className='card p-4 bg-white position-relative h-100'>
        {dataSide.map((data, index) => {
          return <Link href={data.to} key={data.desc} className=' d-flex flex-row align-items-center my-3'>
            {route.pathname === '/histories' ? 
              <a id={data.desc} className={`${index === 0 ? 'active-side text-primary': 'text-secondary'} side-side text-decoration-none my-4 ps-2 d-flex flex-row align-items-center`}>
                <data.icon className='fs-5 me-2'/>
                <span>{data.desc}</span>
              </a>  
            : <a id={data.desc} data-bs-toggle={data.to === '/top-up' ? "modal" : ''} data-bs-target={data.to === '/top-up' ? "#exampleModal" : ''} className={`${routes[1] === data.to[1] && routes[2] === data.to[2] ? 'active-side text-primary': 'text-dark'} side-side text-decoration-none my-4 ps-2 d-flex flex-row align-items-center`}>
              <data.icon className='fs-5 me-2'/>
              <span>{data.desc}</span>
            </a>}
          </Link>
        })}
        <ButtonComp event={handleLogout} className=' d-flex flex-row align-items-center my-3'>
          <a className='text-decoration-none text-white my-4 ps-3 position-absolute bottom-0'>
            <MdOutlineLogout className='fs-5 me-2 text-dark'/>
            <span className='text-dark'>Logout</span>
          </a>
        </ButtonComp>  
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-primary text-dark">
              <div className="modal-header border-bottom-0">
                <h5 className="modal-title" id="exampleModalLabel">Topup</h5>
                <button onClick={e => route.push('/top-up')} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <p className="ps-3">Enter the amount of money, and click submit</p>
              <div className="modal-body">
                <form>
                  <input className={`form-control text-center ${styles.inputModal}`} type='number' placeholder="___________" />
                </form>
              </div>
              <div className="modal-footer border-top-0">
                <button onClick={e => route.push('/top-up')} type="button" className="btn btn-light" data-bs-dismiss="modal">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    //   <aside className='col-lg-4'>
    //   <div className='card p-4 bg-light position-relative'>
    //     {dataSide.map((data, index) => {
    //       return <Link href={data.to} key={data.desc} className=' d-flex flex-row align-items-center my-3'>
    //         <a className={`${routes === data.to && 'active-side'} side-side text-decoration-none text-white my-4 ps-2`}>
    //           <data.icon className='fs-5 me-2'/>
    //           <span>{data.desc}</span>
    //         </a>
    //       </Link>
    //     })}
    //     <Link href='/login' className=' d-flex flex-row align-items-center my-3 position-absolute'>
    //       <a className='text-decoration-none text-white my-4 ps-3'>
    //         <MdOutlineLogout className='fs-5 me-2'/>
    //         <span>Logout</span>
    //       </a>
    //     </Link>
    //   </div>
    // </aside>
  )
}

export default SideBar
