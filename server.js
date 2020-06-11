const express = require("express");
const mongojs = require("mongojs");
const db = mongojs("hamza", ["users"]);
const app = express();
app.use(express.static(__dirname + "/public"))
// app.get("/", (req, res) => {
//     res.send("Homepage");
// }
// )
app.get("/api", (req, res) => {
    db.users.find({}, (err, docs) => {
        console.log(docs);
        res.send(docs)
    }
    );
}
)





app.listen(3000, () => {
    console.log('Server pokrenut');
}
)