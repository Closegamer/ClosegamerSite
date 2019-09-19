import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';
import { MDBCard, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdbreact';
import { TextField, PassField } from '../../fields';
import '../../App.css';

const RecoveryFinalForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <Field
        name='password'
        component={PassField}
        label='Введите пароль'
        group
        type='password'
      />
      <Field
        name='password2'
        component={PassField}
        label='Повторите пароль'
        group
        type='password'
      />
      <MDBBtn color='unique' type='submit'>
        Отправить
      </MDBBtn>
    </form>
  );
};

// RecoveryFinalForm.propTypes = {
//   classes: PropTypes.objectOf(PropTypes.any).isRequired
// };

// RecoveryFinalForm.defaultProps = {
//   classes: {}
// };

const validate = values => {
  const errors = {};

  if (values && !values.password) {
    errors.password = 'Введите пароль';
  }

  if (
    values.password &&
    values.password2 &&
    values.password !== values.password2
  ) {
    errors.password2 = 'Пароли не совпадают';
  }

  return errors;
};

export default reduxForm({
  form: 'recoveryFinal',
  validate,
  destroyOnUnmount: false
})(RecoveryFinalForm);
