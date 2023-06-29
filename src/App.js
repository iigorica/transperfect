// import './App.css';
import HomeEn from './components/HomeEn';
import HomeSr from './components/HomeSr';
import React, { useState } from 'react';
import './style.scss';

function App() {

  const [language, setLanguage] = useState(1);

  const changeLanguage = () => {
    if (language === 0) {
      setLanguage(1);
    } else {
      setLanguage(0);
    }
  };

  return (
    <div className="App">
        <header className="header">
      <div>
        <h4>PI</h4>
        <h3>Pantelic Igor</h3>
      </div>
      <i className="fa-solid fa-people-group" onClick={changeLanguage}></i>
    </header>
      {language === 0 ? <HomeEn /> : <HomeSr />}

    </div>
  );
}

export default App;
