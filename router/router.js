const express = require('express')
const router = new express.Router()

router.get('/example', (req, res) => {
    res.send({"name":"akhil"})
})

module.exports = router;

