import { FormEvent } from 'react';
import classes from './Auth.module.css';
import { useAppDispatch } from '../app/hooks';
import { login } from '../app/auth/auth-slice';

const Auth = () => {

  const dispatch = useAppDispatch();

  const hendleLogin = (e: FormEvent) => {
    e.preventDefault();
    dispatch(login());
  };
  
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={hendleLogin}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
