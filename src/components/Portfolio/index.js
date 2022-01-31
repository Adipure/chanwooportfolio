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
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com/Adipure/anotherAnimeArchive"
    },
    {
      name: 'led-wall',
      description: 'Node/IoT',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com"
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
