  import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Pair_Up',
      description: 'We have created a app to make meal planning quick and easy!',
      link: "https://me0wmerz.github.io/pairUp",
      repo: "https://github.com/me0wmerz/pairUp"
    },
    {
      name: '4AnimeArchive',
      description: 'A website that allow you to search for your favorite animes and add them to your profile as you watch them.',
      link: "https://anotheranimearchive.herokuapp.com/",
      repo: "https://github.com/Adipure/anotherAnimeArchive"
    },
    {
      name: 'console.log',
      description: 'Created a forum app where users can share thoughts, questions and answers about specific coding issues.',
      link: "https://consolelog-proj3.herokuapp.com/",
      repo: "https://github.com/Adipure/console.log"
    },
    // {
    //   name: 'weather',
    //   description: 'Weather Check app that check 5days forecasts!',
    //   link: "https://adipure.github.io/WeatherHomwork/",
    //   repo: "https://github.com/Adipure/WeatherHomwork"
    // },
    {
      name: 'techBlog',
      description: 'Simple Blog that coders can share questions and comments!',
      link: "https://trythisplease.herokuapp.com/login.html",
      repo: "https://github.com/Adipure/technoBlog"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
