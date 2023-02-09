const express = require("express");
const moment = require("moment-timezone");

const app = express()
const PORT = process.env.PORT || 10094;
app.use(express.json())

const rpcMethods = require("./routes/api");
app.use("/api/btc", rpcMethods);

app.get("/", (req, res) => res.json({ error: "nothing will be found... get lost" }));

moment().tz("Asia/Calcutta").format();
process.env.TZ = "Asia/Calcutta";

app.listen(PORT, () => {
    let times = moment().format('DD MMM YYYY, hh:mm:ss A')
    console.log(times)
	console.log("Bitcoin Node API running on port", PORT);
});