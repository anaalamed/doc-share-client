import * as SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";

import { serverAddress } from "./constants";
import { update } from "./doc-functions";

let stompClient;
const socketFactory = () => {
  return new SockJS(serverAddress + "/ws");
};

const onMessageReceived = (payload) => {
  console.log("---- onMessageReceived ----");
  var message = JSON.parse(payload.body);
  console.log("---- onMessageReceived2 before update ----");

  console.log(message);
  update(message);
};

const onConnected = () => {
  console.log("---- onConnected ----");
  stompClient.subscribe("/topic/updates", onMessageReceived);
  stompClient.send("/app/hello", [], JSON.stringify({ name: "Default user" }));
};

const openConnection = () => {
  console.log("---- openConnection ----");
  const socket = socketFactory();
  stompClient = Stomp.over(socket);
  stompClient.connect({}, onConnected);
};

const addUpdate = (user, content, startPosition, endPosition) => {
  console.log("---- addUpdate ----");
  sendUpdate(user, "APPEND", content, startPosition, endPosition);
};

const sendUpdate = (user, type, content, startPosition, endPosition) => {
  console.log("---- sendUpdate ----");
  stompClient.send(
    "/app/update",
    [],
    JSON.stringify({
      user: user,
      type: type,
      content: content,
      startPosition: startPosition,
      endPosition: endPosition,
    })
  );
};

export { openConnection, addUpdate };
