import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/posts/" + params.id);
  return res.data;
};
export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  const postPromise = apiRequest("/posts?" + query);
  return defer({
    postResponse: postPromise,
  });
};

export const profilePageLoader = async () => {
  const postPromise = apiRequest("/users/profilePosts");
  const chatPromise = apiRequest("/chats");
  return defer({
    postResponse: postPromise,
    chatResponse: chatPromise,
  });
};
// chatLoader.js

export const chatLoader = async () => {
  // Mock chat response data
  const chatResponse = {
    data: [
      {
        id: 1,
        receiver: { id: 2, username: "John Doe", avatar: "/avatar1.jpg" },
        seenBy: [1],
        lastMessage: "Hey, how are you?",
        messages: [
          { id: 1, userId: 2, text: "Hey, how are you?", createdAt: new Date() },
          { id: 2, userId: 1, text: "I'm good! What about you?", createdAt: new Date() },
        ],
      },
      {
        id: 2,
        receiver: { id: 3, username: "Jane Smith", avatar: "/avatar2.jpg" },
        seenBy: [],
        lastMessage: "Let's meet tomorrow.",
        messages: [
          { id: 1, userId: 3, text: "Let's meet tomorrow.", createdAt: new Date() },
          { id: 2, userId: 1, text: "Sure, see you!", createdAt: new Date() },
        ],
      },
    ],
  };

  // Simulate a network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ chatResponse });
    }, 1000);
  });
};
