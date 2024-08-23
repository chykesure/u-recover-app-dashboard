import React from 'react';
import './dashboard.css';

function Dashboard() {
    return (
        <section className="dashboard section">
            <div className="container-fluid">
                <div className="row">
                    

                    {/* Main Content */}
                    <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group mr-2">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                            </div>
                        </div>

                        {/* Cards Row */}
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Total Sales</h5>
                                        <p className="card-text">350</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">New Users</h5>
                                        <p className="card-text">120</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Revenue</h5>
                                        <p className="card-text">$5,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <h2>Recent Activity</h2>
                        <div className="table-responsive">
                            <table className="table table-striped table-sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2024-08-23</td>
                                        <td>User Login</td>
                                        <td>Success</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>2024-08-22</td>
                                        <td>Data Export</td>
                                        <td>Success</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>2024-08-21</td>
                                        <td>Profile Update</td>
                                        <td>Failed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
