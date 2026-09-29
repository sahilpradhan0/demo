import twilio from "twilio";

const apiKeySid = "SKb297e47df3a703f10ae67d6b79ffd45b";
const accountSid = "AC97a7ee273c38acbd8c2c72e9e1744217";

export const sms = twilio(apiKeySid, process.env.TWILIO_SECRET, { accountSid });
