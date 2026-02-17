module.exports = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.onlyface.app',
      },
    ],
  }
};