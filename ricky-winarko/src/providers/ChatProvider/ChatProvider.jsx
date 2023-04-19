//Stores and provides the data defined by AuthContext to all the components below it

import React, { forwardRef, useState, useRef, useEffect } from "react";
import { ChatContext } from "context/ChatContext";
import { SteinIcon } from "utils/FileMapping";
import { Davinci3API, ModerationAPI, GPT3API } from "utils/OpenAIAPI/OpenAIAPI";

function generatePrompt(input) {
  //const initialPrompt = `You are a friendly and entertaining chat bot named Stein. You will be talking to children.\n`;
  const initialPrompt = `Marv is a chatbot that reluctantly answers questions with sarcastic responses: `;

  const formattedInput = input
    .slice(-5)
    .map(({ user, message }) => `user: ${user}\nmessage: ${message}\n`)
    .join("\n");

  console.log(
    initialPrompt +
      formattedInput +
      `user: ${input[input.length - 1].user}\nmessage: `
  );

  return initialPrompt + formattedInput + `user: Stein\nmessage: `;
}

function generateChat(input) {
  //const initialPrompt = `You are a friendly and entertaining chat bot named Stein. You will be talking to children.\n`;
  const initialPrompt = {
    role: "system",
    content: `You are a friendly and entertaining chat bot named Stein. You will be talking to children. Give your reply in Markdown format.`,
  };

  const formattedInput = input.slice(-5).map(({ user, message }) => {
    return {
      role: user === "Stein" ? "assistant" : "user",
      content: message === null ? "" : message,
    };
  });

  formattedInput.unshift(initialPrompt);
  console.log(formattedInput);

  return formattedInput;
}

function generateExplanation(input) {
  //const initialPrompt = `You are a friendly and entertaining chat bot named Stein. You will be talking to children.\n`;
  const initialPrompt = {
    role: "system",
    content: `You are a friendly and entertaining chat bot named Stein. You will be talking to children. Give your reply in Markdown format.`,
  };
  const formattedInput = [
    {
      role: "user",
      content:
        "Can you explain the following text in a kid-friendly way: " + input,
    },
  ];
  formattedInput.unshift(initialPrompt);
  console.log(formattedInput);

  return formattedInput;
}

const ChatProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      message: "Hi there, I'm Stein. Ask me anything, I'm here to help!",
      avatar: SteinIcon,
      user: "Stein",
    },
  ]);

  const handleSendMessage = async (message, type) => {
    const updatedChatLog = [
      ...chatLog,
      { message: message, user: "Me", avatar: "/my-avatar.png" },
    ];
    setChatLog(updatedChatLog);
    setMessage("");
    //const response = await ModerationAPI(generatePrompt(updatedChatLog));
    var response = "";
    if (type === "chat") {
      response = await GPT3API(generateChat(updatedChatLog));
    } else if (type === "explanation") {
      response = await GPT3API(generateExplanation(message));
    }

    setChatLog([
      ...chatLog,
      { message: message, user: "Me", avatar: "/my-avatar.png" },
      {
        message: response,
        user: "Stein",
        avatar: SteinIcon,
      },
    ]);

    //     setChatLog([...chatLog, { message: data?.result, user: "Stein", avatar: logo }]);
  };

  return (
    <ChatContext.Provider
      value={{
        chatIsOpen: isOpen,
        setChatIsOpen: setIsOpen,
        chatLog: chatLog,
        setChatLog: setChatLog,
        handleSendMessage: handleSendMessage,
        message: message,
        setMessage: setMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
