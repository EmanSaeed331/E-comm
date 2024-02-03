import { Router } from 'express';
import { ProductController } from '../controllers/product';
import { authenticateMiddleware } from '../middlewares/authMiddleware';

const productRouter = Router();
const productController = new ProductController();
productRouter.post('/products', authenticateMiddleware, async (req, res) => {
  const { name, price, userId } = req.body;

  try {
    const productId = await productController.createProduct(
      userId,
      price,
      name
    );
    res.status(201).json({ productId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

productRouter.get(
  '/products/:productId',
  authenticateMiddleware,
  async (req, res) => {
    const productId = parseInt(req.params.productId, 10);
    const userId = req.query.userId;

    try {
      const product = await productController.getProductById(
        productId,
        userId as any
      );

      if (!product) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.json(product);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
);

productRouter.put(
  '/products/:productId',
  authenticateMiddleware,
  async (req, res) => {
    const productId = parseInt(req.params.productId, 10);
    const { name, price } = req.body;
    const userId = req.query.userId;
    try {
      const updatedProduct = await productController.updateProduct(
        productId,
        userId as any,
        name,
        price
      );

      if (!updatedProduct) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.json(updatedProduct);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
);

productRouter.delete(
  '/products/:productId',
  authenticateMiddleware,
  async (req, res) => {
    const productId = parseInt(req.params.productId, 10);
    const userId = req.query.userId;

    try {
      const deletedProduct = await productController.deleteProduct(
        productId,
        userId as any
      );

      if (!deletedProduct) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.json({ message: 'Product deleted successfully' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
);
export default productRouter;
