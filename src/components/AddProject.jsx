import { useRef } from "react";

export default function AddProject({ projects, addProject }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function clearForm() {
    document.getElementById("form").reset();
  }

  return (
    <>
      <menu className="flex items-center justify-end gap-4 my-4">
        <button
          className="text-stone-800 hover:text-stone-950"
          onClick={clearForm}
        >
          Cancel
        </button>
        <button
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={() => {
            addProject(
              title.current.value,
              description.current.value,
              date.current.value
            );
            clearForm();
          }}
        >
          Save
        </button>
      </menu>
      <form id="form" className="mt-4 text-left">
        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            title
          </label>
          <input
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            type="text"
            ref={title}
          />
        </p>
        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            description
          </label>
          <input
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            type="textarea"
            ref={description}
          />
        </p>
        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            due date
          </label>
          <input
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            type="date"
            ref={date}
          />
        </p>
      </form>
    </>
  );
}
