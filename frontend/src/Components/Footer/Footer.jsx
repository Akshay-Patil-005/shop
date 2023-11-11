import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file for your styles
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    
    <footer className="footer text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <br />
            <h1 className="footer-heading">पशुखाद्य</h1>
            <br />
            <p className="menu">
              
              <h4>
              <Link to='./Dhanya'>धान्य</Link>
              <Link to='/Khat'>सेंद्रिय खते</Link>
              <Link to='/'>खाद्य </Link>
              <Link to='/Cart'>खरेदी केंद्र </Link>
              </h4>
            </p>
            <ul className="ftco-footer-social p-0">
              {/* Add your social media icons here */}
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <p className="copyright">
              <h4>Copyright &copy; {new Date().getFullYear()} All rights reserved | Design and developed by{' '}</h4><br />
              <h3>
              <a href="#" target="_blank">Akshay Patil</a>
              </h3>
              <br />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
