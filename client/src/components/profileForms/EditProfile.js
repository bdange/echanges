import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    introduction: '',
    langues: '',
    lieu: '',
  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      introduction:
        loading || !profile.introduction ? '' : profile.introduction,
      langues: loading || !profile.langues ? '' : profile.langues,
      lieu: loading || !profile.lieu ? '' : profile.lieu,
    });
  }, [loading]);

  const { introduction, langues, lieu } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Créez votre profil</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Indiquez vos informations
      </p>
      <small>* = Champs à remplir obligatoirement</small>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <textarea
            type='text'
            placeholder='* Introduction'
            name='introduction'
            value={introduction}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Ajoutez une petite introduction de vous meme
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='* Langues'
            name='langues'
            value={langues}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Utilisez des virgules pour séparer les langues que vous parlez (ex:
            Anglais, Allemand, Espagnol)
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='* Lieu'
            name='lieu'
            value={lieu}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>Indiquez votre ville et pays</small>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/home'>
          Retour
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
