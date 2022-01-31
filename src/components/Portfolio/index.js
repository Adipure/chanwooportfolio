  import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Pair_Up',
      description: 'We have created a tool to make meal planning quick and easy! Simply select which ingredients and get tailor- made recipes and a corresponding YouTube video to show you how to follow along. Better yet, our app will even provide precise nutritional information and recommend the perfect beer pairings of your finished dish!',
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
      name: 'htmlQuiz',
      description: 'Simple Html basic Quiz. Enjoy!',
      link: "https://adipure.github.io/homework004/",
      repo: "https://github.com/Adipure/homework004"
    },
    {
      name: 'weather',
      description: 'Weather Check app that check 5days forecasts!',
      link: "https://adipure.github.io/WeatherHomwork/",
      repo: "https://github.com/Adipure/WeatherHomwork"
    },
    {
      name: 'techBlog',
      description: 'Simple techBlog that you can share thoughts and comments!',
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
