/*  eslint-disabled */
require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')
hotClient.subscrible(function(event) {
    if (event.action === 'reload') {
        window.location.reload()
    }
})