import { useEffect } from "react";
import { io } from "socket.io-client";

//!change this url everytime with new network
const socket = io("http://192.168.217.120:5000", {
  transports: ["websocket"],
});

export const useJobSocket = (onNewJob) => {
  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      console.log("Socket connect ho gayaaaa:", socket.id);
    });

    socket.on("onNewJobPosted", (job) => {
      console.log("New job received:", job);
      onNewJob(job);
    });

    return () => {
      socket.off("onNewJobPosted");
      console.log("Listener Disconnected");
    };
  }, [onNewJob]);
};
