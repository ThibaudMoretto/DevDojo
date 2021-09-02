import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Card from 'src/components/Lists/ListMentors/Card';
import { Button } from 'semantic-ui-react';

function RecentMentors({ mentors }) {
  return (
    <div className="latestMentor">
      <div className="latestMentor-container">
        <h2 className="latestMentor-title">
          Nos derniers <span className="latestMentor-span">Mentors</span>
        </h2>
        <div className="latestMentor-list">
          {mentors.map((mentor) => (
            <Card key={mentor.id} {...mentor} />
          ))}
        </div>
        <div className="latestMentor-btnContainer">
          <Button color="red" className="latestMentor-btnContainer-btn">
            {' '}
            Afficher nos derniers mentors{' '}
          </Button>
        </div>
      </div>
    </div>
  );
}

RecentMentors.propTypes = {
  mentors: PropTypes.array,
};

RecentMentors.defaultProps = {
  mentors: null,
};

export default RecentMentors;
