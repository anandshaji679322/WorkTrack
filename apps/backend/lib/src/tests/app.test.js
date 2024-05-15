"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('GET /test/api', () => {
    it('responds with JSON containing "Hello from Express Backend!"', async () => {
        const response = await (0, supertest_1.default)(app_1.default).get('/test/api');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            success: true,
            message: 'Hello from Express Backend!'
        });
    });
});
