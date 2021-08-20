import React from 'react';
import RecentMentors from './RecentMentors';
import RecentRessources from './RecentRessources';
import HeroBanner from './HeroBanner';
import './styles.scss';

function Home() {
  return (
    <div>
      <HeroBanner />
      <RecentRessources />
      <RecentMentors />
    </div>
  )
}

export default Home;

