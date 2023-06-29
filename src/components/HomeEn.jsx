import React from 'react'
import ContactFormEn from './ContactFormEn'

const HomeEn = () => {
  return (
    <div>
      <main>
      <div className="about">
        <h1>About</h1>
        <p>
        I am Pantelic Igor, I am 35 years old from Serbia. I have completed secondary school for installer 4 degree, and in addition to that
         I have completed courses for massage therapist and Front End developer. I was a professional soldier in an elite unit of the Serbian army for some time,
          and besides that I have been doing  foils and wallpapers, which I still do. I have also lived abroad, in Malta
          where I spent nearly 8 years of my life. Currently, I work at a healthcare center as an ambulance driver.
           In my free time, I enjoy in sports and improving my knowledge in  design and programming.
        </p>
      </div>
      <div className="education">
        <h1>Education</h1>
        <div className="list">
          <h4>Front End developer</h4>
          <ul>
            <li className="list-item">
              Programing school <strong>'Cubes'</strong>, Belgrade / 2021-2022
            </li>
          </ul>
        </div>

        <div className="list">
          <h4>Physioterapist-masseur</h4>
          <ul>
            <li className="list-item">
              School for Professional Education <strong>'Djuro Salaj</strong> ',
              Belgrade / 2010-2011
            </li>
          </ul>
        </div>

        <div className="list">
          <h4>Installer</h4>
          <ul>
            <li className="list-item">
              Secondary Technical School <strong>'Mileta Nikolic'</strong> , Arandjelovac /
              2003-2007
            </li>
          </ul>
        </div>
      </div>

      <div className="experience">
        <h1>Working experience</h1>
        <div className="list">
            <h4>Ambulance driver / 2021</h4>
            <ul>
              <li>
                transport patients
              </li>
              <li>
                emergency transport ill and injured patients to hospital
              </li>
              <li>working and collaboration with paramedic and emergency services team </li>
            </ul>
          </div>
        <div className="list">
            <h4>Skilled installer (15 years)</h4>
            <ul>
              <li>
                Viking SignWrite
              </li>
              <li>
                color change on vehicle
              </li>
              <li>installing foil on windows</li>
            </ul>
          </div>
          <div className="list">
            <h4>Professional soldier</h4>
            <ul>
              <li>
                Military pollice / 2014-2017
              </li>
              <li>
                control and upkeep of military order and discipline
              </li>
              <li>secured the most important military facilities, certen persons, documents and wepons</li>
            </ul>
          </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div className="list">
         <ul>
            <li>Englis language- intermediate level</li>
            <li>Knowledge of most Microsoft Office programs</li>
            <li>Driving licence</li>
            <li>Organized,reliable and professional</li>
            <li>Team worker</li>
            <li>Motivated</li>
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

      <ContactFormEn />

    </main>
    </div>
  )
}

export default HomeEn