"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Book_routes_1 = require("../modules/Book/Book.routes");
const Member_routes_1 = require("../modules/Members/Member.routes");
const Borrow_route_1 = require("../modules/Borrow/Borrow.route");
const ReturnBook_route_1 = require("../modules/ReturnBook/ReturnBook.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/books',
        route: Book_routes_1.BookRoutes
    },
    {
        path: "/members",
        route: Member_routes_1.MemberRoutes
    },
    {
        path: "/borrow",
        route: Borrow_route_1.BorrowRoutes
    },
    {
        path: "/return",
        route: ReturnBook_route_1.ReturnBookRoutes
    }
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
