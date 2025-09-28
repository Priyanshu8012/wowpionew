import React, { useState, useRef, useEffect } from "react";
import chatIcon from "../assets/product/chatbot2.png"; // Make sure this path is correct

const ChatbotToggle = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi! I’m here to answer your questions. Try asking about our brand, WowPio, or Water.",
            sender: "bot",
        },
    ]);
    const [input, setInput] = useState("");
    const messagesEndRef = useRef(null);

    // Scroll to bottom on new message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMessage = {
            id: messages.length + 1,
            text: input,
            sender: "user",
        };
        setMessages((prev) => [...prev, userMessage]);

        const msg = input.toLowerCase();
        let reply = "";

        
    // Predefined replies
if (msg.includes("hi") || msg.includes("hello")) {
    reply = "Hello! How can I help you today?";
} else if (msg.includes("how are you")) {
    reply = "I'm just a bot, but I'm doing great! How about you?";
} else if (msg.includes("wowpio")) {
    reply = "WowPio is a platform where you can learn, create, and share projects efficiently.";
} else if (msg.includes("explain me about wow pio")) {
    reply = "WowPio ek growing water company hai jo quality products aur services provide karti hai.";
} else if (msg.includes("water")) {
    reply = "Water is essential for life, covers 71% of Earth's surface, and supports all living organisms.";
} else if (msg.includes("brand") || msg.includes("about your brand")) {
    reply = "Our brand focuses on providing quality learning resources, interactive platforms, and innovative solutions for students and developers.";
} else if (msg.includes("services")) {
    reply = "We offer educational content, live tutorials, project guidance, and community support for learners.";
} else if (msg.includes("contact")) {
    reply = "You can reach us at info@growwithus.com or via WhatsApp at +91-9999999999.";
} else if (msg.includes("help")) {
    reply = "I can help you with information about WowPio, our services, or general queries. Ask me anything!";
} else {
    const phoneNumber = "+919369535853"; // Replace with your real WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(input)}`;
    window.open(url, "_blank");
    setInput("");
    return;
}


        // Simulate typing delay
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { id: prev.length + 1, text: reply, sender: "bot" },
            ]);
        }, 500);

        setInput("");
    };

    return (
        <div className="fixed bottom-5 right-5 z-50 flex items-end space-x-3">
            {/* Chat Window (to the left of icon) */}
            {open && (
                <div className="w-80 h-96 bg-white shadow-2xl rounded-2xl flex flex-col">
                    <h2 className="font-bold text-lg mb-2 border-b pb-2 text-center bg-blue-600 text-white rounded-t-2xl">
                        💬 Ask Me Anything
                    </h2>

                    {/* Chat messages */}
                    <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`p-2 rounded-lg max-w-[70%] break-words ${
                                    msg.sender === "user"
                                        ? "bg-blue-500 text-white ml-auto"
                                        : "bg-gray-100 text-gray-800"
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef}></div>
                    </div>

                    {/* Input Area */}
                    <div className="flex border-t p-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your question..."
                            className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button
                            onClick={sendMessage}
                            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}

            {/* Chat Icon */}
          <button
  onClick={() => setOpen(!open)}
  className="flex items-center justify-center w-16 h-16 rounded-full 
             hover:scale-110 
             transition-transform duration-300"
>
  <img src={chatIcon} alt="Chatbot" className="w-18 h-18" />
</button>

        </div>
    );
};

export default ChatbotToggle;
