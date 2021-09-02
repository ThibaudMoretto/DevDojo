import React from 'react';
import PropTypes from 'prop-types';
import RecentMentors from 'src/components/Home/RecentMentors';
import RecentRessources from 'src/components/Home/RecentRessources';
import HeroBanner from './HeroBanner';
import './styles.scss';

function Home({ ressources, mentors }) {
  return (
    <div>
      <HeroBanner />
      <RecentRessources ressources={ressources} />
      <RecentMentors mentors={mentors} />
    </div>
  );
}

Home.propTypes = {
  ressources: PropTypes.array,
  mentors: PropTypes.array,
};

Home.defaultProps = {
  ressources: null,
  mentors: null,
};

export default Home;
