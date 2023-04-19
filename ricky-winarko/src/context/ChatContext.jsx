//Creates a context to store the user login data

import { Component, createContext, useContext } from "react";

export const ChatContext = createContext({
  //   chat: Array,
  //   handlePopup: Function,
  //   promptAI: Function,
  // ChatComponent: Component,
  chatIsOpen: Boolean,
  setChatIsOpen: Function,
  chatLog: Array,
  setChatLog: Function,
  handleSendMessage: Function,
  message: String,
  setMessage: Function,
});

export const useChatContext = () => useContext(ChatContext);
