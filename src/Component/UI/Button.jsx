import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Button.module.css'
const Button = () => {

  return (
    <div className={classes["btn"]}>
      <button>
        <Link to={'/login'}>Sign in</Link>
      </button>
      <button>
        <Link to={'/register'}>Register</Link> 
      </button>
    </div>
  );
}

export default Button