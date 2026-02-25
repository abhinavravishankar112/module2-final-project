export default function TaskCard({ task }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-semibold">{task.title}</h2>

      <p
        className={`text-sm mt-2 ${
          task.completed ? "text-green-600" : "text-orange-600"
        }`}
      >
        {task.completed ? "Completed" : "Pending"}
      </p>
    </div>
  );
}