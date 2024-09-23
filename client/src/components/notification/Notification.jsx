
import React, { useEffect, useState } from "react";
import "./notification.css"
const NotificationBox = ( { onNotificationCountChange }) => {
  const [notifications, setNotifications] = useState([]);
  const [triggerFetch, setTriggerFetch] = useState(false); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = [
          { message: "New registration alert." },
          { message: "Fake account alert." },
          { message: "New product alert: Item 21334 is a best-seller!" },
        ];
        
        const newNotifications = response.slice(0, 3).map((notification) => {
          const message = notification.message;
          let translatedMessage = message;
          if (/Herd (\w+) has reached the harvest age\./.test(message)) {
            const herdNameMatch = message.match(/Herd (\w+) has reached the harvest age\./);
            if (herdNameMatch) {
              const herdName = herdNameMatch[1];
              translatedMessage = `Đàn ${herdName} đã đến tuổi thu hoạch`;
            }
          }
          return { message: translatedMessage };
        });
        

        setNotifications(newNotifications);
        onNotificationCountChange(newNotifications.length);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      setTriggerFetch((prev) => !prev);
    }, 60000);

    return () => clearInterval(interval);
  }, [ triggerFetch]);

  return (
    <div className="notification-container">
    <div className="notification-header">Thông báo</div>
    <div className="separator"></div>
    <ul className="notification-list">
      {notifications.map((notification, index) => (
        <li key={index} className="notification-item">
          {notification.message}
        </li>
      ))}
    </ul>
  </div>
  );
};
 export default NotificationBox;