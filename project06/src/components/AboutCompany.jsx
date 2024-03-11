import { NavLink } from "react-router-dom"

function AboutCompany() {
    return (
        <div>
            AboutCompany.
            <NavLink to="/about/company/offices">Offices</NavLink>,
            <NavLink to="/about/company/investors">Investors</NavLink>,
        </div>
    )
}

export default AboutCompany;