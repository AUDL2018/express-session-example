const express = require('express') // $ npm install express
const session = require('express-session') // $ npm install express-session

const app = express()

// Setup express-session module
app.use(session({
    secret: 'audl2018'
}))

app.get('/count', (req, res) => {
    // Check if session property "count" is defined
    if (!req.session.count) {
        // Create it and set it to zero
        req.session.count = 0
    }

    // Increment the session count property
    req.session.count++

    // Read the session property and send a text response
    res.send('Page viewed ' + req.session.count + ' times')
})

app.listen(3000, () => {
    console.log('Server running')
})