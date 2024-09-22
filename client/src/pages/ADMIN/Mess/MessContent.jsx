// import { useContext, useEffect, useRef, useState } from "react";
// import "./mess.scss";
// import { AuthContext } from "../../context/AuthContext";
// import apiRequest from "../../lib/apiRequest";
// import { format } from "timeago.js";
// import { SocketContext } from "../../context/SocketContext";
// import { useNotificationStore } from "../../lib/notificationStore";

// function Chat({ chats }) {
//   const [chat, setChat] = useState(null);
//   const { currentUser } = useContext(AuthContext);
//   const { socket } = useContext(SocketContext);

//   const messageEndRef = useRef();

//   const decrease = useNotificationStore((state) => state.decrease);

//   useEffect(() => {
//     messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [chat]);

//   const handleOpenChat = async (id, receiver) => {
//     try {
//       const res = await apiRequest("/chats/" + id);
//       if (!res.data.seenBy.includes(currentUser.id)) {
//         decrease();
//       }
//       setChat({ ...res.data, receiver });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const text = formData.get("text");

//     if (!text) return;
//     try {
//       const res = await apiRequest.post("/messages/" + chat.id, { text });
//       setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
//       e.target.reset();
//       socket.emit("sendMessage", {
//         receiverId: chat.receiver.id,
//         data: res.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     const read = async () => {
//       try {
//         await apiRequest.put("/chats/read/" + chat.id);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     if (chat && socket) {
//       socket.on("getMessage", (data) => {
//         if (chat.id === data.chatId) {
//           setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }));
//           read();
//         }
//       });
//     }
//     return () => {
//       socket.off("getMessage");
//     };
//   }, [socket, chat]);

//   return (
//     <div className="chat">
//       <div className="messages">
//         <h1>Messages</h1>
//         {chats?.map((c) => (
//           <div
//             className="message"
//             key={c.id}
//             style={{
//               backgroundColor:
//                 c.seenBy.includes(currentUser.id) || chat?.id === c.id
//                   ? "white"
//                   : "#fecd514e",
//             }}
//             onClick={() => handleOpenChat(c.id, c.receiver)}
//           >
//             <img src={c.receiver.avatar || "/noavatar.jpg"} alt="" />
//             <span>{c.receiver.username}</span>
//             <p>{c.lastMessage}</p>
//           </div>
//         ))}
//       </div>
//       {chat && (
//         <div className="chatBox">
//           <div className="top">
//             <div className="user">
//               <img src={chat.receiver.avatar || "noavatar.jpg"} alt="" />
//               {chat.receiver.username}
//             </div>
//             <span className="close" onClick={() => setChat(null)}>
//               X
//             </span>
//           </div>
//           <div className="center">
//             {chat.messages.map((message) => (
//               <div
//                 className="chatMessage"
//                 style={{
//                   alignSelf:
//                     message.userId === currentUser.id
//                       ? "flex-end"
//                       : "flex-start",
//                   textAlign:
//                     message.userId === currentUser.id ? "right" : "left",
//                 }}
//                 key={message.id}
//               >
//                 <p>{message.text}</p>
//                 <span>{format(message.createdAt)}</span>
//               </div>
//             ))}
//             <div ref={messageEndRef}></div>
//           </div>
//           <form onSubmit={handleSubmit} className="bottom">
//             <textarea name="text"></textarea>
//             <button>Send</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Chat;


import React, { useEffect, useState } from 'react';
import { format } from 'timeago.js';
import './mess.scss';

// Dữ liệu giả cho các cuộc trò chuyện
const chats = [
  {
    id: 1,
    receiver: { id: 1, username: 'Brunch', avatar: '/static/images/avatar/5.jpg' },
    lastMessage: "Hi there! How can I assist you with your order?",
    seenBy: [1, 2, 3],
    messages: [
      { id: 1, userId: 5, text: "Hello! I have a question about my recent order.", createdAt: new Date() - 3600000 },
      { id: 2, userId: 1, text: "Sure, what would you like to know?", createdAt: new Date() - 1800000 },
      { id: 3, userId: 5, text: "Can you provide more details about the shipment?", createdAt: new Date() - 600000 },
    ],
  },
  {
    id: 2,
    receiver: { id: 2, username: 'Birthday', avatar: '/static/images/avatar/1.jpg' },
    lastMessage: "Your order is on its way!",
    seenBy: [1, 2],
    messages: [
      { id: 1, userId: 5, text: "When will my order arrive?", createdAt: new Date() - 7200000 },
      { id: 2, userId: 2, text: "It should be delivered by tomorrow.", createdAt: new Date() - 3600000 },
      { id: 3, userId: 5, text: "Great, thanks for the update!", createdAt: new Date() - 1800000 },
    ],
  },
  {
    id: 3,
    receiver: { id: 3, username: 'Recipe', avatar: '/static/images/avatar/2.jpg' },
    lastMessage: "We have received your feedback.",
    seenBy: [1, 2, 3],
    messages: [
      { id: 1, userId: 5, text: "I have some feedback on the product I purchased.", createdAt: new Date() - 10800000 },
      { id: 2, userId: 3, text: "Thank you for your feedback! We will review it.", createdAt: new Date() - 3600000 },
      { id: 3, userId: 5, text: "Looking forward to seeing improvements.", createdAt: new Date() - 1800000 },
    ],
  },
  {
    id: 4,
    receiver: { id: 4, username: 'Yes!', avatar: '/static/images/avatar/3.jpg' },
    lastMessage: "Thank you for your purchase!",
    seenBy: [1, 2],
    messages: [
      { id: 1, userId: 5, text: "I need help with a recent purchase.", createdAt: new Date() - 14400000 },
      { id: 2, userId: 4, text: "How can I assist you with your purchase?", createdAt: new Date() - 7200000 },
      { id: 3, userId: 5, text: "I have an issue with the product I received.", createdAt: new Date() - 3600000 },
    ],
  },
  {
    id: 5,
    receiver: { id: 5, username: 'Doctor', avatar: '/static/images/avatar/4.jpg' },
    lastMessage: "Your consultation is confirmed.",
    seenBy: [1, 3],
    messages: [
      { id: 1, userId: 5, text: "I need to schedule a consultation.", createdAt: new Date() - 21600000 },
      { id: 2, userId: 5, text: "Could you confirm the date and time?", createdAt: new Date() - 10800000 },
      { id: 3, userId: 5, text: "Thank you! I'll be there.", createdAt: new Date() - 3600000 },
    ],
  },
  {
    id: 6,
    receiver: { id: 6, username: 'Discussion', avatar: '/static/images/avatar/5.jpg' },
    lastMessage: "Let's schedule a meeting to discuss.",
    seenBy: [1, 2, 3],
    messages: [
      { id: 1, userId: 5, text: "I would like to discuss a new feature idea.", createdAt: new Date() - 28800000 },
      { id: 2, userId: 6, text: "Sure! When are you available?", createdAt: new Date() - 14400000 },
      { id: 3, userId: 5, text: "How about tomorrow at 2 PM?", createdAt: new Date() - 7200000 },
    ],
  },
  {
    id: 7,
    receiver: { id: 7, username: 'Summer', avatar: '/static/images/avatar/1.jpg' },
    lastMessage: "Your discount code is applied.",
    seenBy: [1, 2],
    messages: [
      { id: 1, userId: 5, text: "I have a question about the discount code.", createdAt: new Date() - 32400000 },
      { id: 2, userId: 7, text: "The discount code has been applied successfully.", createdAt: new Date() - 10800000 },
      { id: 3, userId: 5, text: "Great! Thank you for the assistance.", createdAt: new Date() - 3600000 },
    ],
  },
];


export default function MessContent({ chatsId }) {
  const [chat, setChat] = useState(null);

  useEffect(() => {
    // Find the chat based on the chatsId
    const selectedChat = chats.find(chat => chat.id === chatsId);
    setChat(selectedChat);
  }, [chatsId]);

  if (!chat) {
    return <div>Select a user to start chatting.</div>;
  }

  return (
    <div className="chat">
      <div className="chatBox">
        <div className="top">
          <div className="user">
            <img src={chat.receiver.avatar || "noavatar.jpg"} alt="" />
            {chat.receiver.username}
          </div>
        </div>
        <div className="center">
          {chat.messages.map(message => (
            <div
              className="chatMessage"
              style={{
                alignSelf: message.userId === 5 ? "flex-end" : "flex-start",
                textAlign: message.userId === 5 ? "right" : "left",
              }}
              key={message.id}
            >
              <p>{message.text}</p>
              <span>{format(message.createdAt)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
