"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerAdpter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "1b43442bb7d093",
        pass: "47c54236754e23"
    }
});
class NodemailerAdpter {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Anna <annassabino@gmail.com",
            subject,
            html: body,
        });
    }
}
exports.NodemailerAdpter = NodemailerAdpter;
