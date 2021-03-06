import React, { useState, useReducer, useEffect, useContext } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Login.module.css';
import AuthContext from '../store/auth-context';


const updateEmail = (prevState, actionObject) => {
  if (actionObject.actionType === 'ON_CHANGE') {
    return { value: actionObject.value, isValid: actionObject.value.includes('@') };
  }
  if (actionObject.actionType === 'BLUR_EVENT') {
    return { value: prevState.value, isValid: prevState.value.includes('@') };
  }
  return { value: '', isValid: false };
}

const updatePassword = (prevState, actionObject) => {
  if (actionObject.actionType === 'ON_CHANGE') {
    return { value: actionObject.value, isValid: actionObject.value.trim().length > 6 };
  }
  if (actionObject.actionType === 'BLUR_EVENT') {
    return { value: prevState.value, isValid: prevState.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const authCtx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(updateEmail, { value: '', isValid: null });
  const [passwordState, dispatchPassword] = useReducer(updatePassword, { value: '', isValid: null });

  let { isValid: emailValidity } = emailState;
  let { isValid: passwordValidity } = passwordState;
  // object desturcturing with aliasing....
  useEffect(() => {

    const intervalId = setTimeout(() => {
      console.log("SIDE EFFECT")
      setFormIsValid(emailValidity && passwordValidity);
    }, 500);

    return () => {
      clearTimeout(intervalId);
      console.log("CLEANING....");
    }
  }
    , [emailValidity, passwordValidity]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ actionType: "ON_CHANGE", value: event.target.value });
    // setEnteredEmail(event.target.value);
    // setFormIsValid(
    //   emailState.isValid && passwordState.isValid
    // );
    // console.log(enteredEmail);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ actionType: "ON_CHANGE", value: event.target.value });
    // setEnteredPassword(event.target.value);
    // setFormIsValid(
    //   emailState.isValid && passwordState.isValid
    // );
    // console.log(enteredPassword);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ actionType: 'BLUR_EVENT' });
    // setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ actionType: 'BLUR_EVENT' });
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(emailState, passwordState);
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;