import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                <div className="container__menu">
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <div className="container__menu">
                                            <div className="collapse navbar-collapse" id="navbarNav">
                                                <ul className="navbar-nav ms-auto">
                                                    <li className="nav-item">
                                                        <Link to={"/inicio"} className="nav-link">Inicio</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;