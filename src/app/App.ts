import http from 'http';

const PORT = 3000;

const routes: { [key: string]: string } = {
    "/": "Express API course using Node.js ",
    "/authors": "Author endpoint",
    "/books": "Books endpoint",
}

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    const routeResponse: string = routes[request.url as string];
    response.end(routeResponse);
});

server.listen(PORT, () => {
    console.log("Server listening... ");
});