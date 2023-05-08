import React from 'react'

export default function Contacts() {
  return (
    <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Vinnitsa, Ukraine</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / Viber</h2>
                        <p><a href="tel:+380971297960">+38 (097) 129-79-60</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:webdev@protonmail.com">si4kar2017@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
  )
}
