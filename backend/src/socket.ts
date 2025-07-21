// Initializing Socket Io :

import { Server } from "socket.io";

export function setupSocket(io: Server) {
  // Defining what happens when the socket is connected :
  io.on("connection", (socket) => {
    console.log("The socket is connected..", socket.id);

    // To receive the data coming from the client side :
    socket.on("message", (data) => {
      console.log("Server side message : ", data);
      socket.emit("message", data);
    });

    // Defining what happens when the socket is disconnected :
    io.on("disconnect", () => {
      console.log("A user disconnected.", socket.id);
    });
  });
}
