export const Todos = ({ todos, markAsCompleted, editTodo, handledelete }) => {
  const todoStyle = {
    backgroundColor: "lightblue",
    padding: "0 10px",
    alignItems: "center",
    margin: "30px auto",
    borderRadius: "5px",
    paddingBottom: "10px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",

    width: "69vw",
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
    margin: "14px",
  };
  const neww = {
    backgroundColor: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s ease",
    margin: "14px",
  };
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div key={todo.id} style={todoStyle}>
            <div>
              <h1 style={titlee}>{todo.title}</h1>
              <h2 style={descriptionn}>{todo.description}</h2>
            </div>{" "}
            <div>
              <button
                style={{
                  ...neww,
                  backgroundColor: todo.completed ? "blue" : "white",
                }}
                onClick={() => markAsCompleted(todo._id)}
              >
                {todo.completed ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
                  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
                </svg>
                )}
              </button>

              <button
                style={buttonstyle}
                onClick={() => handledelete(todo._id)}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
