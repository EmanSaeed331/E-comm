import { Router } from 'express';
import { UserController } from '../controllers/user';

const userRouter = Router();
const userController = new UserController();
userRouter.post('/users', async (req, res) => {
  const { username, password } = req.body;

  try {
    const userId = await userController.createUser(username, password);
    res.status(201).json({ userId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Endpoint for getting a user by ID
userRouter.get('/users/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId, 10);

  try {
    const user = await userController.getUserById(userId);

    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default userRouter;
