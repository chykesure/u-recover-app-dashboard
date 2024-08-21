import React from 'react';
import './logo.css';
import UcoverLogo from '../images/ucover.png';

function Logo() {
    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar');
    }
    return (
        <div className="d-flex align-items-center justify-content-between">
            <a href="/" className="logo d-flex align-items-center">
                <span className="d-none d-lg-block d-flex align-items-center">
                    <img src={UcoverLogo} alt="Logo" />
                    U-Recover
                </span>
            </a>
            <i className="bi bi-list toggle-sidebar-btn" onClick={handleToggleSideBar}></i>
        </div>
    );
}

export default Logo;
