import { useContext, useRef} from "react"
import classes from './Login.module.css'
import {Link} from 'react-router-dom'
import AuthContext from "../Context/AuthContext"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


const Login=()=>{
    const Email=useRef()
    const Password=useRef()
    const ctx2=useContext(AuthContext)
    const history=useHistory()

    const SubmitHandler=(e)=>{
        e.preventDefault()
        const email=Email.current.value 
        const password=Password.current.value

        const URL='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAcIxAq5k8QsTC3AMwRmVOzITOv1OaYMtc'

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
                const error = 'Authentication Error';
                throw new Error(error);
              });
            }
          })
          .then((data) => {
            console.log(data);
            ctx2.login(data.idToken);
            history.push('/store')
          })
          .catch((error) => {
            alert(error.message);
          });
        

        Email.current.value=''
        Password.current.value=''
    }


    return (
       <div className={classes.container}>
        <form onSubmit={SubmitHandler} className={classes.form}>
            <h2 className={classes.h2}>Login</h2><br/>
            <label htmlFor="Email" className={classes.label}>Email </label>
            <input type="Email" ref={Email} className={classes.input}/>
            <label htmlFor="Password" className={classes.label}>Password</label>
            <input type="Password" ref={Password} className={classes.input} minLength='7'/>
            <div className={classes.btn}>
              <button type="submit" className={classes.button}>
                Login
              </button>
            </div>
        </form><hr />
        <button className={classes.btn2}>
            <Link to='/signup'>Create New Account</Link>
        </button>
       </div>
    )
}

export default Login