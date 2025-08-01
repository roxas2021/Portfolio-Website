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

    const sendMessage = async () => {
        if (input.trim() === "") return;

        const userMessage = input;
        setMessages([...messages, { text: userMessage, sender: "user" }]);
        setInput("");

        try {
            const sessionId = "123456"; // You can make this dynamic if needed

            const response = await fetch(
                `https://frinfodev.app.n8n.cloud/webhook/febe46c3-2670-42d2-8d7a-6a6a5a2c7812?question=${encodeURIComponent(userMessage)}&sessionId=12345`
            );

            const data = await response.json();
            const aiReply = data.response || "Sorry, I couldn't understand that.";

            setMessages(prev => [...prev, { text: aiReply, sender: "bot" }]);

        } catch (error) {
            console.error("Error:", error);
            setMessages(prev => [...prev, { text: "Something went wrong.", sender: "bot" }]);
        }
    };

    return (
        <div className="chat-container">
            {isOpen && (
                <div className = "chat-box">
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