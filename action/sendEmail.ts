"use server";
import React from "react";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/utils/utils";
import { EmailForm } from "@/email/email";

const resend = new Resend(process.env.RESEND_API_KEYS);

export const sendEmail = async (formData: FormData) => {
  console.log(formData);
  const senderEmail = formData.get("email");
  const message = formData.get("message");

  if (!message || !senderEmail) {
    return { error: "Invalid" };
  }

  // Simple server validatestring
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email!",
    };
  }

  if (!validateString(message, 225)) {
    return {
      error: "Invalid message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact from <onboarding@resend.dev>",
      to: "kevinnur532@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(EmailForm, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      errors: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
