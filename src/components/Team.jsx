import React from "react";
import { Element } from "react-scroll";
import team from "../teamMembers.json";
import Member from "./Member";

const Team = ({ name }) => {
  return (
    <Element name={name} className="mrt">
      <div className="container">
        <h2 className="section-heading">Our Professional Team</h2>
        <p className="section-sub-heading">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur,
          eveniet?
        </p>

        <div className="team-members">
          {team.map(member => ( 
            <Member key={member.id} className="member" member={member} />
            ))}
        </div>

      </div>
    </Element>
  );
};

export default Team;
