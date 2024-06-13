import React from 'react'
import Header from '../components/header/Header'

export default function Home() {
  return (
    <>
        <Header />
      
        <main className="section">
            <div className="container">
                <div className='section__wrapper'>
                      
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">About me</h2>
                            <p>I am interested in working in a company where I can learn, improve my skills and abilities, engage in self-education. In the process of working in the company, I will show purposefulness, creativity and taking quick actions for solutions task. I will be glad if my resume suits you.</p>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <h3 className="title-2">Education</h3>
                        </li>
                        <li>
                            <h4 className="my-education">Hillel IT Scholl</h4>
                        </li>
                        <li>
                            <h5>Front-end Pro</h5>
                            <p className="my-term-of-stady">March 2022 - August 2022 <span className="bracket">|</span>  <a href='https://certificate.ithillel.ua/view/79979096'>Certificate</a>  <span className="bracket">|</span> Ukraine</p>
                        </li>
                        <li>                       
                            <h5>Front-end Basic</h5>
                            <p className="my-term-of-stady">September 2021 - December 2021 <span className="bracket">|</span> <a href='https://certificate.ithillel.ua/view/48849871'>Certificate</a> <span className="bracket">|</span> Ukraine</p>                 
                        </li>  
                        <li>
                            <h4 className="my-education">Vinnytsia Trade and Economic Institute KNTEU</h4>
                        </li>
                        <li>                       
                            <h5>Accounting and Auditing</h5>
                            <p className="my-term-of-stady">September 2008 - February 2014 <span className="bracket">|</span> Specialist <span className="bracket">|</span> Ukraine</p>                 
                        </li>  
                        <li>
                            <h5>Philology and translation</h5>
                            <p className="my-term-of-stady">September 2009 - February 2012 <span className="bracket">|</span> Bachelor <span className="bracket">|</span> Ukraine</p>
                        </li>
                    </ul>
                  
                </div>  

            </div>
        </main>   
    </>
  )
}
