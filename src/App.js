import React from "react";

import { useState } from "react";

import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from "./components/ProjectCard";
import FilterPill from "./components/FilterPill";
import './App.css';

function App() {
  document.title = "Riyadh Rahman";

  const [filters, setFilters] = useState([]);

  const selectFilter = (filter) => {
    const idx = filters.findIndex((x) => x === filter)

    if (idx === -1) {
      filters.splice(idx, 1);
      setFilters(filters);
    }
  };

  const languages = ["Go", "Python", "Javascript", "TypeScript", "Java", "Kotlin", "Rust"];
  const technologies = ["Android", "SQL", "NoSQL", "Git", "React", "Svelte", "PyTorch"];

  const projects = [
    {
      "name": "Supercell",
      "description": "dasdadad",
      "link": "",
      "technologies": ["Go"]
    }
  ];

  return (
    <div className="App">
      <Header />
      <main className="container">
        <h2>Languages</h2>
        <ul className="filters">
          {languages.map((language, i) => (
            <li key={i}><FilterPill filter={language} selectFilter={selectFilter} /></li>
          ))}
        </ul>

        <h2>Technologies</h2>
        <ul className="filters">
          {technologies.map((technology, i) => (
            <li key={i}><FilterPill filter={technology} selectFilter={selectFilter} /></li>
          ))}
        </ul>

        {/* <ul>
          {projects.map((project, i) => (
            <li key={i}>
              <ProjectCard 
                name={project.name} 
                description={project.description} 
                link={project.link} 
                technologies={project.technologies}
              />
            </li>
          ))}
        </ul> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
