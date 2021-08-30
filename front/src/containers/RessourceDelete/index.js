import { connect } from "react-redux";
import RessourceDelete from "src/components/Utils/RessourceDelete";
import {
  deleteRessource,
  initialValue,
  ressourceSuccess,
} from "src/actions/ressources";

const mapStateToProps = (state) => ({
  datas: state.datas.datas,
  mentors: state.mentors.list,
  title: state.ressource.title,
  difficulty: state.ressource.difficulty,
  duration: state.ressource.duration,
  type: state.ressource.type,
  author: state.ressource.author,
  link: state.ressource.link,
  publicationDate: state.ressource.publicationDate,
  // categories: state.ressource.categories,
  technologies: state.ressource.technologies,
  language: state.ressource.language,
  free: state.ressource.free,
  description: state.ressource.description,
});

const mapDispatchToProps = (dispatch) => ({
  initialValue: (value) => {
    dispatch(initialValue(value));
  },

  resetInitial: () => {
    dispatch(ressourceSuccess());
  },

  handleDeleteSubmit: () => {
    console.log("clickkckcckcck");
    dispatch(deleteRessource());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RessourceDelete);
