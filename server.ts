import app from "./src/app";
import { envconfig } from "./src/config/config";



function startServer(){
    const port = envconfig.port || 4000
app.listen(envconfig.port,()=>{
    console.log(`server has started at port[${port}]`)
})
}


startServer()