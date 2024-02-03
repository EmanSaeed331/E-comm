import { User } from '../models/user';
import { getDbConnection } from '../utils/db';

export class UserController {
  private connection: any;

  constructor() {
    this.connection = getDbConnection();
  }

  async getUserById(userId: number): Promise<User | null> {
    const [rows] = await this.connection.query(
      'SELECT * FROM users WHERE id = ?',
      [userId]
    );

    if (rows.length === 0) {
      return null;
    }

    const userData = rows[0];
    return new User(userData.id, userData.username, userData.password);
  }

  async createUser(username: string, password: string): Promise<number> {
    try {
      const [result] = await this.connection.query(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [username, password]
      );

      if ('affectedRows' in result && result.affectedRows === 1) {
        return result.insertId;
      } else {
        throw new Error('User creation failed');
      }
    } catch (error) {
      console.error(error);
      throw new Error('User creation failed');
    }
  }

  async updateUser(
    userId: number,
    newUsername?: string | any,
    newPassword?: string | any
  ): Promise<boolean> {
    try {
      const [result] = await this.connection.query(
        'UPDATE users SET username = ?, password = ? WHERE id = ?',
        [newUsername, newPassword, userId]
      );

      if ('affectedRows' in result && result.affectedRows === 1) {
        return true; // Update successful
      } else {
        throw new Error(
          'User update failed. User not found or no changes made.'
        );
      }
    } catch (error) {
      console.error(error);
      throw new Error('User update failed');
    }
  }
}
