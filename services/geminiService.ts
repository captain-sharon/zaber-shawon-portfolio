
import { GoogleGenAI } from "@google/genai";
import { RESUME_SUMMARY, EXPERIENCES, SKILLS } from "../constants";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.error("Missing Gemini API Key. Please set VITE_GEMINI_API_KEY in your environment variables.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY || "dummy_key_to_prevent_crash_on_init" });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Zaber Shawon's developer portfolio. 
Your goal is to answer questions about Zaber's professional experience, skills, and projects based on the provided information.

Information about Zaber:
- Name: Al Zaber Shawon
- Title: Full Stack Developer / MERN Stack Expert
- Experience Summary: ${RESUME_SUMMARY}
- Skills: ${SKILLS.map(s => `${s.name} (${s.years} years)`).join(', ')}
- Competitive Programming: Codeforces Rating 1200.
- Education: BSc in CSE from Southeast University (2023-present).
- Work History:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}

Guidelines:
- Be professional, polite, and brief.
- Highlight Zaber's strengths in backend development and competitive programming.
- If you don't know the answer, politely suggest contacting Zaber via the contact form on the website.
- Do not mention that you are an AI unless specifically asked.
`;

export const chatWithPortfolioAI = async (message: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please try again or contact Zaber directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently taking a quick break. Feel free to use the contact form below!";
  }
};
