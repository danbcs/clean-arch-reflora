import express from 'express';

import itemController from "./controllers/itemController.js";

const router = express.Router();

router.get("/items", itemController.listAllItems);
router.get("/items/:id", itemController.getItemById);
router.post("/items", itemController.createItem);
router.put("/items/:id", itemController.updateItem);
router.delete("/items/:id", itemController.deleteItem);

export default router;
