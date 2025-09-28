import React, { useState, useRef, useEffect } from "react";
import chatIcon from "../assets/product/chatbot2.png";

const ChatbotToggle = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi! I'm here to answer your questions. Try asking about our brand, WowPio, or Water.",
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
} else if (msg.includes("products") || msg.includes("bottle sizes") || msg.includes("available bottles")) {
    reply = "We have the following bottle sizes available:\n- 200ml\n- 500ml\n- 1 liter\n- 2 liter";
} else if (msg.includes("contact") || msg.includes("address") || msg.includes("contact details")) {
    reply = `You can reach us via email: care@wowpio.com
Phone: 0532 297 5853
Address: Tilmapur, Varanasi, U.P, 221007
WhatsApp: +91-9369535853`;
} else if (msg.includes("help")) {
    reply = "I can help you with information about WowPio, our services, products, or general queries. Ask me anything!";
} else {
    const phoneNumber = "+919369535853";
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
        <div className="fixed bottom-4 right-6 z-50 flex items-end">
            {/* Desktop View - Chat window to the left of icon */}
            <div className="hidden md:flex items-end space-x-3">
                {open && (
                    <div className="w-80 h-96 bg-white shadow-2xl rounded-2xl flex flex-col border border-gray-200">
                        {/* Header */}
                        <div className="bg-blue-600 text-white p-4 rounded-t-2xl">
                            <h2 className="font-bold text-lg text-center">💬 Ask Me Anything</h2>
                        </div>

                        {/* Messages Container */}
                        <div className="flex-1 overflow-y-auto p-3 space-y-2">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`p-2 rounded-lg max-w-[70%] break-words text-sm ${
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
                        <div className="p-3 border-t border-gray-200">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your question..."
                                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                />
                                <button
                                    onClick={sendMessage}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Desktop Chat Toggle Button */}
                 <button
  onClick={() => setOpen(!open)}
  className="flex items-center justify-center w-16 h-16 rounded-full 
             hover:scale-110 
             transition-transform duration-300"
>
  <img src={chatIcon} alt="Chatbot" className="w-18 h-18" />
</button>
            </div>

            {/* Mobile View - Chat window above icon */}
            <div className="flex md:hidden items-end">
                {open && (
                    <div className="absolute bottom-16 right-0 w-[90vw] max-w-sm h-[70vh] max-h-96 bg-white shadow-2xl rounded-2xl flex flex-col border border-gray-200">
                        {/* Header */}
                        <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
                            <h2 className="font-bold text-lg">💬 Ask Me Anything</h2>
                            <button 
                                onClick={() => setOpen(false)}
                                className="text-white hover:text-gray-200 text-xl"
                            >
                                ×
                            </button>
                        </div>

                        {/* Messages Container */}
                        <div className="flex-1 overflow-y-auto p-3 space-y-3">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`p-3 rounded-2xl max-w-[85%] break-words text-sm ${
                                        msg.sender === "user"
                                            ? "bg-blue-500 text-white ml-auto rounded-br-none"
                                            : "bg-gray-100 text-gray-800 rounded-bl-none"
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                            <div ref={messagesEndRef}></div>
                        </div>

                        {/* Input Area */}
                        <div className="p-3 border-t border-gray-200">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your question..."
                                    className="flex-1 border border-gray-300 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                />
                                <button
                                    onClick={sendMessage}
                                    className="px-4 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center min-w-[50px]"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile Chat Toggle Button */}
                <button
  onClick={() => setOpen(!open)}
  className="flex items-center justify-center w-16 h-16 rounded-full 
             hover:scale-110 
             transition-transform duration-300"
>
  <img src={chatIcon} alt="Chatbot" className="w-18 h-18" />
</button>
            </div>
        </div>
    );
};

export default ChatbotToggle;