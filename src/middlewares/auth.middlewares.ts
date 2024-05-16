export async function authMiddleware(req,reply){
  const apiToken = req.headers["token"]

  if(!apiToken){
    reply.status(401).send({
      message: "Token is required",
    })
  }
}