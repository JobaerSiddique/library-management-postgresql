"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Member_controller_1 = require("./Member.controller");
const router = express_1.default.Router();
router.post('/', Member_controller_1.MemberController.createMember);
router.get('/', Member_controller_1.MemberController.getAllMembers);
router.get('/:memberId', Member_controller_1.MemberController.getMemberById);
router.put('/:memberId', Member_controller_1.MemberController.updateMember);
router.delete('/:memberId', Member_controller_1.MemberController.deleteMember);
exports.MemberRoutes = router;
