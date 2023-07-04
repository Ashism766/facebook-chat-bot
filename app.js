import {config} from  "dotenv";
config();
import express  from "express";
import cors from "cors";
import logger from "./app/utils/logger.js";
import DemoRouter from "./app/api/Demo/routes.js";
import WebhookRouter from "./app/api/bot/routes.js";

// Making the logger object global so we don't have to import it everytime 
global.logger = logger;



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());



app.get("/", (req, res)=>{res.send({"It's working": "yes"});});


app.use(DemoRouter);
app.use(WebhookRouter);





const port = process.env.PORT || 3000;
app.listen(port, () => {
console.log(`Server started on port ${port}`);
logger.info(`Server started on port ${port}..............................................................`);
});