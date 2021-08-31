import React, { useEffect } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import Field from 'src/components/Utils/Field';

import './styles.scss';

const mentorForm = ({
  mentor,
  buttonMessage,
  headerMessage,
  isEdit,

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
        trigger={(
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
        )}
      >
        <Modal.Header>{headerMessage}</Modal.Header>

        <Modal.Content
          scrolling
          size="Fullscreen"
        >
          <Form
            required
            id="mentor-form"
            className="mentor-form-element"
            onSubmit={handleSubmit}
          >

            <Field
              id="form-input-control-name"
              label="Nom"
              placeholder="Nom"
              name="name"
              onChange={changeValue}
              value={name}
              control="input"
              type="text"
              required
              autoComplete="off"
            />

            <Field
              id="form-input-control-description"
              label="Description"
              placeholder="Description"
              name="description"
              onChange={changeValue}
              value={description}
              control="textarea"
              type="text"
              required
              autoComplete="off"
            />

            <Field
              id="form-input-control-image"
              label="URL image de profil"
              placeholder="URL image de profil"
              name="image"
              onChange={changeValue}
              value={image}
              control="input"
              type="url"
              autoComplete="off"
            />

            <Form.Group widths="equal">

              <Field
                id="form-input-control-github"
                label="Github"
                placeholder="Github"
                name="github"
                onChange={changeValue}
                value={github}
                control="input"
                type="url"
                autoComplete="off"
              />

              <Field
                id="form-input-control-linkedin"
                label="Linkedin"
                placeholder="Linkedin"
                name="linkedin"
                onChange={changeValue}
                value={linkedin}
                control="input"
                type="url"
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Field
                id="form-input-control-twtch"
                label="Twitch"
                placeholder="Twitch"
                name="twitch"
                onChange={changeValue}
                value={twitch}
                control="input"
                type="url"
                autoComplete="off"
              />

              <Field
                id="form-input-control-twitter"
                label="Twitter"
                placeholder="Twitter"
                name="twitter"
                onChange={changeValue}
                value={twitter}
                control="input"
                type="url"
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Field
                id="form-input-control-website"
                label="Siteweb personnel"
                placeholder="Site personnel"
                name="website"
                onChange={changeValue}
                value={website}
                control="input"
                type="url"
                autoComplete="off"
              />

              <Field
                id="form-input-control-youtube"
                label="YouTube"
                placeholder="YouTube"
                name="youtube"
                onChange={changeValue}
                value={youtube}
                control="input"
                type="url"
                autoComplete="off"
              />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Annuler
          </Button>
          <Button
            form="mentor-form"
            color="green"
            type="submit"
          >
            Valider
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default mentorForm;
