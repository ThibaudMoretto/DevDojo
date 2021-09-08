import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'semantic-ui-react';

import Field from 'src/components/Utils/Field';
import DropdownUnique from 'src/components/Utils/DropdownUnique';
import DropdownMultipleSearch from 'src/components/Utils/DropdownMultipleSearch';

const RessourceForm = ({
  ressource,
  buttonMessage,
  headerMessage,

  title,
  description,
  duration,
  type,
  free,
  difficulty,
  language,
  author,
  link,
  publicationDate,
  image,

  datas,
  mentors,
  isEdit,
  isProposal,

  initialValue,
  resetInitial,
  changeValue,
  handleAddSubmit,
  handleEditSubmit,
  handleProposalSubmit,
}) => {
  useEffect(() => {
    resetInitial();
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleSubmit = () => {
    isEdit ? handleEditSubmit() : handleProposal();
    setOpen(false);
  };

  const handleProposal = () => {
    isProposal ? handleProposalSubmit() : handleAddSubmit();
  };

  const mentorDatas = mentors.map(({ name, id }) => ({
    key: name,
    text: name,
    value: id,
  }));

  const technologiesDatas = isEdit
    ? ressource?.technologiesRelated?.map(({ id }) => id) || ''
    : '';

  return (
    <div className="ressource-form">
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={(
          <Button
            className="button"
            color="facebook"
            onClick={() => {
              if (isEdit) {
                initialValue(ressource);
              }
            }}
          >
            {buttonMessage}
          </Button>
        )}
      >
        <Modal.Header>{headerMessage}</Modal.Header>

        <Modal.Content scrolling size="Fullscreen">
          <Form
            required
            id="ressource-form"
            className="ressource-form-element"
            onSubmit={handleSubmit}
          >
            <Field
              id="form-input-control-title"
              label="Titre"
              placeholder="Titre"
              name="title"
              onChange={changeValue}
              value={title}
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
              id="form-input-control-link"
              label="Lien URL"
              placeholder="Lien externe"
              name="link"
              onChange={changeValue}
              value={link}
              control="input"
              type="url"
              required
              autoComplete="off"
            />

            <DropdownUnique
              id="form-input-control-author"
              label="Auteur"
              placeholder="Auteur"
              name="author"
              onChange={changeValue}
              value={author}
              options={mentorDatas}
              required
              autoComplete="off"
              search
            />

            <Field
              id="form-input-control-image"
              label="URL image de couverture"
              placeholder="URL image de couverture"
              name="image"
              onChange={changeValue}
              value={image}
              control="input"
              type="url"
              autoComplete="off"
            />

            {!isEdit && (
              <DropdownMultipleSearch
                id="form-input-control-technologie"
                label="Technologie(s) en lien (3 max)"
                placeholder="Technologie(s) en lien (3 max)"
                name="technologies"
                onChange={changeValue}
                options={datas.technologies}
              />
            )}

            {isEdit && (
              <DropdownMultipleSearch
                id="form-input-control-technologie"
                label="Technologie(s) en lien (3 max)"
                placeholder="Technologie(s) en lien (3 max)"
                name="technologies"
                onChange={changeValue}
                options={datas.technologies}
                value={technologiesDatas}
              />
            )}

            <Form.Group widths="equal">
              <Field
                id="form-input-control-duration"
                label="Durée estimée de lecture (en min)"
                placeholder="Durée estimée de lecture (en min)"
                name="duration"
                onChange={changeValue}
                value={duration}
                control="input"
                type="number"
                required={false}
              />

              <Field
                id="form-input-control-publicationDate"
                label="Date de publication"
                placeholder="Date de publication"
                name="publicationDate"
                onChange={changeValue}
                value={publicationDate}
                control="input"
                type="month"
              />
            </Form.Group>

            <Form.Group widths="equal">
              <DropdownUnique
                id="form-input-control-types"
                label="Type de contenu"
                placeholder="Type de contenu"
                name="type"
                onChange={changeValue}
                value={type}
                options={datas.types}
                search={false}
              />

              <DropdownUnique
                id="form-input-language"
                label="Language"
                placeholder="Language"
                name="language"
                onChange={changeValue}
                value={language}
                options={datas.languages}
                search={false}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <DropdownUnique
                id="form-input-control-isFree"
                label="Contenu gratuit ?"
                placeholder="Contenu gratuit ?"
                name="free"
                onChange={changeValue}
                value={free}
                options={datas.free}
                search={false}
              />

              <DropdownUnique
                id="form-input-control-difficulté"
                label="Niveau de difficulté"
                placeholder="Niveau de difficulté"
                name="difficulty"
                onChange={changeValue}
                value={difficulty}
                options={datas.levels}
                search={false}
              />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Annuler
          </Button>
          <Button form="ressource-form" color="facebook" type="submit">
            Valider
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default RessourceForm;
