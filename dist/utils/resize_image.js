"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var sharp_1 = __importDefault(require("sharp"));
var index_1 = require("./index");
// Main utility function to resize the image to the provided dimentions
var resizeImage = function (fileName, fileExtension, width, height, inputPath, outputPath) {
    if (fileExtension === void 0) { fileExtension = 'jpg'; }
    return new Promise(function (resolve, reject) {
        var readStream = fs_1.default.createReadStream(inputPath + "/" + fileName + "." + fileExtension);
        var outputFile = outputPath + "/" + index_1.getImageName(fileName, width, height, fileExtension);
        var writeStream = fs_1.default.createWriteStream(outputFile);
        console.log('Resizing the image...');
        var transformer = sharp_1.default().resize(width, height);
        readStream.pipe(transformer).pipe(writeStream);
        writeStream.on('finish', function () {
            resolve(outputFile);
        });
        writeStream.on('error', reject);
    });
};
exports.default = resizeImage;
