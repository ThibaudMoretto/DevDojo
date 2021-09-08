import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';

const RessourceDelete = ({
  ressource,
  buttonMessage,
  headerMessage,

  initialValue,
  resetInitial,
  handleDeleteSubmit,
}) => {
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    resetInitial();
  }, []);

  const submitDelete = () => {
    handleDeleteSubmit();
    setOpen(false);
    // setTimeout(function () { window.location.reload() }, 2000);
  };
  return (
    <div className="ressource-form">
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={(
          <Button
            className="button"
            color="google plus"
            onClick={() => {
              initialValue(ressource);
            }}
          >
            {buttonMessage}
          </Button>
        )}
      >
        <Modal.Header>{headerMessage}</Modal.Header>

        <Modal.Content>
          <div>Voulez vraiment supprimer définitivement cette ressource?</div>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Annuler
          </Button>
          <Button
            color="red"
            type="submit"
            className="ressource-form-button ui blue button"
            onClick={() => submitDelete()}
          >
            Supprimer
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

RessourceDelete.propTypes = {
  ressource: PropTypes.object.isRequired,
  buttonMessage: PropTypes.string.isRequired,
  headerMessage: PropTypes.string.isRequired,

  initialValue: PropTypes.func.isRequired,
  resetInitial: PropTypes.func.isRequired,
  handleDeleteSubmit: PropTypes.func.isRequired,
};

export default RessourceDelete;
