import { useState } from "react";

import AddProject from "./components/AddProject.jsx";
import ProjectList from "./components/ProjectList.jsx";

function App() {
  const [projects, setProjects] = useState([]);
  const [isAddPage, setIsAddPage] = useState(false);

  function addProject(title, description, date) {
    setProjects((prevProjects) => {
      return [
        ...prevProjects,
        { title: title, description: description, date: date },
      ];
    });
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
          YOUR PROJECTS
          <button
            className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
            onClick={() => setIsAddPage(true)}
          >
            + Add Project
          </button>
          <ul className="mt-8">
            {projects.map((project) => {
              return (
                <button
                  className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
                  key={project.title}
                >
                  {project.title}
                </button>
              );
            })}
          </ul>
        </aside>
        <div className="mt-24 text-center w-2/3">
          <ProjectList projects={projects} />
          <AddProject addProject={addProject} />
        </div>
      </main>
    </>
  );
}

export default App;
