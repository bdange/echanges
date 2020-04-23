import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    console.log('Success');
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Connexion</h1>
      <p className='lead'>
        <i className='fas fa-user'></i>Se connecter à mon compte
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Addresse Email'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className='form-group'>
          <input
            type='password'
            name='password'
            value={password}
            placeholder='Mot de passe'
            onChange={(e) => onChange(e)}
          />
        </div>

        <input type='submit' value='Login' className='btn btn-primary' />
        <p className='my-1'>
          Pas encore inscrit ? <Link to='/register'>Inscription</Link>
        </p>
      </form>
    </Fragment>
  );
};

export default Login;
