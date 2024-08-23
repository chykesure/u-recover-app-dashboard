import React from 'react';
import './counselling.css';
import PageTitle from './PageTitle';

function Counselling({ page }) {
    return (
        <main id="main" className="main">
            <PageTitle page="Counselling" />
            <section className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card shadow p-4">
                            <h2 className="card-title text-center mb-4">Get in Touch With a Counsellor Today</h2>
                            <p className="text-center text-muted mb-4">Fill the form below to get assigned to a counsellor</p>
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="firstName" className="form-label">First Name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="firstName" placeholder="Lorem" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="surname" className="form-label">Surname <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="surname" placeholder="Ipsum" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="gender" className="form-label">Gender <span className="text-danger">*</span></label>
                                        <select className="form-select" id="gender">
                                            <option>Select your gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="country" className="form-label">Country <span className="text-danger">*</span></label>
                                        <select className="form-select" id="country">
                                            <option>Select your country</option>
                                            <option>Nigeria</option>
                                            <option>USA</option>
                                            <option>UK</option>
                                            <option>Canada</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="phoneNumber" className="form-label">Phone number <span className="text-danger">*</span></label>
                                        <input type="tel" className="form-control" id="phoneNumber" placeholder="0810 000 0000" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="email" className="form-label">E-mail <span className="text-danger">*</span></label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="counsellingArea" className="form-label">Counselling Area <span className="text-danger">*</span></label>
                                        <select className="form-select" id="counsellingArea">
                                            <option>Select an area you want to be counselled on</option>
                                            <option>Mental Health</option>
                                            <option>Career Guidance</option>
                                            <option>Relationship Advice</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="description" className="form-label">Describe how we may help you</label>
                                        <textarea className="form-control" id="description" rows="4"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-success w-100">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Counselling;
