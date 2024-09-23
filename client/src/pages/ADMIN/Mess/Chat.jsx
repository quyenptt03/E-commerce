import React, { useState } from 'react';
import MessUser from './MessUser';
import MessContent from './MessContent';

export default function Chat() {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleUserSelect = (id) => {
    setSelectedUserId(id);
  };

  return (
    <div className="ChatContainer">
      <div className="messFrame">
        <div className="messUser">
          <MessUser onUserSelect={handleUserSelect} />
        </div>
        <div className="messContent">
          {selectedUserId !== null && <MessContent chatsId={selectedUserId} />}
        </div>
      </div>
    </div>
  );
}
