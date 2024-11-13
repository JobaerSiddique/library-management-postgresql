import { Server } from 'http';
import app from './app'
import config from './config';



async function main() {
    const server: Server = app.listen(config.PORT, () => {
        console.log("Sever is running on port ", config.PORT);
    });

    const exitHandler = () => {
        if (server) {
            server.close(() => {
                console.info("Server closed!")
            })
        }
        process.exit(1);
    };
    process.on('uncaughtException', (error) => {
        console.log(error);
        exitHandler();
    });

    process.on('unhandledRejection', (error) => {
        console.log(error);
        exitHandler();
    })
   
};
export default app;
main();