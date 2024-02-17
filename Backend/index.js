// Server-side code
const express = require("express");
const app = express();
const cors = require("cors");
const { todo } = require("./db");
const { createTodo, updateTodo } = require("./types");

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT||3000;

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    return res.status(400).json({ msg: "Invalid input" });
  }

  try {
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });
    res.json({ msg: "Todo created" });
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await todo.find();
    res.json({ todos });
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);

  if (!parsePayload.success) {
    return res.status(400).json({ msg: "Invalid input" });
  }

  const { id } = updatePayload;

  try {
    const updatedTodo = await todo.findByIdAndUpdate(id, { completed: true });
    if (!updatedTodo) {
      return res.status(404).json({ msg: "Todo not found" });
    }
    res.json({ msg: "Todo marked as completed" });
  } catch (error) {
    console.error("Error marking todo as completed:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
});
app.delete("/delete", async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);

  if (!parsePayload.success) {
    return res.status(400).json({ msg: "Invalid input" });
  }

  const { id } = updatePayload;

  try {
    const deletedTodo = await todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    res.json({ msg: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error marking todo as deleted:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
});
app.put("/todo/:id", async (req, res) => {
  const { id } = req.params;
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);

  if (!parsePayload.success) {
    return res.status(400).json({ msg: "Invalid input" });
  }

  try {
    const updatedTodo = await todo.findByIdAndUpdate(id, updatePayload, {
      new: true,
    });

    if (!updatedTodo) {
      return res.status(404).json({ msg: "Todo not found" });
    }

    res.json({ msg: "Todo updated successfully", updatedTodo });
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ msg: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log("Server started on port", port);
});
