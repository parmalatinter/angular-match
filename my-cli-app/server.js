// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Set passport
app.use(passport.initialize());

// Set session
app.use(session({
    secret: 'test',
}));
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
     extended: false
}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Set passport-local
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(function(username, password, done){
    // ここで username と password を確認して結果を返す
        var e = false;
        var result = false;
        if (e) {
            return done(e);
        }
        else if (!(username && password)) {
            return done(null, false);
        }
        else {
            return done(null, username);
        }
}));

function isAuthenticated(req, res, next){
    if (req.isAuthenticated()) {  // 認証済
        return next();
    }
    else {  // 認証されていない
        res.redirect('/login');  // ログイン画面に遷移
    }
}

// Set passport login page
app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, 'public/login.html'));
});


app.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/error',  // 失敗したときの遷移先
    }),
    function(req, res){
        res.redirect('/');
    }
);

app.get("/logout", function(req, res){
    req.logout();
    res.sendFile(path.join(__dirname, 'public/logout.html'));
});

app.get('/error', function(req, res){
    res.sendFile(path.join(__dirname, 'public/error.html'));
});

// Catch all other routes and return the index file
app.get('*', isAuthenticated, (req, res) => {
     res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
