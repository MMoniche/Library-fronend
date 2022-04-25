import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return (
        <header className={"fixed-top"}>
            <nav className={"navbar navbar-inverse bg-warning"}>
                <div className={"container-fluid"}>
                    <div className={"navbar-header"}>
                        <span className={"navbar-brand header-font"}>Library-181130</span>
                    </div>
                    <div className={"navbar-header navbar-right"}>

                        <div className="dropdown">
                            <button className="dropbtn">Books/Category</button>
                            <div className="dropdown-content">
                                <a><Link to={"/books"}>Books</Link></a>
                                <a><Link to={"/categories"}>Categories</Link></a>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header;
