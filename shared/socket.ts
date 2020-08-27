export type SocketToken = string;

export type SocketUser = { [userId: number]: SocketToken };

export type SocketMessage = {
  userId: number;
  message: string;
  receiverId?: number;
};

// export type ReceiveMessage = {
//   senderId: number;
//   message: string;
// };
