import { useRef } from "react";

import ProjectModal from "../components/ProjectModal.jsx";

export default function Project({ project, addTask }) {
  const modalRef = useRef();
  return (
    <>
      <button
        className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
        onClick={() => modalRef.current.open()}
      >
        {project.title}
      </button>
      <ProjectModal ref={modalRef} project={project} addTask={addTask} />
    </>
  );
}
