import React from 'react';
import './resources.css';
import './pageTitle.css';
import profileImg from '../images/resources.png';
import similarBookImg from '../images/resources.png'; // Use appropriate path for similar book images
import userProfile from '../images/user.jpg'; // Example user profile image

function Resources({ page = "Resources" }) {
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>{page}</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">
                                <i className="bi bi-file-earmark-text"></i>
                            </a>
                        </li>
                        <li className="breadcrumb-item active">{page}</li>
                    </ol>
                </nav>
            </div>
            <section className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-lg-4 d-flex flex-column align-items-start">
                        <img src={profileImg} alt="Book Cover" className="book-cover mb-3" style={{ marginLeft: '15px' }} />
                        <ul className="book-details mb-3" style={{ marginLeft: '15px' }}>
                            <li><strong>Published:</strong> 2004</li>
                            <li><strong>Pages:</strong> 150</li>
                            <li><strong>Language:</strong> English</li>
                            <li><strong>ISBN:</strong> 0123456789</li>
                            <li><strong>Downloads:</strong> 200</li>
                        </ul>
                        <button className="btn btn-success download-btn" style={{ marginLeft: '15px' }}>
                            Download <i className="bi bi-download"></i>
                        </button>
                    </div>

                    <div className="col-lg-8">
                        <h1 className="book-title">Motivational Interviewing: Helping People Change</h1>
                        <p className="book-authors">by William R. Miller and Stephen Rollnick</p>
                        <div className="book-rating">
                            <span className="stars">★★★★★</span> <span className="rating-score">4.7 (50 Reviews)</span>
                        </div>
                        <div className="book-tags">
                            <span className="badge bg-secondary">Motivation</span>
                            <span className="badge bg-secondary">Inspiration</span>
                            <span className="badge bg-secondary">Changing</span>
                        </div>
                        <h2 className="about-title">About Book</h2>
                        <p className="book-description">
                            Lorem ipsum dolor sit amet consectetur. Quam ullamcorper feugiat cras amet viverra. Dignissim habitasse ante mi sed. Sollicitudin dignissim dui est viverra pharetra. Nec interdum eu tellus quis facilisis erat libero condimentum pellentesque.
                        </p>
                        <p className="book-description">
                            Sit ut placerat quam proin. Nisl nam risus euismod vulputate massa. Lectus mi nunc elit sed cras etiam elit. Sodales netus non aenean netus mauris. Ut dui varius fringilla risus sagittis purus. Faucibus ac nisi at vitae.
                        </p>
                    </div>
                </div>

                <hr className="my-5" />

                <div className="review-section">
                    <h2>Drop a review for "Motivational Interviewing: Helping People Change"</h2>
                    <form className="review-form">
                        <div className="mb-3">
                            <label htmlFor="rating" className="form-label">Your Rating <span className="text-danger">*</span></label>
                            <div id="rating" className="stars-input">
                                ★★★★★
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="review" className="form-label">Write a review <span className="text-danger">*</span></label>
                            <textarea id="review" className="form-control" rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>

                    <hr className="my-5" />

                    <div className="rating-summary">
                        <div className="rating-score-summary">
                            <h1 className="average-rating">4.7</h1>
                            <div className="rating-stars">★★★★★</div>
                            <p>(50 Reviews)</p>
                        </div>
                        <div className="rating-breakdown">
                            <div className="rating-row">
                                <span>5 stars</span>
                                <div className="rating-bar">
                                    <div className="rating-bar-fill" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div className="rating-row">
                                <span>4 stars</span>
                                <div className="rating-bar">
                                    <div className="rating-bar-fill" style={{ width: '10%' }}></div>
                                </div>
                            </div>
                            <div className="rating-row">
                                <span>3 stars</span>
                                <div className="rating-bar">
                                    <div className="rating-bar-fill" style={{ width: '15%' }}></div>
                                </div>
                            </div>
                            <div className="rating-row">
                                <span>2 stars</span>
                                <div className="rating-bar">
                                    <div className="rating-bar-fill" style={{ width: '0%' }}></div>
                                </div>
                            </div>
                            <div className="rating-row">
                                <span>1 star</span>
                                <div className="rating-bar">
                                    <div className="rating-bar-fill" style={{ width: '0%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="my-5" />
                </div>

                <div className="user-reviews">
                    <div className="review-card">
                        <div className="user-profile">
                            <img src={userProfile} alt="Arlene McCoy" />
                            <div className="user-info">
                                <strong>Arlene McCoy</strong>
                                <div className="user-rating">★★★★★</div>
                            </div>
                        </div>
                        <p className="user-review-text">
                            Lorem ipsum dolor sit amet consectetur. Lacus viverra scelerisque mauris sit neque ante. Lectus id lacus varius turpis augue laoreet. 
                        </p>
                    </div>

                    <div className="review-card">
                        <div className="user-profile">
                            <img src={userProfile} alt="Marvin McKinney" />
                            <div className="user-info">
                                <strong>Marvin McKinney</strong>
                                <div className="user-rating">★★★★☆</div>
                            </div>
                        </div>
                        <p className="user-review-text">
                            Lorem ipsum dolor sit amet consectetur. Lacus viverra scelerisque mauris sit neque ante. Lectus id lacus varius turpis augue laoreet. 
                        </p>
                    </div>

                    <div className="review-card">
                        <div className="user-profile">
                            <img src={userProfile} alt="Courtney Henry" />
                            <div className="user-info">
                                <strong>Courtney Henry</strong>
                                <div className="user-rating">★★★★☆</div>
                            </div>
                        </div>
                        <p className="user-review-text">
                            Lorem ipsum dolor sit amet consectetur. Lacus viverra scelerisque mauris sit neque ante. Lectus id lacus varius turpis augue laoreet. 
                        </p>
                    </div>
                </div>

                <div className="pagination">
                    <button className="page-btn prev">❮</button>
                    <button className="page-btn next">❯</button>
                </div>

                <hr className="my-5" />

                <div className="similar-books">
                    <h2 className="similar-books-title">Similar Books</h2>
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <img src={similarBookImg} alt="Similar Book 1" className="similar-book-cover" />
                            <p className="similar-book-title">Living a Purpose Driven Life</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={similarBookImg} alt="Similar Book 2" className="similar-book-cover" />
                            <p className="similar-book-title">Living a Purpose Driven Life</p>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={similarBookImg} alt="Similar Book 3" className="similar-book-cover" />
                            <p className="similar-book-title">Living a Purpose Driven Life</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Resources;
