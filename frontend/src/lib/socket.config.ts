// Single source of truth : This function checks if there are any sockets currently running
import { io, Socket } from "socket.io-client";
import Env from "./env";

let socket: Socket;

export const getSocket = (): Socket => {
  if (!socket) {
    socket = io(Env.BACKEND_URL, {
      autoConnect: false,
    });
  }

  return socket;
};
