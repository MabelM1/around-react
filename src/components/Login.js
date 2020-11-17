import React from "react";
import {
 
  Link,
  useHistory

} from 'react-router-dom';

import { auth } from "../utils/auth";

function Login({onLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let history = useHistory();
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e ) => {
    e.preventDefault()
    console.log('username',email)
    console.log('password',password)

    if (!email || !password) {
      return;
    }

    auth.signin(email, password)
    .then((res) => {
      console.log('res',res)
      if(res){
        // this.setState({
        //   message: ''
        // }, () => {
        //   this.props.history.push('/signin');
        // })
        console.log(res)
        console.log('success')
        onLogin()
        history.push('/');
      } else {

        // this.setState({
        //   message: 'Something went wrong!'
        // })
        console.log('something went wrong')
      }
     
    });

  }

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h2 className="login__title">Log In</h2>
        <input
          className="login__input"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />   
        <input
          className="login__input"
          type="password"
          name="password"
          placeholder="Password"
           value={password  }
           onChange={handlePasswordChange}
          required
        />
        <button type="submit" className="login__button">Log In</button>
       <p className="login__message">Not a member yet?
        <Link to="/signup" className="login__link"> Sign up here!</Link>
      </p>
      </form>
    </div>   
  );
}

export default Login;