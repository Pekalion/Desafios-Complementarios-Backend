import { Router } from "express";
import { usersRouter } from "./users.router.js";
import { metodosPersonalizados } from "../../middlewares/metodosPersonalizados.js";
import { sessionsRouter } from "./sessions.router.js";

export const apiRouter = Router()

apiRouter.use(metodosPersonalizados)

apiRouter.use('/users', usersRouter)
apiRouter.use('/sessions', sessionsRouter)