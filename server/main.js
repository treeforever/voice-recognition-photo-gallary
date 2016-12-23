const express = require('express')
const debug = require('debug')('app:server')
const webpack = require('webpack')
const webpackConfig = require('../build/webpack.config')
const config = require('../config')
const compress = require('compression')
const request = require('request')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
// const Flickr = require('flickrapi')
require('dotenv').config()

const app = express()
const paths = config.utils_paths

// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement universal
// rendering, you'll want to remove this middleware.
app.use(require('connect-history-api-fallback')())

// Apply gzip compression
app.use(compress())

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (config.env === 'development') {
  const compiler = webpack(webpackConfig)

  debug('Enable webpack dev and HMR middleware')
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : paths.client(),
    hot         : true,
    quiet       : config.compiler_quiet,
    noInfo      : config.compiler_quiet,
    lazy        : false,
    stats       : config.compiler_stats
  }))
  app.use(require('webpack-hot-middleware')(compiler))

  // Serve static assets from ~/src/static since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(paths.client('static')))
} else {
  debug(
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(paths.dist()))
}

// flickr api
app.post('/flickr', function (req, res) {
  // const flickrOptions = {
  //   api_key: process.env.FLICKR_API_KEY,
  //   secret: process.env.FLICKR_SECRET
  // }
  //
  // Flickr.authenticate(flickrOptions, (error, flickr) => {
  //   // we can now use "flickr" as our API object
  //   console.log('inside Flickr method')
  //   flickr.people.getPublicPhotos({
  //     user_id: '122593843@N04',
  //     page: 1,
  //     per_page: 20
  //   }, (err, result) => {
  //     if (err) {
  //       throw new Error('error from flickr.people.getPublicPhotos')
  //     }
  //     console.log('response from flickr:', result)
  //   })
  // })
  let statusCode = null
  request
    .get('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=024a137e692e59cf1392e00dad1c486e&user_id=139501920%40N07&format=json&nojsoncallback=1&auth_token=72157678171713655-0ba9f7256abc8590&api_sig=30ca7a77ffb82ada7e6d48446b7541e2')
    .pipe(res)
})

module.exports = app
