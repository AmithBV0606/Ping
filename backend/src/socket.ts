// Initializing Socket Io :

import { Server } from "socket.io";
import { CustomSocket } from "./types";

export function setupSocket(io: Server) {
  // Middlewares :
  io.use((socket: CustomSocket, next) => {
    const room = socket.handshake.auth.room || socket.handshake.headers.room;

    if (!room) {
      return next(new Error("Invalid room!!"));
    }

    socket.room = room;
    next();
  });

  // ________________________________________________________________________________________________

  // Defining what happens when the socket is connected :
  io.on("connection", (socket: CustomSocket) => {
    // Join the user to the room :
    socket.join(socket.room!);

    // To receive the data coming from the client side :
    socket.on("message", (data) => {
      console.log("Server side message : ", data);

      // socket.broadcast.emit("message", data);

      io.to(socket.room!).emit("message", data); // This prevents users from broadcasting the messages to all the group, and sends the message only to the group/room the user is connected to.
    });

    // _______________________________________________________________________________________________

    // Defining what happens when the socket is disconnected :
    io.on("disconnect", () => {
      console.log("A user disconnected.", socket.id);
    });
  });
}
