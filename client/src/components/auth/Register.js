import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
//import axios from 'axios';

const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Mots de passes ne correspondent pas', 'danger');
    } else {
      console.log('Success');
      // NON REDUX VERSION.
      // const newUser = {
      //   name,
      //   email,
      //   password,
      // };
      // try {
      //   const config = {
      //     haders: {
      //       'Content-Type': 'application/json',
      //     },
      //   };
      //   //const body = JSON.stringify(newUser);  -- No longer needed with new axios version.
      //   const res = await axios.post('/api/users', newUser, config);
      //   console.log(res.data);
      // } catch (err) {
      //   console.error(err.response.data);
      // }
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>S'enregistrer</h1>
      <p className='lead'>
        <i className='fas fa-user'></i>Créez votre compte
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Nom'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>

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

        <div className='form-group'>
          <input
            type='password'
            name='password2'
            value={password2}
            placeholder='Confirmez votre mot de passe'
            onChange={(e) => onChange(e)}
          />
        </div>

        <input type='submit' value='Confirmer' className='btn btn-primary' />
        <p className='my-1'>
          Déjà inscrit ? <Link to='/login'>Connexion</Link>
        </p>
      </form>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Register);
