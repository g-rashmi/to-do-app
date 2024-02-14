import React, { useState, useEffect } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const openEditModal = (todo) => {
    setEditingTodo(todo);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      const data = await response.json();
      setTodos(data.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const markAsCompleted = async (id) => {
    try {
      await fetch("http://localhost:3000/completed", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      fetchTodos();
    } catch (error) {
      console.error("Error marking todo as completed:", error);
    }
  };
  const handledelete = async (id) => {
    try {
      await fetch("http://localhost:3000/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      fetchTodos();
    } catch (error) {
      console.error("Error marking todo as DELETED:");
    }
  };

  const editTodo = async (id, newTitle, newDescription, newCompleted) => {
    try {
      await fetch(`http://localhost:3000/todo/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTitle,
          description: newDescription,
          completed: newCompleted,
        }),
      });
      fetchTodos();
    } catch (error) {
      console.error("Error editing todo:", error);
    }
  };
  const container = {
    textAlign: "center",
    fontSize: "2.8rem",
    color:"blue"
  };

  return (
    <div>
      <h1 style={container}>TO-DO-APP</h1>
      <CreateTodo />
      <Todos
        todos={todos}
        markAsCompleted={markAsCompleted}
        editTodo={editTodo}
        handledelete={handledelete}
      />
    </div>
  );
}

export default App;
