const express = require('express')
const app = express()

app.get('/api/get', (req, res) => {
  const customers = [
    {'name': 'David'},
    {'name': 'Heidi'}
  ]
})

const port = 3001
app.listen(port, () => console.log('server started on port ' + port))