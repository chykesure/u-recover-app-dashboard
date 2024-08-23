import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sideBar.css';

function SideBar() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <aside id="sidebar" className="sidebar">
            <div className="logo-section">
                <img src="/path-to-your-logo.png" alt="Logo" className="logo" />
                <span className="logo-text">U-Recover</span>
            </div>
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link to="/" className={`nav-link ${currentPath === '/' ? 'active' : ''}`} aria-label="Dashboard">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/home" className={`nav-link ${currentPath === '/home' ? 'active' : ''}`} aria-label="Home">
                        <i className="bi bi-house"></i>
                        <span>Home</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className={`nav-link ${currentPath === '/profile' ? 'active' : ''}`} aria-label="Profile">
                        <i className="bi bi-person"></i>
                        <span>Profile</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/notifications" className={`nav-link ${currentPath === '/notifications' ? 'active' : ''}`} aria-label="Notifications">
                        <i className="bi bi-bell"></i>
                        <span>Notifications</span>
                        <span className="notification-badge">5</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/resources" className={`nav-link ${currentPath === '/resources' ? 'active' : ''}`} aria-label="Resources">
                        <i className="bi bi-file-earmark-text"></i>
                        <span>Resources</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/chat" className={`nav-link ${currentPath === '/chat' ? 'active' : ''}`} aria-label="Chat Box">
                        <i className="bi bi-chat-dots"></i>
                        <span>Chat Box</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/counselling" className={`nav-link ${currentPath === '/counselling' ? 'active' : ''}`} aria-label="Counselling">
                        <i className="bi bi-headset"></i>
                        <span>Counselling</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/settings" className={`nav-link ${currentPath === '/settings' ? 'active' : ''}`} aria-label="Account Setting">
                        <i className="bi bi-gear"></i>
                        <span>Account Setting</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default SideBar;
