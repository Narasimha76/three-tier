// index.js
const tasks = require("./routes/tasks");
const { connection, testConnection } = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();

// Test the MySQL connection
testConnection();

app.use(express.json());
app.use(cors());

app.get('/ok', (req, res) => {
    res.status(200).send('ok');
});

app.use("/api/tasks", tasks);

const port = process.env.PORT || 3500;
app.listen(port, () => console.log(`Listening on port ${port}...`));

