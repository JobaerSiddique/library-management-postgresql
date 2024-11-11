import app from "./app"
import config from "./config"

const main = ()=>{
    try {
        app.listen(config.PORT, () => {
            console.log(`libaery server started  on port ${config.PORT}`)
          })
    } catch (error) {
        console.log(error);
    }
}

main()