import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import {Outlet} from "react-router-dom"

function Layout1() {

  return (
    <div>
      <Header/>
      <Outlet context={"This is Outlet parameter 1"}/>
      <Footer/>
    </div>
  )
}

export default Layout1
