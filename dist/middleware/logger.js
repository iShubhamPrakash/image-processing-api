"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var morgan_1 = __importDefault(require("morgan"));
/*
 *   Log format (tiny) =    :method :url :status :res[content-length] - :response-time ms
 */
var logger = morgan_1.default('tiny');
exports.default = logger;
