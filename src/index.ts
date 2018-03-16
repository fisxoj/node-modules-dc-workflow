import express from "express"
import { pick } from "lodash"

const app = express();

const data = {
    another: 2,
    that: 4
};


app.set("port", 3000);
app.get("/", (req: express.Request, resp: express.Response) => resp.send("Hello!"));
app.get("/bye", (req: express.Request, resp: express.Response) => resp.send("bai!"));
app.get("/pizza", (req: express.Request, resp: express.Response) => resp.send(pick(data, "that")));

const server = app.listen(app.get("port"), () => {
    console.log(`Running on ${app.get("port")}.`)
});
