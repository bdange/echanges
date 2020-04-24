import React from 'react';
import { Link } from 'react-router-dom';

const HomeActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn'>
        <i className='fas fa-user-circle text-primary'></i> Editer Profil
      </Link>
    </div>
  );
};

export default HomeActions;
