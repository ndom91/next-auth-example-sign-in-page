const fs = require('fs')
const crypto = require('crypto');

const randomString = crypto.randomBytes(16).toString('hex');

if (fs.existsSync('./.env')) {
  fs.appendFileSync('./.env', `\nNEXTAUTH_SECRET=${randomString}\n`)
} else {
  fs.writeFileSync('./.env', `NEXTAUTH_SECRET=${randomString}\n`)
}
