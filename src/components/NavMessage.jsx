import React from 'react'

function NavMessage() {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-chat-left-text"></i>
                <span className="badge bg-success badge-number">3</span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-header">
                    you have 3 new messages
                    <a href="#">
                        <span className="badge rounded-pill bg-primary p-2 ms-2">
                            view all
                        </span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                    <a href="#">
                        <img
                            src="assets/img/messages-1.jpg"
                            alt=""
                            className="rounded-circle"
                        />
                        <div>
                            <h4>Maria Hudson</h4>
                            <p>
                                Velt skasdbf dghgd et h sgdsrg sdsfsfef sgfvs
                            </p>
                            <p>4 hrs. ago</p>
                        </div>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="message-item">
                    <a href="#">
                        <img
                            src="assets/img/messages-1.jpg"
                            alt=""
                            className="rounded-circle"
                        />
                        <div>
                            <h4>Ana  Nelson</h4>
                            <p>
                                Velt skasdbf dghgd et h sgdsrg sdsfsfef sgfvs
                            </p>
                            <p>6 hrs. ago</p>
                        </div>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li className="message-item">
                    <a href="#">
                        <img
                            src="assets/img/messages-1.jpg"
                            alt=""
                            className="rounded-circle"
                        />
                        <div>
                            <h4>Chike Pascal</h4>
                            <p>
                                Velt skasdbf dghgd et h sgdsrg sdsfsfef sgfvs
                            </p>
                            <p>8 hrs. ago</p>
                        </div>
                    </a>
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

export default NavMessage