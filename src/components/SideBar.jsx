import React from 'react';
import './sideBar.css';

function SideBar() {
    const currentPath = window.location.pathname;

    return (
        <aside id="sidebar" className="sidebar">
            <div className="logo-section">
                <img src="/path-to-your-logo.png" alt="Logo" className="logo" />
                <span className="logo-text">U-Recover</span>
            </div>
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <a href="/" className={`nav-link ${currentPath === '/' ? 'active' : ''}`} aria-label="Dashboard">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/home" className={`nav-link ${currentPath === '/home' ? 'active' : ''}`} aria-label="Home">
                        <i className="bi bi-house"></i>
                        <span>Home</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/profile" className={`nav-link ${currentPath === '/profile' ? 'active' : ''}`} aria-label="Profile">
                        <i className="bi bi-person"></i>
                        <span>Profile</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/notifications" className={`nav-link ${currentPath === '/notifications' ? 'active' : ''}`} aria-label="Notifications">
                        <i className="bi bi-bell"></i>
                        <span>Notifications</span>
                        <span className="notification-badge">5</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/resources" className={`nav-link ${currentPath === '/resources' ? 'active' : ''}`} aria-label="Resources">
                        <i className="bi bi-file-earmark-text"></i>
                        <span>Resources</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/chat" className={`nav-link ${currentPath === '/chat' ? 'active' : ''}`} aria-label="Chat Box">
                        <i className="bi bi-chat-dots"></i>
                        <span>Chat Box</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/counselling" className={`nav-link ${currentPath === '/counselling' ? 'active' : ''}`} aria-label="Counselling">
                        <i className="bi bi-headset"></i>
                        <span>Counselling</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/settings" className={`nav-link ${currentPath === '/settings' ? 'active' : ''}`} aria-label="Account Setting">
                        <i className="bi bi-gear"></i>
                        <span>Account Setting</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default SideBar;
