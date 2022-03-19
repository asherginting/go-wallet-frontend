import Navigation from "./Navbar";
import Footer from "./Footer";

const Layout = ({children, ...set}) => {
  return (
    <div>
      <Navigation/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout;
