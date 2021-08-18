const express = require('express')
const router = express.Router();
const controllers = require('../controllers/blip')
router.get("/repository", async (req, res) => {
  res.send(await controllers());
})
module.exports = router
