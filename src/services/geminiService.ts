import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants/constants";

// Initialize Gemini Client
// We use a factory function or a singleton pattern implicitly by exporting the function that uses the instance
// Note: In a real production app, ensure API_KEY is not exposed to the client if not intended.
// For this portfolio demo, we assume the environment variable is set.

let ai: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: import.meta.env.API_KEY || "" });
  }
  return ai;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const client = getAIClient();

    // Using gemini-2.5-flash for speed and efficiency for a chatbot
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return (
      response.text ||
      "I'm sorry, I couldn't generate a response at the moment."
    );
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm currently having trouble connecting to the AI service. Please try again later.";
  }
};
