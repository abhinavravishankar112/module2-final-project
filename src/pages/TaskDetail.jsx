import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.json())
      .then((data) => setTask(data));
  }, [id]);

  if (!task) return "Loading...";

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">{task.title}</h1>
      <p>Status: {task.completed ? "Completed" : "Pending"}</p>

      <Link to="/tasks" className="text-blue-500 block mt-4">
        ← Back to Tasks
      </Link>
    </div>
  );
}