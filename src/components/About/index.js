import React from 'react';
import myPicture from '../../assets/myPicture/myPic.jpg';
import "./index.css"

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img src={myPicture} class = "img"></img>
        </div>
        <p>
          Hello!, My name is chanwoo Hwang. I am a Full Stack Web Developer graduated from UCI continue learning program. I enjoy coding, creating fun websites and gaming. I like to play golf.
        </p>
      </div>
    </section>
  );
}

export default About;
