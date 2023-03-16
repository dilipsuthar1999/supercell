import React from 'react'

const Navbar = ({logo,icons}) => {
    return (
        <nav className="navbar navbar-expand-lg container">
            <button className="navbar-toggler mr-2 order-no-1" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <img src={icons.menu.icon} />
            </button>
            <a className="navbar-brand order-no-2" href="#">
                <img src={logo.imgDark} alt={logo.name} />
            </a>

            <div className="collapse navbar-collapse order-no-4" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto align-items-baseline">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Support</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                </ul>
            </div>
            <ul className="navbar-nav ml-auto flex-row login-icon order-no-3">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <img src={icons.creatorSupercell.icon} alt={icons.creatorSupercell.iconName} />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <img src={icons.makeSupercell.icon} alt={icons.makeSupercell.iconName} />
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <img src={icons.idSupercell.icon} alt={icons.idSupercell.iconName} />
                    </a>
                </li>
            </ul>
        </nav >
    )
}

export default Navbar
