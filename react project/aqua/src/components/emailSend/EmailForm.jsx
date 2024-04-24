import './emailForm.css';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_lnzcfm5';
    const templateId = 'template_pq1u04f';
    const publicKey = 'IW8FX8bhuKXfIB40T';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Web Wizard',
      message: message,
      rating: rating, // Include the rating in the template params
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
        setRating('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className='emailForm'>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="rating">Rating:</label>
      <select
        id="rating"
        name="rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
      >
        <option value="" disabled>Select a rating</option>
        <option value="5">Отлично</option>
        <option value="4">Хорошо</option>
        <option value="3">Нормально</option>
        <option value="2">Плохо</option>
        <option value="1">Ужасно</option>
      </select>

      <textarea
        cols="30"
        rows="10"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
