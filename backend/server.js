const app = require('./app')
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_LOCAL)
.then(conn => {
    console.log(`Successfully connected to DB 🤪`)
})
.catch(err => {
    console.log(`Error connecting to DB!💥`, err)
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`)
})