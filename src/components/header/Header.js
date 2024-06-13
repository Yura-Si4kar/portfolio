import React from 'react';
import './Header.css';
import my_photo from '../../img/photo_2023-04-14_16-56-36.jpg';

export default function Header() {
  return (
    <header className="header">
      <div className='container'>
        <article className='header__block'>
          <div className='header__block-img'>
            <img src={my_photo} width={500} height={400} alt='my_photo'/>
          </div>
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Yurii</em></strong><br/>
                    a frontend developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a href="../../CV.pdf" className="btn" download="CV.pdf">Download CV</a>
          </div>
        </article>
      </div>
    </header>
  )
}
