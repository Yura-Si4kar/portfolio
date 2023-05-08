import React, { useEffect } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';
import './DarkModeBtn.css';

export default function DarkModeBtn() {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => currentValue === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark')
        }
    }, [darkMode]);

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            const newColorScheme = e.matches ? 'dark' : 'light';
            setDarkMode(newColorScheme);
        })
    }, [setDarkMode]);

    const btnNormal = 'dark-mode-btn';
    const btnActive = 'dark-mode-btn dark-mode-btn--active';

    return (
        <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
        </button>
    )
}
