import "./App.css";
import TasksPage from "./components/TaskPage";

const mockTasks = [
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

function App() {
  return (
    <div className="App">
      <TasksPage tasks={mockTasks} />
    </div>
  );
}

export default App;
