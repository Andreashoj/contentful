const contentful = require('contentful')

// export `createClient` to use it in page components
module.exports = contentful.createClient({
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
})