import "./App.css";
import TaskList from "./components/TaskList";

const tasks = [
  {
    id: 1,
    title: "Learn Redux",
    description: "Learn how to use Redux",
    status: "Not-started",
  },
  {
    id: 2,
    title: "Learn React",
    description: "Learn how to use React",
    status: "Not-started",
  },
];

const TASK_STATUSES = ["Not-started", "In-progress", "Done"];

function App() {
  return (
    <div className="tasks">
      <div className="tasks-header">
        <button className="button button-default">+ New task</button>
      </div>
      <div className="task-lists">
        {TASK_STATUSES.map((status) => {
          const statusTasks = tasks.filter((task) => task.status === status);
          return <TaskList key={status} status={status} tasks={statusTasks} />;
        })}
      </div>
    </div>
  );
}

export default App;
