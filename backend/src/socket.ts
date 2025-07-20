// Initializing Socket Io :

import { Server } from "socket.io";

export function setupSocket(io: Server) {
  // Defining what happens when the socket is connected :
  io.on("connection", (socket) => {
    console.log("The socket is connected..", socket.id);

    // Defining what happens when the socket is disconnected :
    io.on("disconnect", () => {
      console.log("A user disconnected.", socket.id);
    });
  });
}
