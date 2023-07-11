// ContactForm.js
import React, { useState } from 'react';
import classes from './ContactForm.module.css'
import {Prompt} from 'react-router-dom'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid,setIsValid]=useState(false)
  const [formFocused,setFormFocused]=useState(false)
  
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
    const response=fetch('https://ecommerce2-6ebd1-default-rtdb.firebaseio.com/ContactUsUser.json',{
        method:'POST',
        body:JSON.stringify(UserData)
    })
    console.log(response)
    setName('');
    setEmail('');
    setPhoneNumber('');
    setIsValid(false)
  };
  const FocusedOn=()=>{setFormFocused(true)}
  const FocusedOff=()=>{setFormFocused(false)}

  return (
    <div className={classes.container}>
    <Prompt when={formFocused} message={(location)=>'Are your sure want to leave this page'}/>
    <form onSubmit={handleSubmit} onFocus={FocusedOn}>
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
       <button onClick={FocusedOff} type="submit" disabled={!isValid} className={classes.button}>Submit</button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm
