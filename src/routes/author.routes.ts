import { Router } from 'express';
import { AuthorController } from '../controllers/author.controller';

const router = Router();

router.post('/', AuthorController.createAuthor);
router.get('/', AuthorController.getAllAuthors);
router.get('/:id', AuthorController.getAuthorById);
router.put('/:id', AuthorController.updateAuthor);
router.delete('/:id', AuthorController.deleteAuthor);

export default router;