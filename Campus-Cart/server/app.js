const express = require("express");
require("express-async-errors");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const helmet = require("helmet");
const compression = require("compression");
const unknownEndpoint = require("./middleware/unKnownEndpoint");
const { handleError } = require("./helpers/error");

const app = express();

app.set("trust proxy", 1);
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(compression());
app.use(helmet());
app.use(cookieParser());

app.get("/", (req, res) =>
    res.send("<h1 style='text-align: center'>E-COMMERCE API</h1>")
);

// 在 app.get("/", ...) 之后添加：

app.get("/favicon.ico", (req, res) => {
    res.status(204).end(); // 返回空内容
    // 或者返回一个虚拟的favicon
    // res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});

app.use("/api", routes);


//app.use(unknownEndpoint);
app.use((req,res)=> {
        res.status(404).json(
            {
                error: "Endpoint not found",
                path: req.originalUrl,
                method: req.method
            });
    });


app.use(handleError);

module.exports = app;
