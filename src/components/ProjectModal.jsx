import { useState, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({ ref, project, addTask }) {
  const dialog = useRef();
  const [content, setContent] = useState("");

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  function handleAddTask() {
    // if (!content.trim()) return;
    addTask(project.id, content);
    // console.log(content);
    setContent("");
  }

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      <h2 className="text-xl font-bold text-stone-700 my-4">{project.title}</h2>
      <p className="text-stone-600 mb-4">{project.date}</p>
      <p className="text-stone-600 mb-4">{project.description}</p>
      <hr />
      <h2 className="text-xl font-bold text-stone-700 my-4">Tasks</h2>
      <div className="flex items-center gap-4"></div>
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={content ?? ""}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleAddTask}
      >
        Add Task
      </button>
      <ul>
        {project.tasks.map((task) => {
          return <li key={task.id}>{task.content}</li>;
        })}
      </ul>
    </dialog>,
    document.getElementById("modal-root")
  );
}
