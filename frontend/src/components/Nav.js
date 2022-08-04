import React from 'react-dom';
import { Link } from 'react-router-dom';
const Nav=()=>
{
    return(
        <div>
          
            <ul className="header-ul">
                <li><Link to="/">Product</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/logout">Logout Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/signup"><button>SignUp</button></Link></li>
                <li><Link to="/login"><button>Login</button></Link></li>
               
            </ul>
        </div>

    );
}

export default Nav;