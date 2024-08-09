"use client"

import React, { useState, useEffect } from "react";
import "./BitrootChat.css";

const BitrootChat = () => {
  const [message, setMessage] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [randomText, setRandomText] = useState("");
  const [instructionModalVisible, setInstructionModalVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const texts = [
    "𝕽𝖊𝖆𝖑 𝕳𝖚𝖘𝖙𝖑𝖊𝖗𝖘 𝕹𝖊𝖛𝖊𝖗 𝕽𝖚𝖘𝖍. 𝕾𝖙𝖆𝖞 𝕻𝖆𝖙𝖎𝖊𝖓𝖙.",
    "𝖂𝖊'𝖗𝖊 𝕮𝖔𝖔𝖐𝖎𝖓' 𝖀𝖕 𝕾𝖔𝖒𝖊𝖙𝖍𝖎𝖓𝖌 𝕭𝖎𝖌.",
    "𝕳𝖔𝖑𝖉 𝕿𝖎𝖌𝖍𝖙, 𝕿𝖍𝖊 𝕾𝖙𝖗𝖊𝖊𝖙𝖘 𝕬𝖗𝖊 𝕬𝖇𝖔𝖚𝖙 𝖙𝖔 𝕳𝖊𝖆𝖗 𝖀𝖘.",
    "𝕿𝖎𝖒𝖊'𝖘 𝕿𝖎𝖈𝖐𝖎𝖓𝖌... 𝕯𝖔𝖓'𝖙 𝕸𝖎𝖘𝖘 𝕺𝖚𝖙.",
    "𝕮𝖔𝖚𝖓𝖙𝖎𝖓𝖌 𝕯𝖔𝖜𝖓... 𝕾𝖙𝖆𝖞 𝖂𝖔𝖐𝖊.",
    "𝖂𝖍𝖆𝖙'𝖘 𝕮𝖔𝖒𝖎𝖓𝖌 𝖂𝖎𝖑𝖑 𝕭𝖊 𝕱𝖎𝖗𝖊. 𝕾𝖙𝖆𝖞 𝕽𝖊𝖆𝖉𝖞.",
    "𝖂𝖊'𝖗𝖊 𝕵𝖚𝖘𝖙 𝕲𝖊𝖙𝖙𝖎𝖓' 𝕾𝖙𝖆𝖗𝖙𝖊𝖉.",
    "𝕿𝖍𝖊 𝖘𝖙𝖗𝖊𝖊𝖙𝖘 𝖙𝖆𝖑𝖐, 𝖇𝖚𝖙 𝖜𝖊'𝖗𝖊 𝖆𝖇𝖔𝖚𝖙 𝖙𝖔 𝖒𝖆𝖐𝖊 '𝖊𝖒 𝖑𝖎𝖘𝖙𝖊𝖓.",
  ];

  const afterFiveClicksTexts = [
    "𝘚𝘵𝘪𝘭𝘭 𝘩𝘦𝘳𝘦? 𝘗𝘦𝘳𝘴𝘪𝘴𝘵𝘦𝘯𝘵, 𝘢𝘳𝘦𝘯’𝘵 𝘺𝘰𝘶?",
    "𝘞𝘰𝘸, 𝘺𝘰𝘶’𝘳𝘦 𝘳𝘦𝘢𝘭𝘭𝘺 𝘴𝘵𝘪𝘤𝘬𝘪𝘯𝘨 𝘢𝘳𝘰𝘶𝘯𝘥!",
    "𝘎𝘰𝘵 𝘯𝘰𝘵𝘩𝘪𝘯𝘨 𝘣𝘦𝘵𝘵𝘦𝘳 𝘵𝘰 𝘥𝘰?",
    "𝘍𝘦𝘦𝘭𝘪𝘯𝘨 𝘢 𝘣𝘪𝘵 𝘴𝘵𝘢𝘭𝘬𝘦𝘳-𝘪𝘴𝘩 𝘩𝘦𝘳𝘦.",
    "𝘓𝘢𝘴𝘵 𝘸𝘢𝘳𝘯𝘪𝘯𝘨 𝘣𝘦𝘧𝘰𝘳𝘦 𝘵𝘩𝘪𝘯𝘨𝘴 𝘨𝘦𝘵 𝘳𝘦𝘢𝘭.",
  ];

  useEffect(() => {
    setRandomText(getRandomText());
  }, []);

  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
  };

  const displayMessage = () => {
    setClickCount((prevCount) => prevCount + 1);
    var check = false;

    if (clickCount >= 5) {
      const index = clickCount - 5;
      if (index < afterFiveClicksTexts.length) {
        setRandomText(afterFiveClicksTexts[index]);
      } else {
        setRandomText("𝙖𝙡𝙧𝙞𝙜𝙝𝙩! 𝙮𝙤𝙪 𝙜𝙤𝙩 𝙢𝙚.");
      }
    } else {
      setRandomText(getRandomText());
    }

    if (message.trim() !== "") {
      setModalVisible(true);
    }

    if (["hello"].includes(message.trim().toLowerCase())) {
      window.location.href = "https://www.youtube.com/watch?v=CVsbTCdTyAM";
    } else if (
      ["hi", "hey", "gm", "gm gm"].includes(message.trim().toLowerCase())
    ) {
      window.location.href = "https://www.youtube.com/watch?v=xvFZjo5PgG0";
    }

    if (message.trim().toLowerCase() === "zo zo zo") {
      setInstructionModalVisible(true);
    }

    if (message.trim().toLowerCase() === "athena") {
      window.open("https://github.com/AthenaFoss", "_blank");
    }

    if (message.trim().toLowerCase() === "register") {
      window.open("https://lu.ma/4j0wylud?tk=g8Gq5T", "_blank");
    }

    if (randomText === "𝙖𝙡𝙧𝙞𝙜𝙝𝙩! 𝙮𝙤𝙪 𝙜𝙤𝙩 𝙢𝙚.") {
      window.location.href = "https://github.com/AthenaFoss/Bitroot.Zo";
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const closeInstructionModal = () => {
    setInstructionModalVisible(false);
  };

  return (
    <div className="container">
      <img src="/images/bitroot.png" alt="Mascot" className="mascot" />
      <div className={`speech-bubble-content ${message ? "show" : ""}`}>
        <span>{randomText}</span>
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
          yoo
        </button>
      </div>
      {modalVisible && (
        <div className="message-modal" onClick={closeModal}>
          <div className="message-modal-content">
            <span>{message}</span>
          </div>
        </div>
      )}
      {instructionModalVisible && (
        <div className="instruction-modal" onClick={closeInstructionModal}>
          <div className="instruction-modal-content">
            <h2>Yo, Listen Up biatch!</h2>
            <p>Here’s how you’re gonna handle this:</p>
            <ol>
              <li>Step 1: Take a screenshot of the page</li>
              <li>Step 2: Tag web3kerala in X and post it</li>
              <li>Step 3: First person to do this hits the bounty</li>
            </ol>
            <button onClick={closeInstructionModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BitrootChat;
