import mongoose from "mongoose";
import Item from "../models/item.model";
import { Request, Response } from "express";
import ERRORS from "../core/constants/errors";

const createItem = (request: Request, response: Response) => {
  const item = new Item({
    _id: new mongoose.Types.ObjectId(),
    title: request.body.title,
    price: request.body.price,
  });

  return item
    .save()
    .then((newItem) => {
      return response.status(201).json({
        status: "success",
        message: "Successfully create new item",
        Course: newItem,
      });
    })
    .catch((error) => {
      response.status(ERRORS.unexpected.code).json({
        status: "error",
        message: ERRORS.unexpected.msg,
        error: error.message,
      });
    });
};

export { createItem };
