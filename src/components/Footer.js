import React from 'react'
import SocialLinks from './SocialLinks'
import AppBtn from './AppBtn'

const Footer = ({ logo, appLinks, socialLinks }) => {
    return (
        <footer>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 order-no-3 mb-2">
                        <div className="d-flex footer-content-align">
                            <div className="mt-1">
                                <SocialLinks title="FOLLOW CLASH OF CLANS ON" sociallinks={socialLinks} />
                            </div>
                            <div className="mt-3 ml-lg-auto">
                            <AppBtn apps={appLinks} />
                            </div>  
                        </div>
                    </div>
                    <div className="col-12 order-no-2">
                        <hr className="my-4" />
                    </div>
                    <div className="col-12 order-no-1">
                        <div className="d-flex footer-content-align">
                            <ul className="footerLinks order-no-2">
                                <li className="footer-item">
                                    <a className="footer-link" href="#">Terms of Service</a>
                                </li>
                                <li className="footer-item">
                                    <a className="footer-link" href="#">Privacy Policy</a>
                                </li>
                                <li className="footer-item">
                                    <a className="footer-link" href="#">Parent’s Guide</a>
                                </li>
                                <li className="footer-item">
                                    <a className="footer-link" href="#">Safe and Fair Play Policy</a>
                                </li>
                                <li className="footer-item">
                                    <a className="footer-link" href="#">Other Legal Docs</a>
                                </li>
                                <li className="footer-item">
                                    <a className="footer-link" href="#">For Media</a>
                                </li>
                                <li className="footer-item">
                                    <a className="footer-link" href="#">Manage Cookies</a>
                                </li>
                            </ul>
                            <a className="footer-brand order-no-1 ml-lg-auto" href="#">
                                <img src={logo.imgDark} alt={logo.name} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
