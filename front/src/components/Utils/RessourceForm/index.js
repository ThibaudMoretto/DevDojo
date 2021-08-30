import React, { useEffect } from "react";
import { Button, Modal } from "semantic-ui-react";
import Field from "src/components/Utils/Field";

import DropdownUnique from "src/components/Utils/DropdownUnique";
import DropdownUniqueSearch from "src/components/Utils/DropdownSearch";
import DropdownMultipleSearch from "src/components/Utils/DropdownMultipleSearch";

import "./styles.scss";

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
  technologies,

  datas,
  mentors,
  isEdit,

  initialValue,
  resetInitial,
  changeValue,
  handleAddSubmit,
  handleEditSubmit,
}) => {
  useEffect(() => {
    resetInitial();
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleSubmit = () => {
    // event.preventDefault();
    isEdit ? handleEditSubmit() : handleAddSubmit();
    setOpen(false);
  };

  const mentorDatas = mentors.map(({ name, id }) => ({
    key: name,
    text: name,
    value: id,
  }));

  const technologiesDatas = isEdit
    ? ressource?.technologiesRelated?.map(({ id }) => id) || ""
    : "";

  return (
    <div className="ressource-form">
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
                  initialValue(ressource);
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
            id="ressource-form"
            className="ressource-form-element"
            onSubmit={handleSubmit}
          >
            <div className="container-field">
              <Field
                placeholder="Titre"
                name="title"
                onChange={changeValue}
                value={title}
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
                placeholder="Lien externe"
                name="link"
                onChange={changeValue}
                value={link}
                type="text"
              />

              <Field
                placeholder="Durée"
                name="duration"
                onChange={changeValue}
                value={duration}
                type="number"
              />

              <Field
                placeholder="Date de publication"
                name="publicationDate"
                onChange={changeValue}
                value={publicationDate}
                type="month"
              />
            </div>

            <div className="container-dropdown">
              <DropdownUnique
                placeholder="Difficulté"
                name="difficulty"
                onChange={changeValue}
                value={difficulty}
                options={datas.levels}
              />

              <DropdownUniqueSearch
                placeholder="Auteur"
                name="author"
                onChange={changeValue}
                value={author}
                options={mentorDatas}
              />

              <DropdownUnique
                placeholder="Type"
                name="type"
                onChange={changeValue}
                value={type}
                options={datas.types}
              />

              <DropdownUnique
                placeholder="Language"
                name="languages"
                onChange={changeValue}
                value={language}
                options={datas.languages}
              />

              <DropdownUnique
                placeholder="Gratuit"
                name="free"
                onChange={changeValue}
                value={free}
                options={datas.free}
              />
            </div>

            <div className="container-dropdownMultiple">
              {!isEdit && (
                <DropdownMultipleSearch
                  placeholder="Technologies"
                  name="technologies"
                  onChange={changeValue}
                  options={datas.technologies}
                />
              )}

              {isEdit && (
                <DropdownMultipleSearch
                  placeholder="Technologies"
                  name="technologies"
                  onChange={changeValue}
                  value={technologiesDatas}
                  options={datas.technologies}
                />
              )}
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

export default RessourceForm;

{
  /* <button
    form="ressource-form"
    type="submit"
    className="ressource-form-button ui blue button"
    >
  Valider
</button> */
}
