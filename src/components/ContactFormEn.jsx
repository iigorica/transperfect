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
      errors.name = 'This field is required!';
    }
    if (!lastName.trim()) {
        errors.lastName = 'This field is required!';
      }

    // Validacija email-a
    if (!email.trim()) {
      errors.email = 'This field is required!';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'This field is required!';
    }

    // Validacija poruke
    if (!message.trim()) {
      errors.message = 'This field is required!';
    }

    // Postavljanje grešaka validacije
    setErrors(errors);

    // Vraćanje true ako nema grešaka
    return Object.keys(errors).length === 0;
  };

  // Obrada slanja forme
  const handleSubmit = (e) => {
    e.preventDefault();
    
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
      console.log('Form is not valid');
    }
  };
  const closeModal = () => {
    setShowModal(false);
    setSubmittedData(null);
  };

  return (
    <div>
    <form className="contact" onSubmit={handleSubmit} >
          <h1>Contact</h1>
      <div className="form-group">
        
        <input
          type="text"
          placeholder='First Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
          {errors.name && (<p className="error">{errors.name}</p>) } 
           
        
      </div>

      <div className="form-group">
        
        <input
          type="text"
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>

      <div className="form-group">
        
        <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-group">
        
        <textarea
        placeholder='Text'
        rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}
      </div>
      <div className='btn'><button type="submit">Submit</button></div>
      
    </form>
    {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <h3>Your message is sent!</h3>
             
              <br />
              <p>Name: {submittedData.name}</p>
              <p>Last Name: {submittedData.lastName}</p>
              <p>Email: {submittedData.email}</p>
              <p>Message: {submittedData.message}</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
      </div>
  );
}

export default ContactForm;