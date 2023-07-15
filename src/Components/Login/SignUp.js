import { useContext, useRef } from 'react'
import classes from './Login.module.css'
import {Link} from 'react-router-dom'
import AuthContext from '../Context/AuthContext'



const SignUP=()=>{
    const Email=useRef()
    const Password=useRef()
    const ctx2=useContext(AuthContext)


    const SubmitHandler=(e)=>{
        e.preventDefault()
        const email=Email.current.value 
        const password=Password.current.value

        const URL='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAcIxAq5k8QsTC3AMwRmVOzITOv1OaYMtc'

        fetch(URL,{
            method:'POST',
            body:JSON.stringify({
                email : email ,
                password : password ,
                returnSecureToken : true
            }),
            headers :{
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            if (res.ok) {
             return res.json()
            } else {
              return res.json().then((data) => {
                const error = 'Authentication login';
                throw new Error(error);
              });
            }
          })
          .then((data) => {
            console.log(data);
            ctx2.login(data.idToken);
          })
          .catch((error) => {
            alert(error.message);
          });

        Email.current.value=''
        Password.current.value=''
    }

    return(
        <div className={classes.container}>
        <form onSubmit={SubmitHandler} className={classes.form}>
            <h2 className={classes.h2}>Create Account</h2><br/>
            <label htmlFor="Email" className={classes.label}>Email </label>
            <input type="Email" ref={Email} className={classes.input}/>
            <label htmlFor="Password" className={classes.label}>Password</label>
            <input type="Password" ref={Password} className={classes.input}/>
            <div className={classes.btn}>
              <button type="submit" className={classes.button1}>Create Account</button>
            </div>
        </form><hr />
        <button className={classes.btn2}>
            <Link to='/login'>Login With Existing account </Link>
        </button>
       </div>
    )
}

export default SignUP