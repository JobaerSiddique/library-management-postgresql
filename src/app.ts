import express from "express"
import router from "./app/routes"
import globalErrorHandler from "./app/middleware/globalHandlerError"
import notFound from "./app/middleware/notFound"
const app = express()


app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hurry Library server is running')
})

app.use('/api',router)


app.use(globalErrorHandler)
app.use(notFound)
export default app;
