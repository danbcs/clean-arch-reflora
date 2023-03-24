import ItemService from "../../application/services/itemService.js";

class ItemController {
  constructor() {
    this.itemService = new ItemService();
  }
  async listAllItems(req, res) {
    try {
      const items = await itemService.listItems();
      return res.status(200).json(items);
    } catch (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // outras funções de controlador para as demais rotas...

  async getItemById(req, res) {
    try {
      const { id } = req.params;
      const item = await itemService.getItemById(id);
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json({ message: "Item not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async createItem(req, res) {
    const { nome, descricao, preco } = req.body;
    try {
      const item = await ItemService.createItem(nome, descricao, preco);
      return res.status(201).json(item);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async updateItem(req, res) {
    const { id } = req.params;
    const { nome, descricao, preco } = req.body;
    try {
      const item = await ItemService.updateItem(id, nome, descricao, preco);
      if (item) {
        return res.status(200).json(item);
      }
      return res.status(404).json({ message: "Item não encontrado" });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async deleteItem(req, res) {
    const { id } = req.params;
    try {
      const result = await ItemService.deleteItem(id);
      if (result) {
        return res.status(204).send();
      }
      return res.status(404).json({ message: "Item não encontrado" });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

export default new ItemController();
