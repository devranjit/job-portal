import { Link } from "react-router-dom";


const Menu = () => {
    return (
        <div>
            
            <nav className="flex justify-normal gap-10 py-2">
                <Link to="/">Home</Link>
                <Link to="/add-job">Add Job</Link>
                <Link to="/sign-in">Sign In</Link>
                <Link to="/sign-up">Sign up</Link>
            </nav>
            
        </div>
    );
};

export default Menu;