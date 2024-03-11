import { Outlet, NavLink } from "react-router-dom"

function Layout2() {

  return (
    <div>
      <NavLink to="/helpme">HelpMe</NavLink>
      <Outlet context={"This is Outlet parameter 2"}/>
    </div>
  )
}

export default Layout2
