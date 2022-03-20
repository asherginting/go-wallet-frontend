import Link from "next/link";
import style from './Navbar.module.scss'
import { Navbar, Container, Nav } from "react-bootstrap";
import Button from "./Button";

const Navigation = () => {
  const show = (e) => {
    e.preventDefault();
    const element = document.getElementById('navbarRight')
    if (element.style.display === 'flex') {
      element.style.display = 'none';
    } else {
      element.style.display = 'flex'
    }
  }
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-primary fixed-top py-4">
    <div className="container">
      <Link href='/'>
        <a className="navbar-brand fw-bold text-white fs-2">Zwallet</a>
      </Link>
      <button onClick={show}
        className="navbar-toggler bg-secondary"
        type="button"
        data-bs-toggle="collapse"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarRight">
        <ul className={`${style.btncontainer} navbar-nav mb-2 mb-lg-0`}>
          <li className="nav-item me-0 my-4 my-md-0 me-md-4">
            <Button block variant="outline-secondary">Login</Button>
          </li>
          <li className="nav-item">
            <Button block variant="secondary" cls='text-dark'>Signup</Button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}


// const Navigation = () => {
//   const show = (e) => {
//     e.preventDefault();
//     const element = document.getElementById('navbarRight')
//     if (element.style.display === 'block') {
//       element.style.display = 'none';
//     } else {
//       element.style.display = 'block'
//     }
//   }
//   return (
//     <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
//       <div className="container">
//         <Link href='/'>
//           <a className="navbar-brand fw-bold text-white fs-2">Zwallet</a>
//         </Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse  justify-content-end" id="navbarRight">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item me-5">
//               <Button block variant="outline-primary">Login</Button>
//               {/* <Link href='/login'>
//                 <a className="nav-link fw-bold text-white btn btn-outline-primary py-3 px-5">Login</a>
//               </Link> */}
//             </li>
//             <li className="nav-item ">
//               <Button block variant="secondary" cls='text-dark'>Signup</Button>
//               {/* <Link href='/signup'>
//                 <a className="nav-link fw-bold btn btn-secondary text-dark py-3 px-5">Signup</a>
//               </Link> */}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

export default Navigation;
