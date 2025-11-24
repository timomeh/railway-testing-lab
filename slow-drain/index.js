import http from 'http';

const configuredDelay = (process.env.SHUTDOWN_DELAY_MS || "30_000").replaceAll("_", "")
const shutdownDelay = Number(configuredDelay);

const server = http.createServer((_req, res) => {
  res.end('ok');
});

process.on('SIGTERM', () => {
  console.log('got sigterm', { configuredDelay, shutdownDelay })

  if (shutdownDelay >= 0) {
    console.log(`starting timer for ${shutdownDelay}ms`)
    setTimeout(() => {
      console.log('calling exit 0')
      process.exit(0)
    }, shutdownDelay);
  }
});

server.listen(process.env.PORT || 3000);