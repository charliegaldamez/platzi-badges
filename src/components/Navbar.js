import React from 'react';

import logo from "../images/logo.svg";
import "./styles/Navbar.css";

class Navbar extends React.Component{
    render() {
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <a href="/">
                        <img src={logo} alt="Logo" />
                        <span className="font-weight-light">Clases</span>
                        <span className="font-weight-bold">virtuales</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Navbar;