import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = (
  {
    //   profile: {
    //     introduction,
    //     langues,
    //     lieu,
    //     user: { name, avatar },
    //   },
  }
) => {
  return (
    <p>Profil</p>
    // <div class='profile-top bg-primary p-2'>
    //   <img class='round-img my-1' src={avatar} alt='Gravatar Image' />

    //   <h1 class='large'>{name}</h1>
    //   <p>{introduction}</p>
    //   <p>{lieu && <span>{lieu}</span>}</p>
    //   <div class='skills'>
    //     {langues.map((langue, index) => (
    //       <div key={index} className='p-1'>
    //         <i className='fas fa-check'></i> {langue}
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

ProfileTop.propTypes = { profile: PropTypes.object.isRequired };

export default ProfileTop;
