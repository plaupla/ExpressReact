const userRoutes = require('./users');

const appRouter = (app, fs) => {
    //homeroute
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    userRoutes(app, fs);


};

module.exports = appRouter;