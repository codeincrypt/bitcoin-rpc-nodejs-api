const express = require("express");
const moment = require("moment-timezone");

const app = express()
const PORT = process.env.PORT || 8000;
app.use(express.json())

const rpcMethods = require("./routes/api");
// const listRpc = require("./routes/list");

app.use("/api", rpcMethods);
// app.use("/api/list", listRpc);

app.get("/", (req, res) => res.json({ message: "Invalid URL" }));

moment().tz("Asia/Calcutta").format();
process.env.TZ = "Asia/Calcutta";

app.listen(PORT, () => {
    let times = moment().format('DD MMM YYYY, hh:mm:ss A')
    console.log(times)
	console.log("Bitcoin Node API running on port", PORT);
});