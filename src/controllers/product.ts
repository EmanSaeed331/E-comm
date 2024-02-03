import { getDbConnection } from '../utils/db';

export class ProductController {
  private connection: any;

  constructor() {
    this.connection = getDbConnection();
  }
  async createProduct(
    userId: number,
    title?: string,
    image?: string,
    price?: string
  ) {
    try {
      const [result] = await this.connection.query(
        'INSERT INTO products (userId, title, image, price) VALUES (?, ?, ?, ?)',
        [userId, title, image, price]
      );

      if ('affectedRows' in result && result.affectedRows === 1) {
        return result.insertId;
      } else {
        throw new Error('Product creation failed');
      }
    } catch (error) {
      console.error(error);
      throw new Error('Product creation failed');
    }
  }

  async updateProduct(
    productId: number,
    userId: number,
    title?: string,
    image?: string,
    price?: string
  ) {
    try {
      const [result] = await this.connection.query(
        'UPDATE products SET title = ?, image = ?, price = ? WHERE id = ? AND AND userId = ?',
        [title, image, price, productId, userId]
      );

      if ('affectedRows' in result && result.affectedRows === 1) {
        return true; // Update successful
      } else {
        throw new Error(
          'Product update failed. Product not found or no changes made.'
        );
      }
    } catch (error) {
      console.error(error);
      throw new Error('Product update failed');
    }
  }

  async getProductById(productId: number, userId: number) {
    try {
      const [rows] = await this.connection.query(
        'SELECT * FROM products WHERE id = ? AND userId = ?',
        [productId, userId]
      );

      if (rows.length === 0) {
        return null;
      }

      const productData = rows[0];
      return {
        id: productData.id,
        title: productData.title,
        image: productData.image,
        price: productData.price,
      };
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching product');
    }
  }

  async deleteProduct(productId: number, userId: number) {
    try {
      const [result] = await this.connection.query(
        'DELETE FROM products WHERE id = ? AND userId = ?',
        [productId, userId]
      );

      if ('affectedRows' in result && result.affectedRows === 1) {
        return true; // Deletion successful
      } else {
        throw new Error('Product deletion failed. Product not found.');
      }
    } catch (error) {
      console.error(error);
      throw new Error('Product deletion failed');
    }
  }

  async getAllProductsForUser(userId: number) {
    try {
      const [rows] = await this.connection.query(
        'SELECT * FROM products WHERE userId = ?',
        [userId]
      );
      return rows;
    } catch (error) {
      console.error(error);
      throw new Error('Error fetching products');
    }
  }
}
