import React from 'react';
import Card from 'src/components/Lists/ListMentors/Card';
import MentorForm from 'src/containers/Forms/MentorForm';

import './styles.scss';

const ListMentors = ({ mentors, isLogged }) => (
  <>
    <div className="containers">
      <div className="mentor-title">Nos <span className="mentor-title-red">mentors</span>
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

export default ListMentors;
