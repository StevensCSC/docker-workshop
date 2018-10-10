const app = require('express')()

app.use(require('morgan')('dev'))

let counter = 0;

app.get('/', (req, res) => {
  ++counter
  res.json({ counter })
})

app.listen(3000, () => console.log('http://localhost:3000'))
