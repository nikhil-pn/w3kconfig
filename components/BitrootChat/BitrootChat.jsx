import React, { useState } from "react";
import "./BitrootChat.css"; // Move the styles to an external CSS file

const BitrootChat = () => {
  const [message, setMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const displayMessage = () => {
    if (message.trim() !== "") {
      setModalVisible(true);
    }
  };

  const showMessageModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="container">
      <img src="/images/bitroot.png" alt="Mascot" className="mascot" />

      <div
        className={`speech-bubble-content ${message ? "show" : ""}`}
        onClick={showMessageModal}
      >
        {/* <span className="message-text">{message}</span> */}
        <span>We're Rollin' Out Soon..</span>
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          placeholder="GM GM"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="submit-button" onClick={displayMessage}>
          Send
        </button>
      </div>

      {modalVisible && (
        <div className="message-modal" onClick={closeModal}>
          <div className="message-modal-content">
            <span>{message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BitrootChat;