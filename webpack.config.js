const path = require("path");
module.exports = {
    entry: [
        "./script/const.js",
        "./script/render.js",
        "./script/data.js",
        "./script/main.js",
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname),

    },
    devtool: false
};