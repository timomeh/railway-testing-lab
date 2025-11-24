import http from 'http';

const server = http.createServer((_req, res) => {
  res.end('ok');
});

process.on('SIGTERM', () => {
  // ignore
});

server.listen(process.env.PORT || 3000);