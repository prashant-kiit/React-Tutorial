import { useOutletContext, NavLink } from "react-router-dom"

function About() {
    const context_ = useOutletContext()
    return (
        <div>
            About Me and Company:
            {context_}.
            <NavLink to="/about/me">AboutMe</NavLink>,
            <NavLink to="/about/company">AboutCompany</NavLink>,
        </div>
    )
}

export default About;