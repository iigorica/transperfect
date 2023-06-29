import React from 'react'
import ContactFormSr from './ContactFormSr'


const HomeSr = () => {
  return (
    <div>

    <main>
      <div className="about">
        <h1>O meni</h1>
        <p>
          Ja sam Pantelic Igor,imam 35 godina iz Srbije. Imam zavrsenu srednju
          skolu za instalatera 4 stepen, a pored toga imam zavrsene kurseve za
          masazera-terapeuta i za
          Front End developera.
          Jedno vreme sam bio profesionalni vojnik u elitnoj jedinico vojske Srbije,a pored toga sam se bavio lepljenjem folija i tapeta cime se i dalje bavim.
          Takodje sam bio i u inostranstvu,na Malti gde sam proveo skoro 8 godina zivota.
          Sada trenutno radim u zdravstvenom centru kao vozac sanitetskog vozila.
          U slobodno vreme volim da se bavim sportom i usavrsavam svoje znanje poput dizajna i programiranja.
        </p>
      </div>
      <div className="education">
        <h1>Edukacija</h1>
        <div className="list">
          <h4>Front End developer</h4>
          <ul>
            <li className="list-item">
              Skola za programiranje <strong>'Cubes'</strong>, Beograd / 2021-2022
            </li>
          </ul>
        </div>

        <div className="list">
          <h4>Fizioterapeut-maser</h4>
          <ul>
            <li className="list-item">
              Skola za strucno osposobljavanje <strong>'Djuro Salaj</strong> ',
              Beograd / 2010-2011
            </li>
          </ul>
        </div>

        <div className="list">
          <h4>Instalater</h4>
          <ul>
            <li className="list-item">
              Tehnicka skola <strong>'Mileta Nikolic'</strong> , Arandjelovac /
              2003-2007
            </li>
          </ul>
        </div>
      </div>

      <div className="experience">
        <h1>Poslovno iskustvo</h1>
        <div className="list">
            <h4>Vozac sanitetskog vozila / 2021</h4>
            <ul>
              <li>
                prevoz pacijenata na terapije
              </li>
              <li>
                hitan prevoz povredjenih lica do odredjene ustanove
              </li>
              <li>vodjenje racuna o vozilu i pratecoj opremi</li>
            </ul>
          </div>
        <div className="list">
            <h4>Instalater autografike,folije (15 godina)</h4>
            <ul>
              <li>
                Viking SignWrite
              </li>
              <li>
                menjanje boje na karoseriji automobila
              </li>
              <li>postavljanje folija na stakla</li>
            </ul>
          </div>
          <div className="list">
            <h4>Profesionalni vojnik</h4>
            <ul>
              <li>
                Vojna policija / 2014-2017
              </li>
              <li>
                kontrolisanje i odrzavanje reda i mira
              </li>
              <li>obezbedjivanje i cuvanje javnih licnosti,objekata od znacaja kao i dokumenta i oruzja</li>
            </ul>
          </div>
      </div>
      <div className="skills">
        <h1>Vestine</h1>
        <div className="list">
         <ul>
            <li>Engleski jezik na naprednom nivou</li>
            <li>Poznavanje Microsoft i Office programa</li>
            <li>Posedovanje vozacke dozvole</li>
            <li>Organizovan,odgovoran i profesionalan</li>
            <li>Timski radnik</li>
            <li>Motivisan za usavrsavanje</li>
        </ul>
        </div>
      
      </div>

      {/* <form className="contact" id="contactForm" method="POST">
        <h1>Contact me</h1>
        <div className="form-group">
          <input
            type="text"
            name="name"
            id="first-name"
            value=""
            required
            placeholder="First name"
          />

          <input
            type="text"
            name="name"
            id="last-name"
            value=""
            required
            placeholder="Last name"
          />

          <input
            type="email"
            name="email"
            id="email"
            value=""
            required
            placeholder="Email address"
          />

          <textarea
            name="text"
            id="text-area"
            cols="10"
            rows="3"
            placeholder="Text"
          ></textarea>

          <button>Submit</button>
        </div>
      </form>  */}

      <ContactFormSr />

    </main>
    </div>
  )
}

export default HomeSr