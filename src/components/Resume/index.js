import React from 'react';
import myResume from '../myResume/myResume.pdf';

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
         <myResume/>
        </p>
        <h3>Skills</h3>
        <h3>Front-end</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end </h3>
        <ul className="skills">
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
