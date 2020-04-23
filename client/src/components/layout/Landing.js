import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Echanges</h1>
          <p className='lead'>
            Echangez avec les autres pour apprendre une langue étrangère
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              S'enregister
            </Link>
            <Link to='/login' className='btn btn'>
              Connexion
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
