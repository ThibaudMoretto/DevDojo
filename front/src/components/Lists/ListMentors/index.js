import React from 'react';
import PropTypes from 'prop-types';
import Card from 'src/components/Lists/ListMentors/Card';
import MentorForm from 'src/containers/Forms/MentorForm';

import './styles.scss';

const ListMentors = ({ mentors, isLogged }) => (
  <>
    <div className="containers">
      <div className="mentor-title">
        Nos <span className="mentor-title-red">Mentors</span>
        <span className="button-add">
          {isLogged && (
            <MentorForm
              buttonMessage="Ajouter un mentor"
              headerMessage="Ajouter un nouveau mentor"
              isEdit={false}
            />
          )}
        </span>
      </div>

      <div className="mentors">
        {mentors.map((mentor) => (
          <Card key={mentor.id} {...mentor} />
        ))}
      </div>
    </div>
  </>
);

ListMentors.propTypes = {
  mentors: PropTypes.array,
  isLogged: PropTypes.bool.isRequired,
};

ListMentors.defaultProps = {
  mentors: null,
};

export default ListMentors;
