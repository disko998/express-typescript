import * as http from 'http'
import * as colors from 'colors'
import * as serverHandlers from './serverHandlers'
import server from './server'

colors

const Server: http.Server = http.createServer(server)

/**
 * Binds and listens for connections on the specified host
 */
Server.listen(server.get('port'), () =>
  console.log(
    'Server listening on port:'.yellow.bold,
    `${server.get('port')}`.blue.bold,
  ),
)

/**
 * Server Events
 */
Server.on('error', (error: Error) =>
  serverHandlers.onError(error, server.get('port')),
)
Server.on('listening', serverHandlers.onListening.bind(Server))
