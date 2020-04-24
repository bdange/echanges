import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    introduction,
    langues,
    lieu,
  },
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>{introduction}</p>
        <p className='my-1'>{lieu}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          Voir profil
        </Link>
      </div>
      <ul>
        {langues.slice(0, 4).map((langue, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check'></i> {langue}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
