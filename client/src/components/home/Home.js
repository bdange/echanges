import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomeActions from './HomeActions';
import { getCurrentProfile } from '../../actions/profile';

const Home = ({ getCurrentProfile, auth: { user }, profile: { profile } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    <Fragment>
      <h1 className='large text-primary'>Home</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Bienvenue {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <HomeActions />
        </Fragment>
      ) : (
        <Fragment>
          <p>
            Vous n'avez pas encore un profil, veuillez ajouter vos informations.
          </p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Créer mon profil
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Home.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Home);
