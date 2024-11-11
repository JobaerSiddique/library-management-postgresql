import  express  from 'express';
import { BorrowController } from './Borrow.controller';



const router = express.Router()

router.post('/',BorrowController.createBorrow)





export const BorrowRoutes = router;