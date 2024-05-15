import fastify, { FastifyInstance } from "fastify";

import {userRoutes} from "./routes/user.routes"
import { listRoutes} from "./routes/list.routes"

const app: FastifyInstance = fastify({ logger:true })


app.register(userRoutes,{
  prefix: "/users"
})
app.register(listRoutes,{
  prefix: "/list"
})

app.listen({
  port: 3100,
}, ()=> console.log("Server is running on port 3100🔥"))