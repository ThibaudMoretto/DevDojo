import React from 'react';
import Card from 'src/components/ListMentors/Card';
// import Filter from 'src/components/ListMentors/Filter';
import './styles.scss';

const ListMentors = ({ mentors, isLogged }) => (


  <div className="containers">

    <div className="mentor-title">Nos mentors</div>

    <div className="buttons">
      {isLogged && (
        <button className="ui primary button">Ajouter un mentor</button>
      )}
    </div>

    <div className="mentors">
      {mentors.map((mentor) => (
        <Card
          key={mentor.id}
          {...mentor}
        />
      ))}
    </div>

  </div>
);

export default ListMentors;
