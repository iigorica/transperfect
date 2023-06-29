import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Stanje za praćenje grešaka validacije
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Funkcija za validaciju forme
  const validateForm = () => {
    const errors = {};

    // Validacija imena
    if (!name.trim()) {
      errors.name = 'Polje Ime je obavezno';
    }
    if (!lastName.trim()) {
        errors.lastName = 'Polje Prezime je obavezno';
      }

    // Validacija email-a
    if (!email.trim()) {
      errors.email = 'Polje Email je obavezno';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Unesite ispravan email';
    }

    // Validacija poruke
    if (!message.trim()) {
      errors.message = 'Polje Poruka je obavezno';
    }

    // Postavljanje grešaka validacije
    setErrors(errors);
    console.log(errors)
    // Vraćanje true ako nema grešaka
    return Object.keys(errors).length === 0;
  };

  // Obrada slanja forme
  const handleSubmit = (e) => {
    e.preventDefault();
    // validateForm();
console.log('klik')
    // Validacija forme pre slanja
    if (validateForm()) {

      setShowModal(true);
      const formData = {
        name,
        lastName, 
        email,
        message,
      };
      setSubmittedData(formData);

    } else {
      console.log('Forma nije validna. Proverite unesene podatke.');
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSubmittedData(null);
  };

  return (
    <div>
    <form className="contact" onSubmit={handleSubmit} >
          <h1>Kontakt</h1>
      <div className="form-group">
        
        <input
          type="text"
          placeholder='Ime'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="form-group">
        
        <input
          type="text"
          placeholder='Prezime'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>

      <div className="form-group">
        <input
        placeholder='Email'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-group">
        <textarea
        placeholder='Tekst'
          value={message}
          rows={10}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}
      </div>

      <div className='btn'><button type="submit">Posalji</button></div>
    </form>
    {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <h3>Uspešno poslato!</h3>
              
              <p>Ime: {submittedData.name}</p>
              <p>Prezime: {submittedData.lastName}</p>
              <p>Email: {submittedData.email}</p>
              <p>Poruka: {submittedData.message}</p>
              <button onClick={closeModal}>Zatvori</button>
            </div>
          </div>
        </div>
      )}
      </div>
  );
}

export default ContactForm;