import React from "react";
import { Element } from "react-scroll";
import Member from "./Member";
import member1 from '../assets/images/team/member-1.jpg'
import member2 from '../assets/images/team/member-2.jpg'
import member3 from '../assets/images/team/member-3.jpg'
import member4 from '../assets/images/team/member-4.jpg'
import member5 from '../assets/images/team/member-5.jpg'
import member6 from '../assets/images/team/member-6.jpg'

const team = [
  {
    "id": "222-eed-ww3",
    "image": member1,
    "name": "john kenny",
    "role": "content writer"
  },

  {
    "id": "1e2-ki8-1qw",
    "image": member2,
    "name": "chole ben",
    "role": "digital marketer"
  },

  {
    "id": "ers-234-9w9",
    "image": member3,
    "name": "chris paul",
    "role": "product designer"
  },

  {
    "id": "df4-lko-09o",
    "image": member4,
    "name": "annie harlow",
    "role": "product manager"
  },

  {
    "id": "jk4-2w3-p0i",
    "image": member5,
    "name": "matt davison",
    "role": "data analyst"
  },

  {
    "id": "fr2-qwe-m2w",
    "image": member6,
    "name": "joy dave",
    "role": "backend developer"
  }
]


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
