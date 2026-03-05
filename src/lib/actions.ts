"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const InquirySchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Invalid phone number"),
    company: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
    type: z.enum(["general", "b2b", "distributor"]),
});

export async function submitInquiry(formData: FormData) {
    const validatedFields = InquirySchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        company: formData.get("company"),
        message: formData.get("message"),
        type: formData.get("type"),
    });

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, email, phone, company, message, type } = validatedFields.data;

    try {
        await resend.emails.send({
            from: "EY Power Leads <onboarding@resend.dev>",
            to: ["support@eypower.com.pk"], // Replace with client's real email
            subject: `New ${type.toUpperCase()} Lead: ${name}`,
            html: `
        <h2>New Lead from EY Power Website</h2>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return { success: true };
    } catch (error) {
        console.error("Resend Error:", error);
        return { error: "Failed to send lead. Please try again later." };
    }
}
