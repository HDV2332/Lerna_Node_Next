import { Router, Request, Response } from "express";
import { createItem } from "../controllers/item.controller";
import ERRORS from "../core/constants/errors";

const AppRouter: Router = Router();

AppRouter.use((req, res, next) => {
  if (["POST", "PUT", "PATCH"].indexOf(req.method) !== -1 && !req.is("json")) {
    return res
      .status(ERRORS.content_not_json.code)
      .send(ERRORS.content_not_json.msg);
  }
  return next();
});

// Item module
AppRouter.post("/courses", createItem);

module.exports = AppRouter;
