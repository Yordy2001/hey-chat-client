import React from "react";
import { io, Socket } from "socket.io-client";

// please note that the types are reversed
export const socket: Socket = io(`${import.meta.env.VITE_SERVER_URL}`);
export const SocketContext = React.createContext(socket);
