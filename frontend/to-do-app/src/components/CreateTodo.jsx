import { useState } from "react";
const box = {
  textAlign: "center",
};

export const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json", // Corrected header name
      },
    })
      .then(async function (res) {
        if (res.ok) {
          const json = await res.json();
          alert("Todo added");
        } else {
          throw new Error("Failed to add todo");
        }
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
        alert("Failed to add todo");
      });
  };

  return (
    <div style={box}>
      <input
        id="title"
        style={{
          padding: 10,
          margin: 10,
          width: 310,
        }}
        type="text"
        placeholder="Title"
        value={title} // Added value attribute to input field
        onChange={(e) => setTitle(e.target.value)} // Simplified onChange handler
      />{" "}
      <br />
      <input
        id="description"
        style={{
          padding: 10,
          margin: 10,
          width: 310,
        }}
        type="text"
        placeholder="Description"
        value={description} // Added value attribute to input field
        onChange={(e) => setDescription(e.target.value)} // Simplified onChange handler
      />{" "}
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
          color: "white",
          backgroundColor: "BLUE",
          border: "none",
        }}
        onClick={handleAddTodo} // Call handleAddTodo function
      >
        Add a Todo
      </button>
    </div>
  );
};
