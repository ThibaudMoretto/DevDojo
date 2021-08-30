import React from "react";
import "./styles.scss";
import Loading from "src/components/App/Loading";
import image from "src/assets/images/Card_Img.png";
import { Redirect } from "react-router-dom";
import RessourceForm from "src/containers/Forms/RessourceForm";
import RessourceDelete from "src/containers/RessourceDelete";

function FicheRessource({ ressource, isLogged, loading }) {
  console.log("ressource", ressource);
  if (loading) {
    return <Loading />;
  }
  if (!ressource) {
    return <Redirect to="/ressources" />;
  }

  return (
    <>
      <div className="container--button">
        {!isLogged && (
          <div className="buttons">
            <RessourceForm
              ressource={ressource}
              buttonMessage="Modifier"
              headerMessage="Modifier la ressource"
              isEdit={true}
            />
            <RessourceDelete
              ressource={ressource}
              buttonMessage="Supprimer"
              headerMessage="Supprimer la ressource"
              isEdit={true}
            />
          </div>
        )}
      </div>

      <div className="containers">
        <div className="ressource">
          <img
            src={image}
            alt="l' image de la ressource"
            className="ressource--img"
          />
          <div className="ressource--files">
            <div className="ressource--title">title : {ressource.title}</div>
            <div className="ressource--description">
              description : {ressource.description}
            </div>
            <div className="ressource--techno">
              languages : {ressource.language_id}
            </div>

            {ressource.technologiesRelated.map((technology) => (
              <div className="ressource--techno" key={technology.id}>
                technologies:{technology.name}
              </div>
            ))}

            <div className="font-color">
              <div className="ressource--publication">
                <div className="ressource--publication--author">
                  author : {ressource.author_id}
                </div>
                <div className="ressource--publication--date">
                  publication Date: {ressource.publication_date}
                </div>
              </div>
              <div className="ressource--information">
                <div className="ressource--information--duration">
                  duration : {ressource.duration}
                </div>
                <div className="ressource--information--difficulty">
                  difficulty : {ressource.difficulty_id}
                </div>
              </div>
              <div className="ressource--category">
                type : {ressource.ressource_type_id}
              </div>
            </div>

            <div className="ressource--free">
              free : {String(ressource.is_free)}
            </div>

            <div className="link">link: {ressource.link}</div>
            <div>id : {ressource.id}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FicheRessource;
