import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <div className="navbar">
            <Link to="/abc-notes"><h1>Notes++</h1></Link>
            <div className="links">
                <Link to="/abc-notes">Home</Link>
                <Link to="/abc-notes/create">New Note</Link>   
                <Link to={'/abc-notes/trash'}>Trash</Link>
            </div>
        </div>
    );
}
 
export default Navbar;