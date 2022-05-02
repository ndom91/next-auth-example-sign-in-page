const fs = require('fs')
const crypto = require('crypto');

const randomString = crypto.randomBytes(16).toString('hex');
fs.writeFileSync('./.env', `NEXTAUTH_SECRET=${randomString}\n`)
