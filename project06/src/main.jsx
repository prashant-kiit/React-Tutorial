import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout1 from './Layout1.jsx'
import Layout2 from './Layout2.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import AboutMe from './components/AboutMe.jsx'
import AboutCompany from './components/AboutCompany.jsx'
import Offices from './components/Offices.jsx'
import Investors from './components/Investors.jsx'
import Contact from './components/Contact.jsx'
import HelpMe1 from './components/HelpMe1.jsx'
import HelpMe2 from './components/HelpMe2.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

const router2 = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout2 />}>
    </Route>
  )
)

const router1 = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout1 />}>
      <Route path="" element={<Home />} />
      <Route path="about/">
        <Route path="" element={<About />} />
        <Route path="me" element={<AboutMe />} />
        <Route path="company/">
          <Route path="" element={<AboutCompany />} />
          <Route path="offices/">
            <Route path="" element={<Offices />} />
            <Route path=":officeId" element={<Offices />} />
          </Route>
          <Route path="investors" element={<Investors />} />
        </Route >
      </Route>
      <Route path="helpme" element={<HelpMe1 />} />
      <Route path="contact" element={<HelpMe2 />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route >
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router1} />
    {/*<RouterProvider router={router2} />*/}
  </React.StrictMode>,
)
