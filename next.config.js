module.exports = {
  reactStrictMode: true,
}
const withImages = require('next-images')
module.exports = withImages()

module.exports = {
  async rewrites() {
    return [
      {
        source: '/login',
        destination: 'http://localhost:4000/login/', // Proxy to Backend

      },
      {
        source: '/reg',
        destination: 'http://localhost:4000/reg/' ,// Proxy to Backend
      },
      {
        source: '/comments',
        destination: 'http://localhost:4000/comments/' ,// Proxy to Backend
      }
      
    ]
  }
}