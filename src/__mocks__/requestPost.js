const fs = require('fs')

const requestPost = () => new Promise((resolve, reject) => {
  fs.readFile(`./src/__mockData__/track-data.json`, 'utf8', (err, data) => {
    if (err) reject(err)
    resolve({ entity: JSON.parse(data) })
  })
})

export default requestPost;