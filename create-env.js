const { access } = require('fs')
const { appendFile, writeFile } = require('fs')
const { randomBytes } = require('crypto')

if (process.env.NEXTAUTH_SECRET) {
  process.exit(0)
}

(async () => {
  const randomString = randomBytes(16).toString('hex')
  access("./.env", (error) => {
    if (error) {
      writeFile('./.env', `NEXTAUTH_SECRET=${randomString}\n`)
      return
    }
    appendFile('./.env', `\nNEXTAUTH_SECRET=${randomString}\n`)
  })
})()
