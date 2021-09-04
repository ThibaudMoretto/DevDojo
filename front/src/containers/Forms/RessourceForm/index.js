import { connect } from 'react-redux';
import RessourceForm from 'src/components/Utils/RessourceForm';
import {
  addRessource,
  editRessource,
  changeValue,
  ressourceSuccess,
  initialValue,
} from 'src/actions/ressources';

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
  // technologies: state.ressource.technologies,
  language: state.ressource.language,
  free: state.ressource.free,
  description: state.ressource.description,
  image: state.ressource.image,
});

const mapDispatchToProps = (dispatch) => ({
  initialValue: (value) => {
    dispatch(initialValue(value));
  },

  changeValue: (value, key) => {
    dispatch(changeValue(value, key));
  },

  resetInitial: () => {
    dispatch(ressourceSuccess());
  },

  handleAddSubmit: () => {
    dispatch(addRessource());
  },

  handleEditSubmit: () => {
    dispatch(editRessource());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RessourceForm);
