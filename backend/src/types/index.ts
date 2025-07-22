import { Socket } from "socket.io";

export interface LoginPayloadType {
  name: string;
  email: string;
  provider: string;
  oauth_id: string;
  image?: string;
}

export interface CustomSocket extends Socket {
  room?: string;
}
