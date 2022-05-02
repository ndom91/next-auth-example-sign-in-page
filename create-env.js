const { access, appendFile, writeFile } = require('fs/promises')
const { randomBytes } = require('crypto')
const { constants } = require('fs')

if (process.env.NEXTAUTH_SECRET) {
  process.exit(0)
}

(async () => {
  const randomString = randomBytes(16).toString('hex')
  try {
    await access("./.env", constants.R_OK && constants.W_OK)
    await appendFile('./.env', `\nNEXTAUTH_SECRET=${randomString}\n`)
  } catch (error) {
    await writeFile('./.env', `NEXTAUTH_SECRET=${randomString}\n`)
  }
})()
