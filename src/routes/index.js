const siteRoutes = require('./site');

function routes(app) {
    app.use('/', siteRoutes);
}

module.exports = routes;
