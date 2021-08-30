import React from 'react';
import Card from 'src/components/Lists/ListMentors/Card';
import MentorForm from 'src/containers/Forms/MentorForm';

import './styles.scss';

const ListMentors = ({ mentors, isLogged }) => (
  <>
    <div className="container--button">
      <div className="buttons">
        {!isLogged && (
          <MentorForm
            buttonMessage="Ajouter un mentor"
            headerMessage="Ajouter un nouveau mentor"
            isEdit={false}
          />
        )}
      </div>
    </div>

    <div className="containers">
      <div className="mentor-title">Nos mentors</div>

      <div className="mentors">
        {mentors.map((mentor) => (
          <Card key={mentor.id} {...mentor} />
        ))}
      </div>
    </div>
  </>
);

export default ListMentors;
