import React from 'react';
import Pdf from '../../assets/myResume/myResume.pdf';



function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        <a href={Pdf} target="_blank">See my Resume</a>
        </p>
        <h3>Skills</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
