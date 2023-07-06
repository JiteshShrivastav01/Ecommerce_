// ContactForm.js
import React, { useState } from 'react';
import classes from './ContactForm.module.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const UserData={name : name , email:email , phoneNumber : phoneNumber}
    const response=fetch('https://movieecommerce-default-rtdb.firebaseio.com/ContactUsUser.json',{
        method:'POST',
        body:JSON.stringify(UserData)
    })
    console.log(response)
    setName('');
    setEmail('');
    setPhoneNumber('');
  };

  return (
    <div className={classes.container}>
    <form onSubmit={handleSubmit}>
      <div className={classes.field}>
        <label htmlFor="name" className={classes.label}>Name:</label>
        <input className={classes.input}
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={classes.field}>
        <label htmlFor="email" className={classes.label}>Email ID:</label>
        <input className={classes.input}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={classes.field}>
        <label htmlFor="phoneNumber" className={classes.lablel}>Phone Number:</label>
        <input className={classes.input}
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <button type="submit" className={classes.button}>Submit</button>
    </form>
    </div>
  );
};

export default ContactForm;
