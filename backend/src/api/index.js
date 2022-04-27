import { Router } from "express"

export default () => {
  const router = Router()

  router.get("/store/hello", (req, res) => {
    res.json({
      message: "Welcome to My Store!"
    })
  })

  return router
}