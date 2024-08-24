import React from 'react';
import './counselling.css';
import './pageTitle.css';

function Counselling({ page = "Counselling" }) {
    return (
        <>

            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>{page}</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/">
                                    <i className="bi bi-headset"></i>
                                </a>
                            </li>
                            <li className="breadcrumb-item active">{page}</li>
                        </ol>
                    </nav>
                </div>
                <section className="container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="card shadow p-4">
                                <h2 className="card-title text-center mb-4">Get in Touch With a Counsellor Today</h2>
                                <p className="text-center text-muted mb-4">Fill the form below to get assigned to a counsellor</p>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="firstName" className="form-label">First Name <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control custom-input-height" id="firstName" placeholder="Lorem" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="surname" className="form-label">Surname <span className="text-danger">*</span></label>
                                            <input type="text" className="form-control custom-input-height" id="surname" placeholder="Ipsum" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="gender" className="form-label">Gender <span className="text-danger">*</span></label>
                                            <select className="form-select custom-input-height" id="gender">
                                                <option>Select your gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="country" className="form-label">Country <span className="text-danger">*</span></label>
                                            <select className="form-select custom-input-height" id="country">
                                                <option>Select your country</option>
                                                <option>Afghanistan</option>
                                                <option>Belgium</option>
                                                <option>Columbia</option>
                                                <option>Egypt</option>
                                                <option>Nigeria</option>
                                                <option>South Africa</option>
                                                <option>Ukraine</option>
                                                <option>Zambia</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="phoneNumber" className="form-label">Phone number <span className="text-danger">*</span></label>
                                            <input type="tel" className="form-control custom-input-height" id="phoneNumber" placeholder="0810 000 0000" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="email" className="form-label">E-mail <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control custom-input-height" id="email" placeholder="Enter your email" />
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="counsellingArea" className="form-label">Counselling Area <span className="text-danger">*</span></label>
                                            <select className="form-select custom-input-height" id="counsellingArea">
                                                <option>Select an area you want to be counselled on</option>
                                                <option>Holy living</option>
                                                <option>Relationship</option>
                                                <option>Marriage</option>
                                                <option>Depression</option>
                                                <option>Prayer Life</option>
                                                <option>Evangelism</option>
                                                <option>Others</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="description" className="form-label">Describe how we may help you</label>
                                            <textarea className="form-control custom-input-height" id="description" rows="4"></textarea>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-3">
                                            <button type="submit" className="btn btn-success w-100" style={{ height: '60px' }}>Submit</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Counselling;
