import { useState, useRef } from "react";

import AddProject from "./components/AddProject.jsx";
import Project from "./components/Project.jsx";

function App() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isAddPage, setIsAddPage] = useState(false);

  const dialog = useRef();

  let id = 0;

  function addProject(title, description, date) {
    id += 1;
    setProjects((prevProjects) => {
      return [
        ...prevProjects,
        {
          id: id,
          title: title,
          description: description,
          date: date,
          tasks: tasks,
        },
      ];
    });
  }

  function addTask(projectId, content) {
    setProjects((prevProjects) =>
      prevProjects.map((project) => {
        if (project.id === projectId) {
          const taskId = project.tasks.length;

          return {
            ...project,
            tasks: [...project.tasks, { id: taskId, content: content }],
          };
        }
        return project;
      })
    );
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
                <Project key={project.id} project={project} addTask={addTask} />
              );
            })}
          </ul>
        </aside>
        <div className="mt-24 text-center w-2/3">
          <AddProject addProject={addProject} addTask={addTask} />
        </div>
      </main>
    </>
  );
}

export default App;
