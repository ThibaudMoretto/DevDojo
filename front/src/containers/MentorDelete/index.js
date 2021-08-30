import { connect } from "react-redux";
import MentorDelete from "src/components/Utils/MentorDelete";
import {
  deleteMentor,
  initialValue,
  mentorSuccess,
} from "src/actions/mentors";

const mapStateToProps = (state) => ({
  id: state.mentor.id,
  name: state.mentor.name,
  description: state.mentor.description,
  image: state.mentor.image,
  github: state.mentor.github,
  linkedin: state.mentor.linkedin,
  twitch: state.mentor.twitch,
  twitter: state.mentor.twitter,
  website: state.mentor.website,
  youtube: state.mentor.youtube,
});

const mapDispatchToProps = (dispatch) => ({
  initialValue: (value) => {
    dispatch(initialValue(value));
  },

  resetInitial: () => {
    dispatch(mentorSuccess());
  },

  handleDeleteSubmit: () => {
    console.log("cloukkkkkkk");
    dispatch(deleteMentor());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MentorDelete);