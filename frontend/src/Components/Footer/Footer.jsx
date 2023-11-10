import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file for your styles

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
                <a href="#section1">Section 1</a>
              <a href="#section2">Section 2</a>
              <a href="#section3">Section 3</a>
              <a href="#section4">Section 4</a>
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
              <h3>Copyright &copy; {new Date().getFullYear()} All rights reserved | Design and developed by{' '}
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
