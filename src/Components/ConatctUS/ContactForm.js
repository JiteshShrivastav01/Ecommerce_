// ContactForm.js
import React, { useState } from 'react';
import classes from './ContactForm.module.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid,setIsValid]=useState(false)
  
  const NameHandler=(e)=>{
    setName(e.target.value)
    if(e.target.value.trim().length>0 && email.includes('@') && phoneNumber.trim().length>7){
      setIsValid(true)
    }
    else{
      setIsValid(false)
    }
  }

  const EmailHandler=(e)=>{
    setEmail(e.target.value)
    if(name.trim().length>0 && e.target.value.includes('@') && phoneNumber.trim().length>7){
      setIsValid(true)
    }
    else{
      setIsValid(false)
    }
  }

  const phoneNumberHandler=(e)=>{
    e.preventDefault()
    setPhoneNumber(e.target.value)
    if(name.trim().length>0 && email.includes('@') && e.target.value.trim().length>7){
      setIsValid(true)
    }
    else{
      setIsValid(false)
    }
  }

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
    setIsValid(false)
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
          onChange={NameHandler}
        />
      </div>
      <div className={classes.field}>
        <label htmlFor="email" className={classes.label}>Email ID:</label>
        <input className={classes.input}
          type="email"
          id="email"
          value={email}
          onChange={EmailHandler}
        />
      </div>
      <div className={classes.field}>
        <label htmlFor="phoneNumber" className={classes.lablel}>Phone Number:</label>
        <input className={classes.input}
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={phoneNumberHandler}
        />
      </div>
      <div className={classes.btn}>
       <button type="submit" disabled={!isValid} className={classes.button}>Submit</button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm
