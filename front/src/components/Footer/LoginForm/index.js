import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Form } from 'semantic-ui-react';
import Field from 'src/components/Utils/Field';

import './styles.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  const resetToken = () => {
    localStorage.setItem('token', '');
  };

  const [open, setOpen] = React.useState(false);

  return (
    <div className="login-form">
      {isLogged && (
        <div className="login-form-logged">
          <Button
            // type="button"
            className="facebook"
            onClick={() => {
              {
                handleLogout();
              }
              resetToken();
              setOpen(false);
            }}
          >
            Déconnexion
          </Button>
        </div>
      )}
      {!isLogged && (
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<Button className="facebook">Espace admin</Button>}
        >
          <Modal.Header>Se connecter en tant qu'admin</Modal.Header>

          <Modal.Content>
            <Form
              id="login-form"
              autoComplete="on"
              className="login-form-element"
              onSubmit={handleSubmit}
            >
              <Field
                id="form-input-control-email"
                label="Email"
                placeholder="Email"
                name="email"
                onChange={changeField}
                value={email}
                control="input"
                type="email"
                required
                autoComplete="on"
              />
              <Field
                id="form-input-control-password"
                label="Mot de passe"
                placeholder="Mot de passe"
                name="password"
                onChange={changeField}
                value={password}
                control="input"
                type="password"
                autoComplete="on"
                required
              />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={() => setOpen(false)}>
              Annuler
            </Button>
            <Button color="facebook" form="login-form" type="submit">
              Se connecter
            </Button>
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
  // loggedMessage: PropTypes.string,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  isLogged: false,
  // loggedMessage: 'Connecté',
};

export default LoginForm;
