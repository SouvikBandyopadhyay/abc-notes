import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( 
        <div className="PageNotFound">
            <h1>Sorry</h1>
            <p>page not found...</p>
            <Link to="/abc-notes">
                Back to Home
            </Link>
        </div>
     );
}
 
export default PageNotFound;