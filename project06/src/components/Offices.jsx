import { useParams } from "react-router-dom";

function Offices() {
    const {officeId} = useParams()
    return (
        <div>
            Offices {officeId}
        </div>
    )
}

export default Offices;