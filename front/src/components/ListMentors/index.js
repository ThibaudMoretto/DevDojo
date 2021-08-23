import React from 'react';
import Card from 'src/components/ListMentors/Card';
// import Filter from 'src/components/ListMentors/Filter';
import './styles.scss';

const ListMentors = ({ mentors, isLogged }) => (


  <div className="container">

    <div className="container-button">
      {isLogged && (
        <button class="ui primary button">Ajouter un mentor</button>
      )}
    </div>

    <div>
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
