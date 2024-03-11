import { NavLink, useOutletContext } from 'react-router-dom'

function Contact() {
    const context_ = useOutletContext()
    return (
        <div>
            Contact.
            {context_}.
            <NavLink to="/helpme">HelpMe</NavLink>
        </div>
    )
}

export default Contact;