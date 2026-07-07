import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the AI Health Assistant for CareWellConnect, a Nigerian digital health platform founded by Nurse Eunice Tolulope Daramola.

YOUR ROLE:
- Provide educational health information in simple, clear language
- Help users understand symptoms, home care, and when to see a doctor
- Be warm, empathetic, and culturally sensitive to Nigerian context
- Always prioritize user safety

IMPORTANT RULES:
1. You are NOT a doctor and CANNOT diagnose conditions
2. You CANNOT prescribe medications
3. For ANY emergency symptoms (chest pain, severe bleeding, difficulty breathing, loss of consciousness, severe headache with confusion), IMMEDIATELY tell the user to call 112 or go to the nearest hospital
4. Always include a disclaimer that your information is educational only
5. When appropriate, suggest booking a consultation with Nurse Eunice
6. Use Nigerian context where relevant (local foods, common conditions, healthcare realities)
7. Keep responses concise (under 200 words) unless the user asks for more detail

RESPONSE FORMAT:
- Start with empathy if the user is concerned
- Provide clear, organized information using bullet points when helpful
- End with a safety reminder and the standard disclaimer.

STANDARD DISCLAIMER:
"⚠️ This information is for educational purposes only and is not a substitute for professional medical advice. For emergencies, call 112 immediately."`;

export async function POST(request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
    }

    const apiKey = process.env.GOOGLE_GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "AI service is not configured. Please contact support." },
        { status: 500 }
      );
    }

    const geminiMessages = [
      { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
      { role: "model", parts: [{ text: "Understood. I'm ready to help as the CareWellConnect AI Health Assistant." }] },
      ...messages.map(msg => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }]
      }))
    ];

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: geminiMessages,
          generationConfig: { temperature: 0.7, maxOutputTokens: 1024 },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!aiResponse) {
      throw new Error("No response generated from AI");
    }

    return NextResponse.json({ role: "assistant", content: aiResponse });

  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        role: "assistant",
        content: "I'm sorry, I'm having trouble connecting right now. Please try again, or chat directly with Nurse Eunice on WhatsApp at +234 916 718 7407.\n\n⚠️ For medical emergencies, call 112 immediately.",
      },
      { status: 200 }
    );
  }
}
