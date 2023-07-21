import express from "express";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import cors from "cors";
import colors from "colors";

import postRoutes from "./routes/postsRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.listen(PORT, () => console.log(`server is running on ${PORT}`.yellow) );
connectDB();


// mongoose.set("useFindAndModify", false);
