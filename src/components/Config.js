// in config.js
import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./DogPicture";

const botName = "testBot";

const Config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  widgets: [
    {
      widgetName: "dogpicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default Config;
