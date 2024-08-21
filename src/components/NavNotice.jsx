import React from 'react'

function NavNotice() {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                    you have 4 new notification
                    <a href="#">
                        <span className="badge rounded-pill bg-primary p-2 ms-2">
                            view all
                        </span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                    <i className="bi bi-exclamation-circle text-warning"></i>
                    <div>
                        <h4>Lorem Ipsum</h4>
                        <p>Quea dolorem Erums writers odistabe</p>
                        <p>30 min. ago</p>
                    </div>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                    <i className="bi bi-check-circle text-success"></i>
                    <div>
                        <h4>Atque rereum nesuidr</h4>
                        <p>Quea dolorem Erums writers odistabe</p>
                        <p>1 hr. ago</p>
                    </div>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                    <i className="bi bi-check-circle text-success"></i>
                    <div>
                        <h4>sit rereum fugs</h4>
                        <p>Quea dolorem Erums writers odistabe</p>
                        <p>2 hrs. ago</p>
                    </div>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                    <i className="bi bi-check-circle text-success"></i>
                    <div>
                        <h4>Dicta reprehemends</h4>
                        <p>Quea dolorem Erums writers odistabe</p>
                        <p>4 hrs. ago</p>
                    </div>
                </li>

                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="dropdown-footer">
                    <a href="#">show all notification</a>
                </li>
            </ul>
        </li>
    );
}

export default NavNotice