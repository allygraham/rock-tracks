const fs = require('fs')

const request = (url) => new Promise((resolve, reject) => {
  fs.readFile(`./src/tests/mocks/track-data.json`, 'utf8', (err, data) => {
    if (err) reject(err)
    resolve({ entity: JSON.parse(data) })
  })
})

export default request