import React from 'react';
import Card from 'src/components/ListMentors/Card';
// import Filter from 'src/components/ListMentors/Filter';
import './styles.scss';

const ListMentors = ({ mentors }) => (
  <div className="mentorsPage">
    {mentors.map((mentor) => (
      <Card
        key={mentor.id}
        {...mentor}
      />
    ))}
  </div>
);

export default ListMentors;
