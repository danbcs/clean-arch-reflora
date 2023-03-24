import ItemRepository from "../../domain/itemRepository.js";

class ItemService {
    constructor() {
      this.itemRepository = new ItemRepository("db");
    }
  
    async createItem(itemData) {
      const newItem = await this.itemRepository.createItem(itemData);
      return newItem;
    }
  
    async getItem(itemId) {
      const item = await this.itemRepository.getItem(itemId);
      return item;
    }
  
    async updateItem(itemId, itemData) {
      const updatedItem = await this.itemRepository.updateItem(itemId, itemData);
      return updatedItem;
    }
  
    async deleteItem(itemId) {
      await this.itemRepository.deleteItem(itemId);
    }
  
    async getItems() {
      const items = await this.itemRepository.getItems();
      return items;
    }
  }
  
  export default ItemService;