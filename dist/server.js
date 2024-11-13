var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import app from './app';
import config from './config';
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = app.listen(config.PORT, () => {
            console.log("Sever is running on port ", config.PORT);
        });
        const exitHandler = () => {
            if (server) {
                server.close(() => {
                    console.info("Server closed!");
                });
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
        });
    });
}
;
export default app;
main();
