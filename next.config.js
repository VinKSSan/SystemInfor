const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

//module.exports = nextConfig

// next.config.js
// next.config.js
module.exports = {
  // Outras configurações...
  publicRuntimeConfig: {
    staticFolder: '/vid',
  },
};

