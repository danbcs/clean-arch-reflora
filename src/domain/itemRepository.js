import Item from '../presentation/models/item.js';
import pool from "../../config/database.js";

class ItemRepository {
  async createItem(item) {
    const result = await pool.query('INSERT INTO items(name, description, price) VALUES($1, $2, $3) RETURNING id', [item.name, item.description, item.price]);
    item.id = result.rows[0].id;
    return item;
  }

  async findItemById(id) {
    const result = await pool.query('SELECT * FROM items WHERE id = $1', [id]);
    if (result.rowCount === 0) {
      return null;
    }
    const row = result.rows[0];
    const item = new Item(row.id, row.name, row.description, row.price);
    return item;
  }

  async findAll() {
    const result = await pool.query('SELECT * FROM items');
    const items = [];
    for (const row of result.rows) {
      const item = new Item(row.id, row.name, row.description, row.price);
      items.push(item);
    }
    return items;
  }

  async updateItem(item) {
    const result = await pool.query('UPDATE items SET name = $1, description = $2, price = $3 WHERE id = $4', [item.name, item.description, item.price, item.id]);
    if (result.rowCount === 0) {
      return null;
    }
    return item;
  }

  async deleteItem(id) {
    const result = await pool.query('DELETE FROM items WHERE id = $1', [id]);
    return result.rowCount > 0;
  }
}

export default ItemRepository;