import express from 'express';
import { BookController } from './Book.controller';


const router = express.Router()


router.post('/',BookController.createBook)
router.get('/',BookController.getAllBook)
router.get('/:bookId',BookController.getBookByID)
router.put('/:bookId',BookController.updateBook)
router.delete('/:bookId',BookController.deleteBook)


export const BookRoutes = router;