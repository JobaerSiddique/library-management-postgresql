import express from "express";
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalHandlerError";
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hurry Library server is running');
});
app.use('/api', router);
app.use(globalErrorHandler);
export default app;
