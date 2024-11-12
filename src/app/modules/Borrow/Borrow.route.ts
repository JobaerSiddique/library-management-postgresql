import  express  from 'express';
import { BorrowController } from './Borrow.controller';



const router = express.Router()

router.post('/',BorrowController.createBorrow)
router.get('/overdue',BorrowController.overdueBorrows)





export const BorrowRoutes = router;