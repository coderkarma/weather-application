const router = require("express").Router();

router.get("/success", (req, res) => {
    console.log("server side was hit");
    res.json({ msg: "better success" });
});

router.post("/success/:id/:animal", (req, res) => {
    console.log("Successfull request WITH parmas recieved");

    console.log(req.params);
    res.send({ id: req.params.id, data: req.body });
});

module.exports = router;
