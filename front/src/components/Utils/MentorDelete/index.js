import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';

const MentorDelete = ({
  handleDeleteSubmit,
  mentor,
  buttonMessage,
  headerMessage,
  initialValue,
  resetInitial,
}) => {
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    resetInitial();
  }, []);

  const submitDeleteMentor = () => {
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
              initialValue(mentor);
            }}
          >
            {buttonMessage}
          </Button>
        )}
      >
        <Modal.Header>{headerMessage}</Modal.Header>

        <Modal.Content>
          <div>Voulez vraiment supprimer définitivement ce mentor ainsi que ses
            ressources associées?
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Annuler
          </Button>
          <Button
            color="red"
            type="submit"
            className="ressource-form-button ui blue button"
            onClick={() => submitDeleteMentor()}
          >
            Supprimer
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

MentorDelete.propTypes = {
  handleDeleteSubmit: PropTypes.func.isRequired,
  mentor: PropTypes.object.isRequired,
  buttonMessage: PropTypes.string.isRequired,
  headerMessage: PropTypes.string.isRequired,
  initialValue: PropTypes.func.isRequired,
  resetInitial: PropTypes.func.isRequired,
};

export default MentorDelete;
