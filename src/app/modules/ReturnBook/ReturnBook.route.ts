import express  from 'express';
import { ReturnBookController } from './ReturnBook.controller';



const router = express.Router();


router.post('/',ReturnBookController.returnBooks)
router.get('/overdue',ReturnBookController.overdueBorrows)



export const ReturnBookRoutes = router;