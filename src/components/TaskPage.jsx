import React from "react";
import TaskList from "./TaskList";

const TASK_STATUSES = ["Not-started", "In-progress", "Done"];

const TasksPage = ({ tasks }) => {
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
};

export default TasksPage;
