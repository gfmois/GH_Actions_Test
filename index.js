// eslint-disable-next-line no-undef
let express = require('express')
let app = express()

app.get('/', (req, res) => res.send('Hello World'))

app.listen(3000, () => {
    console.log('Server Listening at port 3000 🚀')
})