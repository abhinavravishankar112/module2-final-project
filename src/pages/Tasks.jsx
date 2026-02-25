import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";
import { Link } from "react-router-dom";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading...";

  return (
    <div className="grid gap-4 p-6 md:grid-cols-2">
      {tasks.map((task) => (
        <Link key={task.id} to={`/tasks/${task.id}`}>
          <TaskCard task={task} />
        </Link>
      ))}
    </div>
  );
}