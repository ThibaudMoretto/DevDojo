import React from 'react'
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react'
import Field from 'src/components/Footer/LoginForm/Field';

import './styles.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  const [open, setOpen] = React.useState(false)

  return (

    <div className="login-form">
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            onClick={() => {
              { handleLogout() };
              setOpen(false);
            }}
          >
            Déconnexion
          </button>
        </div>
      )}
      {!isLogged && (
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button>Espace Admin</Button>}
        >
          <Modal.Header>Se connecter en tant qu'admin</Modal.Header>

          <Modal.Content>

            <form id="login-form" autoComplete="on" className="login-form-element" onSubmit={handleSubmit}>
              <Field
                name="email"
                placeholder="Adresse Email"
                onChange={changeField}
                value={email}
              />
              <Field
                name="password"
                type="password"
                placeholder="Mot de passe"
                onChange={changeField}
                value={password}
              />
            </form>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={() => setOpen(false)}>
              Annuler
            </Button>
            <button
              form="login-form"
              type="submit"
              className="login-form-button"
            >
              Se connecter
            </button>
          </Modal.Actions>
        </Modal>
      )}
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm
