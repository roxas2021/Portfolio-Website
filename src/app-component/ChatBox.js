import React, {useState} from "react";
import "../css-component/ChatBox.css";
import chatIcon from "../icons/chat.png";
import { FaCommentDots } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

export function ChatBox() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const toggleChat = () => setIsOpen(!isOpen);

    const sendMessage = () => {
        if(input.trim() === "") return;
        setMessages([...messages, { text: input, sender: "user" }]);
        setInput("");
    };

    return (
        <div className="chat-container">
            {isOpen && (
                <div children = "chat-box">
                    <div className="chat-header">
                        <h4>Customer Service</h4>
                        <button onClick={toggleChat}>X</button>
                    </div>
                    <div className="chat-messages">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`chat-message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="chat-input-container">
                        <div className="chat-input">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key == "Enter" && sendMessage()}
                                placeholder="Type your message..."
                            />
                            <button onClick={sendMessage}>
                                <IoMdSend size={17}/>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <button className="chat-toggle-button" onClick={toggleChat}>
                <FaCommentDots size={34} color="#fff" />
            </button>
        </div>
    );
}

export default ChatBox;