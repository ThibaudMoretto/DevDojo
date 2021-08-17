import React from 'react';
import RecentMentors from './RecentMentors';
import RecentRessources from './RecentRessources';
import HeroBanner from './HeroBanner';
import './styles.scss';

function Home() {
  return (
    <div>
      <HeroBanner />
      <RecentMentors />
      <RecentRessources />
    </div>
  )
}

export default Home;

