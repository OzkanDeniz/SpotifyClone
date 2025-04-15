import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/",(req,res)=>{
    res.send("")
})

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
