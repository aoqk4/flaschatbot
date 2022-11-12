import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: "dogpicture",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleReco = (message) => {
    fetch(`http://127.0.0.1:5000/chatbot/${message}`)
      .then((res) => res.json())
      .then((json) => {
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, createChatBotMessage(json.response)],
        }));
      });
  };

  // Put the handleHello and handleDog function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            handleReco,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
