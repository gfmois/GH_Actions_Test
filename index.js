let express = require('express')
let app = express()

// App Route
app.get('/', (req, res) => res.send('Hello World'))

app.listen(3000, () => {
    console.log('Server Listening at port 3000 🚀')
})