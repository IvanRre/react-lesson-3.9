import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <tr>
            <td>
                <Link to="/">Main</Link>
            </td>
            <td>
                <Link to="/login">Login</Link>
            </td>
            <td>
                <Link to="/users">Users</Link>
            </td>
        </tr>
    );
};

export default NavBar;
