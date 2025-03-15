// filepath: c:\Users\Code\Desktop\Code\prime-video-clone\webpack.config.js
const path = require('path');

module.exports = {
    resolve: {
        fallback: {
            "stream": require.resolve("stream-browserify")
        }
    },
    // ...existing configuration...
};