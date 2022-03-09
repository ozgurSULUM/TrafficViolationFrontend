import { io } from 'socket.io-client';
const DOMAIN = "http://localhost:5001/";
const socket = io(DOMAIN);
export default socket;