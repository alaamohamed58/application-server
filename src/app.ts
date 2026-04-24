import http from "node:http";

const PORT = 3000;

function bootstrap() {
  const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === "GET" && url === "/") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Updated Message" }));
      return;
    }

    
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  });

  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

bootstrap();