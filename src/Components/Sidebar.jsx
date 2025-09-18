import React, { useState, useEffect, useRef } from "react";

const SidebarChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);



  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const userInput = input; 
    setInput("");

    const typingId = Date.now() + 1;
    setMessages((prev) => [
      ...prev,
      { id: typingId, sender: "bot", text: "Typing..." },
    ]);

    try {
      const res = await fetch("https://backend-trozen.onrender.com/api/v1/user/bot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });

      if (!res.ok) throw new Error(`Network response was not ok: ${res.status}`);

      const data = await res.json();

      const botText =
        data?.data?.text ||
        data?.answer ||
        data?.text ||
        data?.output ||
        JSON.stringify(data);

      const botMessage = {
        id: Date.now() + 2,
        sender: "bot",
        text: botText,
      };

      setMessages((prev) =>
        prev.map((msg) => (msg.id === typingId ? botMessage : msg))
      );
    } catch (err) {
      console.error("Fetch error:", err);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === typingId
            ? { id: typingId, sender: "bot", text: "Error connecting to AI." }
            : msg
        )
      );
    }
  };

  return (
    <>
    
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 z-50 sm:bottom-6 sm:right-6"
      >
        {isOpen ? "✕" : "Chat"}
      </button>

    
      <div
        className={`fixed bottom-16 right-4 sm:bottom-20 sm:right-6 w-[90vw] max-w-xs sm:w-80 bg-white shadow-xl rounded-xl flex flex-col transition-all duration-300 z-40
          ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-96 pointer-events-none"
          }
        `}
      >
    
        <div className="p-3 bg-blue-500 text-white font-bold text-lg rounded-t-xl">
        Markdarshan
        </div>

        <div className="max-h-64 sm:max-h-72 p-3 overflow-y-auto flex flex-col gap-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-2 rounded-lg max-w-[75%] break-words whitespace-pre-wrap ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-gray-200 text-black self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 flex gap-2 border-t">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default SidebarChat;

