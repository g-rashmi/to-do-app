export const Todos = ({ todos, markAsCompleted, editTodo, handledelete }) => {
  const todoStyle = {
    backgroundColor: "lightblue",
    padding: "0 10px",
    margin: "10px",
    borderRadius: "5px",
    paddingBottom: "10px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  };

  const titlee = {
    color: "black",
    fontSize: "1.7rem",
    margin: "5px",
    paddingTop: "10px",
  };

  const descriptionn = {
    margin: "5px",
    fontSize: "1.2rem",
    color: "blue",
  };

  const buttonstyle = {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease",
    margin: "10px",
  };

  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo.id} style={todoStyle}>
            <h1 style={titlee}>{todo.title}</h1>
            <h2 style={descriptionn}>{todo.description}</h2>
            <button
              style={buttonstyle}
              onClick={() => markAsCompleted(todo._id)}
            >
              {todo.completed ? "Completed" : "Mark as Complete"}
            </button>

            <button style={buttonstyle} onClick={() => handledelete(todo._id)}>
              {" "}
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
