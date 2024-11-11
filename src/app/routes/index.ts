import  express  from 'express';
import { BookRoutes } from '../modules/Book/Book.routes';
import { MemberRoutes } from '../modules/Members/Member.routes';
import { BorrowRoutes } from '../modules/Borrow/Borrow.route';
import { ReturnBookRoutes } from '../modules/ReturnBook/ReturnBook.route';




const router = express.Router();

const moduleRoutes = [
    {
        path:'/books',
        route:BookRoutes
    },
    {
        path:"/members",
        route: MemberRoutes
    },
    {
        path:"/borrow",
        route: BorrowRoutes
    },
    {
        path:"/return",
        route: ReturnBookRoutes
    }
]



moduleRoutes.forEach(route=>router.use(route.path,route.route))

export default router;