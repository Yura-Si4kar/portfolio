import React from 'react';
import gitHub from '../../img/icons/gitHub.svg';
import linkedIn from '../../img/icons/linkedIn.svg';
import './Footer.css';

export default function Footer() {
  return (
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item">
                      <a href="https://github.com/Yura-Si4kar">
                        <img src={gitHub} alt="Link"/>
                      </a>
                    </li>
                    <li className="social__item">
                      <a href="https://www.linkedin.com/in/yurii-sichkar-512387249/">
                        <img src={linkedIn} alt="Link"/>
                      </a>
                    </li>
                </ul>
                <div className="copyright">
                    <p>© 2023</p>
                </div>
            </div>
        </div>
      </footer> 
  )
}
