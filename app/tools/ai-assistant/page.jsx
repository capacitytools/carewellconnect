"use client";

import { useState } from "react";
import {
  Sparkles,
  Send,
  AlertCircle,
  MessageCircle,
  Stethoscope,
  Heart,
  Thermometer,
  Pill,
  Activity,
  Shield,
} from "lucide-react";

export default function AIHealthAssistantPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your AI Health Assistant. I can help you understand symptoms, provide health education, and guide you on when to seek professional care. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const exampleQuestions = [
    { icon: Thermometer, text: "I have a fever and headache", color: "rose" },
    { icon: Activity, text: "My blood pressure is 140/90", color: "emerald" },
    { icon: Pill, text: "What are the side effects of metformin?", color: "teal" },
    { icon: Heart, text: "How can I manage stress?", color: "pink" },
  ];

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (replace with actual API call later)
    setTimeout(() => {
      const aiResponse = {
        role: "assistant",
        content: `Thank you for your question. Based on what you've shared, here's some general information:\n\nThis is a simulated response. In the full version, this would connect to an AI model to provide personalized health education based on your specific question.\n\n**Important:** This information is for educational purposes only and is not a substitute for professional medical advice. If you're experiencing severe symptoms, please consult a healthcare provider or call emergency services.`,
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleExampleClick = (question) => {
    setInput(question);
  };

  const colorMap = {
    rose: "bg-rose-100 text-rose-600",
    emerald: "bg-emerald-100 text-emerald-600",
    teal: "bg-teal-100 text-teal-600",
    pink: "bg-pink-100 text-pink-600",
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">
                AI Health Assistant
              </h1>
              <p className="text-xs text-gray-500">
                Powered by advanced AI • Educational guidance only
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Banner */}
      <div className="bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-yellow-800 leading-relaxed">
              <strong>Important:</strong> This AI assistant provides educational
              information only. It is not a substitute for professional medical
              advice, diagnosis, or treatment. For emergencies, call{" "}
              <strong>112</strong> or visit your nearest hospital immediately.
            </p>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Messages Area */}
          <div className="h-[500px] overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] ${
                    msg.role === "user"
                      ? "bg-emerald-600 text-white"
                      : "bg-gray-100 text-gray-900"
                  } rounded-2xl px-4 py-3`}
                >
                  {msg.role === "assistant" && (
                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-200">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-semibold text-emerald-600">
                        AI Health Assistant
                      </span>
                    </div>
                  )}
                  <div className="text-sm leading-relaxed whitespace-pre-wrap">
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                    </div>
                    <span className="text-xs text-gray-500">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Example Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-3 font-medium">
                Try asking:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {exampleQuestions.map((q, idx) => {
                  const Icon = q.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleExampleClick(q.text)}
                      className="flex items-center gap-2 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition"
                    >
                      <div className={`w-8 h-8 rounded-lg ${colorMap[q.color]} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-gray-700">{q.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask a health question..."
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg font-medium transition flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Send</span>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Press Enter to send • Free users: 10 chats/day • Premium: Unlimited
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <InfoCard
            icon={Stethoscope}
            title="When to See a Doctor"
            description="Get guidance on symptoms that require professional medical attention."
          />
          <InfoCard
            icon={Shield}
            title="Evidence-Based"
            description="Information based on current medical guidelines and best practices."
          />
          <InfoCard
            icon={MessageCircle}
            title="Need More Help?"
            description="Book a consultation with Nurse Eunice for personalized guidance."
          />
        </div>
      </div>
    </main>
  );
}

function InfoCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-200">
      <Icon className="w-6 h-6 text-emerald-600 mb-2" />
      <h3 className="font-semibold text-gray-900 text-sm mb-1">{title}</h3>
      <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
