import React, { useEffect } from 'react';
import { Button, Modal } from 'semantic-ui-react';

import './styles.scss';

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
        trigger={
          <Button
            className="button"
            color="red"
            onClick={() => {
              initialValue(mentor);
            }}
          >
            {buttonMessage}
          </Button>
        }
      >
        <Modal.Header>{headerMessage}</Modal.Header>

        <Modal.Content>
          <div>Voulez vraiment supprimer définitivement ce mentor?</div>
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

export default MentorDelete;
