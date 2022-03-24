const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, 'dist')))

app.listen(process.env.PORT || 3000, '0.0.0.0', function () {
  console.log(`Messenger app listening on port ${PORT}!`);
})
