import express from "express";
const app = express();

app.use(cors({ Credentials: true, origin: "http://localhost:5173" }));

app.listen(5000, () => {
    console.log("Server started on port 5000...");
});