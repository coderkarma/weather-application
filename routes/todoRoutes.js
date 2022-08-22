const router = require("express").Router();

let todos = [];

router.get("/todos", (req, res) => {
    if (todos.length === 0) {
        return res.send({ msg: "There is no todos", data: todos });
    }
    res.json({ data: todos });
});

router.get("/todos/one", (req, res) => {
    // Todos - check all edge cases for all routes.

    // what happens if no id was sent
    const id = parseInt(req.query.id);
    if (isNaN(id)) {
        return res.send({ msg: "Id hasn't been defined" });
    }
    console.log("here is an id", id);
    res.json({ data: todos[id] });
});

router.post("/todos/add", (req, res) => {
    let text = req.body.text;
    todos.push({ completed: false, text: text });
    res.json({ msg: "success" });
});

router.put("/todos/updateText", (req, res) => {
    let id = parseInt(req.body.id);
    todos[id].text = req.body.text;
    res.json({ msg: "success" });
});

router.put("/todos/toggleComplete", (req, res) => {
    let todoId = parseInt(req.body.id);
    todos[todoId].completed = !todos[todoId].completed;
    res.json({ msg: "success" });
});

router.delete("/todos/:id", (req, res) => {
    let todoId = todos[req.params.id];
    // check to if the element is undefined
    if (todoId === undefined) {
        return res.json({ msg: "Item doesn't exist" });
    }
    // Convert string to number and delete the element with specific index.
    const id = parseInt(req.params.id);
    todos.splice(id, 1);

    res.json({ msg: "Success", data: todos });
});

module.exports = router;
