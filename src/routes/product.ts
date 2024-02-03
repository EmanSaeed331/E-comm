import { Router } from 'express';
import { ProductController } from '../controllers/product';

const router = Router();
const productController = new ProductController();
