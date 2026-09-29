import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzarno9Btn9MDOTU_dem2ajJxjf1fDgtF8577D");
export const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
