import http from 'http';

const hostName = '127.0.0.1';
const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('<h1 style="color: red">Hello World!</h1>');
//     res.write('<p>I wonder what else we can send...</p>');
//     res.end('This is the end of the response!');
// });
// server.listen(port, hostName, () => {
//     console.log(`Server running at http://${hostName}:${port}/`);
// })

// putting it in a try/catch block to handle errors

try {
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        switch (req.url) {
            case '/':
                res.write('change the end of the url to switch');
                break;
            case '/switch':
                res.write('alright, now type switch-again');
                break;
            case '/switch-again':
                res.write('Conformist.. - Goth South Park Kid');
                break;
            default:
                res.write('<p>Page not found :p </p>');
        }
        res.end();
    }).listen(port, hostName, () => {
        console.log(`Server running at http://${hostName}:${port}/`);
    });
} catch (error) {
    console.error('Error starting server:', error);
}
