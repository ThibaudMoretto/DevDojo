import React from "react";
import "./styles.scss";
import Card from "src/components/Lists/ListMentors/Card";
import { Button } from "semantic-ui-react";

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
          <Button className="latestMentor-btnContainer-btn">
            {" "}
            Afficher nos derniers mentors{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RecentMentors;

{
  /* <div className="latestMentor-list-card">
            <div className="latestMentor-list-card-imgContainer">
              <img src={imgMentor} alt="Mentor" />
            </div>
            <div className="latestMentor-list-card-content">
              <h3 className="latestMentor-list-card-content-title">HILGEUGEU</h3>
              <p className="latestMentor-list-card-content-role">Spécialiste Javascript</p>
            </div>
          </div>

          <div className="latestMentor-list-card">
            <div className="latestMentor-list-card-imgContainer">
              <img src={imgMentor2} alt="Mentor" />
            </div>
            <div className="latestMentor-list-card-content">
              <h3 className="latestMentor-list-card-content-title">FROTMAN</h3>
              <p className="latestMentor-list-card-content-role">Spécialiste Froti Frota</p>
            </div>
          </div>

          <div className="latestMentor-list-card">
            <div className="latestMentor-list-card-imgContainer">
              <img src={imgMentor3} alt="Mentor" />
            </div>
            <div className="latestMentor-list-card-content">
              <h3 className="latestMentor-list-card-content-title">DOROTHEE</h3>
              <p className="latestMentor-list-card-content-role">Spécialiste Jacky Show</p>
            </div>
          </div>

        </div>

        <div className="latestMentor-btnContainer">
          {/* <button className="latestMentor-btnContainer-btn">Tous nos mentors</button> */
}
