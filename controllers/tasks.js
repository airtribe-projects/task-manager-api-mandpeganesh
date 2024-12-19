
const tasks = [
    {
      "id": 1,
      "title": "Set up environment",
      "description": "Install Node.js, npm, and git",
      "completed": true
    },
    {
      "id": 2,
      "title": "Create a new project",
      "description": "Create a new project using the Express application generator",
      "completed": true
    },
    {
      "id": 3,
      "title": "Install nodemon",
      "description": "Install nodemon as a development dependency",
      "completed": true
    },
    {
      "id": 4,
      "title": "Install Express",
      "description": "Install Express",
      "completed": false
    },
    {
      "id": 5,
      "title": "Install Mongoose",
      "description": "Install Mongoose",
      "completed": false
    },
    {
      "id": 6,
      "title": "Install Morgan",
      "description": "Install Morgan",
      "completed": false
    },
    {
      "id": 7,
      "title": "Install body-parser",
      "description": "Install body-parser",
      "completed": false
    },
    {
      "id": 8,
      "title": "Install cors",
      "description": "Install cors",
      "completed": false
    },
    {
      "id": 9,
      "title": "Install passport",
      "description": "Install passport",
      "completed": false
    },
    {
      "id": 10,
      "title": "Install passport-local",
      "description": "Install passport-local",
      "completed": false
    },
    {
      "id": 11,
      "title": "Install passport-local-mongoose",
      "description": "Install passport-local-mongoose",
      "completed": false
    },
    {
      "id": 12,
      "title": "Install express-session",
      "description": "Install express-session",
      "completed": false
    },
    {
      "id": 13,
      "title": "Install connect-mongo",
      "description": "Install connect-mongo",
      "completed": false
    },
    {
      "id": 14,
      "title": "Install dotenv",
      "description": "Install dotenv",
      "completed": false
    },
    {
      "id": 15,
      "title": "Install jsonwebtoken",
      "description": "Install jsonwebtoken",
      "completed": false
    }
  ];


// get all tasks
const get_all_tasks = (req, res) => {
    res.status(200).send(tasks);
};

// get a task by id
const get_task = (req, res) => {
    const id = parseInt(req.params.id);
    if (!tasks[id-1]) {
        return res.status(404).send({message: "The task with given id was not found."});
    }
    res.status(200).send(tasks[id-1]);
};

// creating a task
const create_task = (req,res) => {
    const task = req.body;
    console.log({ task });
    task.id = tasks.length + 1;
    tasks.push(task);
    res.status(201).send({task});
};

// updating task
const update_task = (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === id);
    const task = req.body;
    
    if (taskIndex === -1) {
        return res.status(404).send({message: "The task with given id was not found."});
    }
    const updatedTask = {
        ...tasks[taskIndex], 
        ...task
    };
    tasks[taskIndex] = updatedTask;
    res.status(200).send(tasks)
};


// delete task
const delete_task = (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
        return res.status(404).send({ message: "The task with given id was not found." });
    }
    tasks.splice(taskIndex, 1);
    res.status(200).send({ message: `Task with id ${id} has been deleted successfully.` });
};


module.exports = { get_all_tasks, get_task, create_task, update_task, delete_task };