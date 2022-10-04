import petController from "../controller/petController";
import { Router } from 'express';

const router = Router();

router.post('/register', petController.register);
router.get('/', petController.getall);
router.get('/:id', petController.getone)

export default router;