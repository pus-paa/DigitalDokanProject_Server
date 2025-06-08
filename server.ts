import app from "./src/app";
import { envConfig } from "./src/config/config";



function startServer(){
    const port = envConfig.port || 3003
app.listen(envConfig.port,()=>{
    console.log(`server has started at port[${port}]`)
})
}


startServer()