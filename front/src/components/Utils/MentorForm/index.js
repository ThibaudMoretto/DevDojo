import React, { useEffect } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import Field from 'src/components/Utils/Field';

import './styles.scss';

const mentorForm = ({
  mentor,
  buttonMessage,
  headerMessage,
  isEdit,

  id,
  name,
  description,
  image,
  github,
  linkedin,
  twitch,
  twitter,
  website,
  youtube,

  initialValue,
  resetInitial,
  changeValue,
  handleAddSubmit,
  handleEditSubmit,
}) => {
  console.log('fiche mentor:', mentor);

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    resetInitial();
  }, []);

  const handleSubmit = () => {
    // event.preventDefault();
    isEdit ? handleEditSubmit() : handleAddSubmit();
    setOpen(false);
  };

  return (
    <div className="mentor-form">
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button
            className="button"
            color="green"
            onClick={() => {
              {
                if (isEdit) {
                  initialValue(mentor);
                }
              }
            }}
          >
            {buttonMessage}
          </Button>
        }
      >
        <Modal.Header>{headerMessage}</Modal.Header>

        <Modal.Content>
          <form
            id="mentor-form"
            className="mentor-form-element"
            onSubmit={handleSubmit}
          >
            <div className="container-infos">
              <Field
                placeholder="Name"
                name="name"
                onChange={changeValue}
                value={name}
                type="text"
              />

              <Field
                placeholder="Description"
                name="description"
                onChange={changeValue}
                value={description}
                type="text"
              />

              <Field
                placeholder="Image de profil"
                name="image"
                onChange={changeValue}
                value={image}
                type="text"
              />
            </div>

            <div className="container-socials">
              <Field
                placeholder="Github"
                name="github"
                onChange={changeValue}
                value={github}
                type="text"
              />

              <Field
                placeholder="Linkedin"
                name="linkedin"
                onChange={changeValue}
                value={linkedin}
                type="text"
              />

              <Field
                placeholder="Twitch"
                name="twitch"
                onChange={changeValue}
                value={twitch}
                type="twitch"
              />

              <Field
                placeholder="Twitter"
                name="twitter"
                onChange={changeValue}
                value={twitter}
                type="text"
              />

              <Field
                placeholder="Site personnel"
                name="website"
                onChange={changeValue}
                value={website}
                type="text"
              />

              <Field
                placeholder="Youtube"
                name="youtube"
                onChange={changeValue}
                value={youtube}
                type="text"
              />
            </div>
          </form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Annuler
          </Button>
          <Button
            color="green"
            type="submit"
            className="ressource-form-button ui blue button"
            onClick={() => handleSubmit()}
          >
            Valider les modifications
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default mentorForm;
