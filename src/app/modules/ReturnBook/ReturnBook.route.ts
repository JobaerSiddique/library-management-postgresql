import express  from 'express';
import { ReturnBookController } from './ReturnBook.controller';



const router = express.Router();


router.post('/',ReturnBookController.returnBooks)



export const ReturnBookRoutes = router;