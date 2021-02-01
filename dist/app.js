"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./middleware/logger"));
var resizeRouter_1 = __importDefault(require("./routes/resizeRouter"));
//Instantiating express app
var app = express_1.default();
// Use logger middleware
app.use(logger_1.default);
// initialise public folder
app.use('/', express_1.default.static(__dirname + '/public'));
// Use the routes/resizeRouter file to handle all the requests to endpoints that starts with "resize"
app.use('/resize', resizeRouter_1.default);
// Handle requests to /test endpoint
app.get('/test', function (req, res) {
    res.send('Hello world!');
});
exports.default = app;
