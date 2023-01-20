import { useContext } from "react";
import { SocketContext } from "../../context/socket";
import {
  CLIENT_GET_DB_MESSAGES,
  CLIENT_MESSAGE,
  LOGOUT,
  CONNECTION,
  SERVER_DB_MESSAGES,
} from "../../../constant";

type data = {
  message?: string;
  to: string;
  from: string;
};


const socket = useContext(SocketContext);

export const connection = (from: string) => {
    socket.emit(CONNECTION, from)
}

export const emitDbMessages = ({ to, from }: data) => {
  socket.emit(CLIENT_GET_DB_MESSAGES, { to, from });
};

export const onDBMessages = () => {
  socket.on(SERVER_DB_MESSAGES, (msg) => {
    return msg.data;
  });
};

export const emitDBMessage = ({ message, to, from }: data) => {
  return socket.emit(CLIENT_MESSAGE, { message, to, from });
};
