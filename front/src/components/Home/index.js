import React from "react";
import RecentMentors from "src/components/Home/RecentMentors";
import RecentRessources from "src/components/Home/RecentRessources";
import HeroBanner from "./HeroBanner";
import "./styles.scss";

function Home({ ressources, mentors }) {
  return (
    <div>
      <HeroBanner />
      <RecentRessources ressources={ressources} />
      <RecentMentors mentors={mentors} />
    </div>
  );
}

export default Home;
