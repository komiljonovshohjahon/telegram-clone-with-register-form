import { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
import {
  SendOutlined,
  PictureOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatID, creds } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = value.trim();

    if (text.length > 0) sendMessage(creds, chatID, { text });

    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatID);
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatID, { files: event.target.files, text: "" });
  };

  const handleOut = (e) => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    document.location.reload();
  };

  return (
    <div>
      <form className="message-form" onSubmit={handleSubmit}>
        <input
          className="message-input"
          placeholder="Send a message..."
          value={value}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <label htmlFor="upload-button">
          <span className="send-button">
            <PictureOutlined className="picture-icon" />
            <input
              type="file"
              multiple={false}
              id="upload-button"
              style={{ display: "none" }}
              onChange={handleUpload}
            />
          </span>
        </label>
        <button type="submit" className="send-button">
          <SendOutlined className="send-button" />
        </button>
        <button className="logout" onClick={handleOut}>
          <LogoutOutlined className="send-button" />
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
